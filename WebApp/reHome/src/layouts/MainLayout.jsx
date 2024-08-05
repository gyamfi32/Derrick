import { Outlet } from "react-router-dom"
import NavHeader from "../components/nav/NavHeader"
import Footer from "../components/Footer/Footer"
const MainLayout = () => {
  return (
    <>
        <NavHeader />
        <Outlet />
        <Footer />
        
    </>
  )
}

export default MainLayout