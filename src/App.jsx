import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
function App() {
  let browser=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'login',
          element:<Login/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={browser}/>
  )
}

export default App
