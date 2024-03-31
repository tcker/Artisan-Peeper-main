import {Outlet} from 'react-router-dom'
import Navbar from '@/components/Navbar.jsx'

function MainLayout({isAssessmentOpen, isAdmin}) {
  return (
    <>
      <Navbar isAssessmentOpen={isAssessmentOpen} isAdmin={isAdmin}/>
      <Outlet/>
    </>
  )
}

export default MainLayout
