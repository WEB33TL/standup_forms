import React, { useState } from 'react'

const initialFormState = {
  name: '',
  email: ''
}

function App() {
  const [data, setData] = useState([])
  const [form, setForm] = useState(initialFormState)

  const handleChange = e => {
    console.log('Value of input --> ', e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setData([...data, form])
    setForm(initialFormState)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={form.name}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input type="submit" value="Submit" />
      </form>
      {data.map(item => {
        return (
          <>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </>
        )
      })}
    </>
  )
}

export default App
