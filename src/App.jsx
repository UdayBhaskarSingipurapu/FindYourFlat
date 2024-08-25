import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './components/Home/Home'
function App() {
  let browser=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
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
