import {Outlet} from 'react-router-dom'
import Navbar from '@/components/Navbar.jsx'

function MainLayout({isAssessmentOpen}) {
  return (
    <>
      <Navbar isAssessmentOpen={isAssessmentOpen}/>
      <Outlet/>
    </>
  )
}

export default MainLayout
