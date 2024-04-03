import JobListing from "@/components/JobListing.jsx"
import Container from "@/components/Container.jsx"
import { Button } from '@/components/ui/button'
import Total from '@/components/Total'

function AdminDashboard() {
  return (
    <Container>
      <div className="flex justify-between mx-4 flex-wrap">
        <h1 className="pl-5 mb-5 font-bold text-3xl upp">Welcome back, Admin.</h1>
        <Button className="text-lg text-white bg-indigo-700">Share</Button>
      </div>
      <div className="flex flex-wrap gap-6 mx-5 my-3">
        <Total title="Total Applicants" total="163" added="+"/>
        <Total title="CV Passing Applicants" total="106" added="+"/>
        <Total title="Passed Assessment" total="56" added="+"/>
        <Total title="Total Passing" total="23" added="+"/>
      </div>
        <JobListing/>
    </Container>
  )
}

export default AdminDashboard
