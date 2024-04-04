import JobListing from "@/components/JobListing.jsx"
import Container from "@/components/Container.jsx"
import Total from '@/components/Total'
import TablePassing from '@/components/TablePassing.jsx'
import Top from '@/components/Top.jsx'

function AdminDashboard() {
  return (
    <Container>
      <div className="flex justify-between mx-5 flex-wrap">
        <h1 className="pl-5 mb-5 font-bold text-4xl upp">Welcome back, Admin.</h1>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-4 justify-items-center place-items-center mx-5 my-3">
        <Total title="Total Applicants" total="163" added="+35"/>
        <Total title="CV Passing Applicants" total="106" added="+15"/>
        <Total title="Passed Assessment" total="56" added="+27"/>
        <Total title="Total Passing" total="23" added="+3"/>
      </div>
      <div className="flex justify-center gap-7 flex-wrap my-7 mx-5">
        <div className="p-5 border-2 rounded-lg shadow-md">
          <p className="text-xl font-bold mb-5">Passed Curriculum Vitae's</p>
          <TablePassing/>
        </div>
        <div className="p-5 border-2 rounded-lg shadow-md">
          <p className="text-xl font-bold mb-3">Passed Assessments</p>
          <Top/>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-7 py-10 px-1 mx-5 border-2 shadow-lg">
      <h1 className="block pl-5 mb-5 font-bold text-4xl">Applicants view</h1>
        <JobListing/>
      </div>
    </Container>
  )
}

export default AdminDashboard
