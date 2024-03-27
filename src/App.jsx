import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
  <section className='container'>
    <RouterProvider router={router} />
  </section>
  )
}

export default App
