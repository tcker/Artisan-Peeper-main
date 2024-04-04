import JobListing from "@/components/JobListing.jsx";
import Container from "@/components/Container.jsx";
import Total from "@/components/Total";
import TablePassing from "@/components/TablePassing.jsx";
import Top from "@/components/Top.jsx";

function AdminDashboard() {
  return (
    <Container>
      <div className="flex justify-center items-center flex-col py-2">
        <div className="flex justify-between mx-4 flex-wrap ">
          <h1 className="font-bold text-2xl upp">Welcome back, Admin.</h1>
        </div>
        <div className="flex flex-wrap gap-6 px-2 my-3">
          <Total title="Total Applicants" total="163" added="+" />
          <Total title="CV Passing Applicants" total="106" added="+" />
          <Total title="Passed Assessment" total="56" added="+" />
          <Total title="Total Passing" total="23" added="+" />
        </div>
        <JobListing />
      </div>
    </Container>
  );
}

export default AdminDashboard;
