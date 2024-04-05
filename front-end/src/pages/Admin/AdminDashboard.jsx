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
        <div className="flex justify-center gap-7 flex-wrap my-7 mx-5">
          <div className="p-5 border-2 rounded-lg shadow-md">
            <p className="text-xl font-bold mb-5">
              Passed Curriculum Vitae&apos;s
            </p>
            <TablePassing />
          </div>
          <div className="p-5 border-2 rounded-lg shadow-md">
            <p className="text-xl font-bold mb-3">P`assed Assessments</p>
            <Top />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-3">
          <h1 className="block pl-5 mb-5 font-bold text-4xl">
            Applicants view
          </h1>
          <JobListing />
        </div>
      </div>
    </Container>
  );
}

export default AdminDashboard;
