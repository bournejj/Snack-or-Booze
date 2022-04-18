import React, {useState} from 'react';


const NewItemForm = ({addItem}) => {
    const INITIAL_STATE = {
        name: '',
        description: '',
        recipe: '',
        serve: '',
        type: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        addItem(formData.name, formData.description, formData.recipe, formData.serve, formData.type)

    }

    return (

<form onSubmit={handleSubmit}>
    <label htmlFor="name">Item</label>
    <input
    type="text"
    name="name"
    placeholder="Item Name"
    value={formData.name}
    onChange={handleChange}
    />
    <label htmlFor="description">Description</label>
    <input
    type="text"
    name="description"
    placeholder="Description"
    value={formData.description}
    onChange={handleChange}
    />
    <label htmlFor="recipe">Recipe</label>
    <input
    type="text"
    name="recipe"
    placeholder="Recipe"
    value={formData.recipe}
    onChange={handleChange}
    />
    <label htmlFor="serve">Serve</label>
    <input
    type="text"
    name="serve"
    placeholder="Serve"
    value={formData.serve}
    onChange={handleChange}
    />
    <select 
    name='type'
    onChange={handleChange}
    >
  <option value="food">food</option>
  <option value="drink">drink</option>
  </select>

  <button>Add Item</button>
  


</form>


    )




}

export default NewItemForm;