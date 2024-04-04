import JobListing from "@/components/JobListing.jsx"
import Container from "@/components/Container.jsx"
import { Button } from '@/components/ui/button'
import Total from '@/components/Total'
import TablePassing from '@/components/TablePassing.jsx'
import Top from '@/components/Top.jsx'

function AdminDashboard() {
  return (
    <Container>
      <div className="flex justify-between mx-5 flex-wrap">
        <h1 className="pl-5 mb-5 font-bold text-4xl upp">Welcome back, Admin.</h1>
      </div>
      <div className="flex justify-center lg:justify-start 2xl:justify-center flex-wrap gap-6 mx-5 my-3">
        <Total title="Total Applicants" total="163" added="+"/>
        <Total title="CV Passing Applicants" total="106" added="+"/>
        <Total title="Passed Assessment" total="56" added="+"/>
        <Total title="Total Passing" total="23" added="+"/>
      </div>
      <div className="flex justify-center gap-7 flex-wrap my-7 mx-5">
        <div className="p-5 border-2 rounded-lg shadow-md">
          <p className="text-xl font-bold mb-3">Passing Applicants</p>
          <TablePassing/>
        </div>
        <div className="p-5 border-2 rounded-lg shadow-md">
          <p className="text-xl font-bold mb-3">Top Applicants</p>
          <Top/>
        </div>
      </div>

      <div className="flex justify-between mt-7 py-10 px-1 mx-5 flex-wrap border-2 shadow-lg">
      <h1 className="pl-5 mb-5 font-bold text-4xl">Applicants view</h1>
        <JobListing/>
      </div>
    </Container>
  )
}

export default AdminDashboard
