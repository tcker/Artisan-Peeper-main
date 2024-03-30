import {Outlet} from 'react-router-dom'
import Navbar from '@/components/Navbar.jsx'
import ApplicantFooter from "@/components/ApplicantFooter"

function MainLayout({isAssessmentOpen}) {
  return (
    <>
      <Navbar isAssessmentOpen={isAssessmentOpen}/>
      <Outlet/>
      <ApplicantFooter/>
    </>
  )
}

export default MainLayout
