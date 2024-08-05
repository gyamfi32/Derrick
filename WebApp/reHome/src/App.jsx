import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from "./pages/Home"
import Products from "./pages/Products"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </>
  ))

  return (
      <RouterProvider router={router} />
  )
}

export default App
