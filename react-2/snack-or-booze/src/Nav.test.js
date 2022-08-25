import React, { useEffect, useState } from 'react'
import SnackOrBoozeApi from './Api'
import NavBar from './NavBar'
import App from './App'
import Menu from './Menu'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

it('renders without crashing', () => {
  render(<MemoryRouter><NavBar/></MemoryRouter>)
})

beforeEach(() => {
  async function getItems () {
    const snacks = await SnackOrBoozeApi.getSnacks()
    const drinks = await SnackOrBoozeApi.getDrinks()
  }
})

test('/ snacks route', () => {
     <MemoryRouter initialEntries={['/']}>
         <NavBar />
         </MemoryRouter>

     expect(getByText('Snack or Booze')).toBeInTheDocument()
})
test('/ snacks route', ({ drinks }) => {
  render(

     <MemoryRouter initialEntries={['/snacks']}>

         <Menu items={drinks}/>
         </MemoryRouter>
  )
  expect(getByText('Snack or Booze')).toBeInTheDocument()
})
test('nav bar links', () => {
  const { getByText } = render((

     <MemoryRouter>
         <NavBar/>

         </MemoryRouter>
  ))
  const linkElement = getByText(/snacks/i)

  const ev = fireEvent.click(linkElement)
  console.log(ev)

  expect(getByText('Food Menu')).toBeInTheDocument()
})
