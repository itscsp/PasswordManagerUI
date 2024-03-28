import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import RootLayout from './pages/RootLayout'
import PasswordList from './pages/PasswordList'
import PasswordDetailPage from './pages/PasswordDetailPage'
import EditPassword from './pages/EditPassword'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element: <HomePage />,
      },
      {
        path:'/password',
        element: <PasswordList />,
      }, 
      {
        path:'/password/:pswdId',
        element: <PasswordDetailPage />  
      }
    ]
  }
])

const App = ()=> {
  
  return (
  <section className='container'>
    <RouterProvider router={router} />
  </section>
  )
}

export default App;
