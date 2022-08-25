import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './Home'
import SnackOrBoozeApi from './Api'
import NavBar from './NavBar'
import Menu from './Menu'
import Item from './Item'
import NewItemForm from './NewItemForm'

function App () {
  const [isLoading, setIsLoading] = useState(true)
  const [snacks, setSnacks] = useState([])
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    async function getItems () {
      const snacks = await SnackOrBoozeApi.getSnacks()
      const drinks = await SnackOrBoozeApi.getDrinks()
      setSnacks(snacks)
      setDrinks(drinks)
      setIsLoading(false)
    }
    getItems()
  }, [])

  const addItem = (name, description, recipe, serve, type) => {
    const id = name
    console.log(type)

    if (type === 'drink') {
      setDrinks(drinks => [...drinks, { id, name, description, recipe, serve }])
    } else {
      setSnacks(snack => [...snacks, { id, name, description, recipe, serve }])
    }
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>
  }

  return (
    <div className="App">

        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/snacks" />
            </Route>

            <Route path="/newItem">
              <NewItemForm addItem={addItem}/>
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>

    </div>
  )
}

export default App
