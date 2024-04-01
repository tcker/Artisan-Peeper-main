import JobListing from "@/components/JobListing.jsx"
import Container from "@/components/Container.jsx"

function AdminDashboard() {
  return (
    <Container>
      <div>
        <h1 className="pl-5 mb-5 font-bold text-3xl upp">Welcome back, Admin.</h1>
        <JobListing/>
      </div>
    </Container>
  )
}

export default AdminDashboard
