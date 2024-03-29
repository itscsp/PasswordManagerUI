import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import RootLayout from './pages/RootLayout'
import PasswordList from './pages/PasswordList'
import PasswordDetailPage from './pages/PasswordDetailPage'
import EditPassword from './pages/EditPassword'
import AddPassowrd from './pages/AddPassword'

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
        path:'/password/add',
        element: <AddPassowrd />  
      },
      {
        path:'/password/:pswdId',
        element: <PasswordDetailPage />  
      },
      {
        path:'/password/:pswdId/edit',
        element: <EditPassword />  
      },
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
