import Container from "@/components/Container.jsx";
import { useParams, useLoaderData } from "react-router-dom";
import { FaMapMarker, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function JobPage({deleteJob}) {
  const { id } = useParams();
  const job = useLoaderData();
  const navigate = useNavigate();

  function onDeleteClick(id) {
    deleteJob(id);
    toast.success('Job Deleted Successfully!')
    navigate('/dashboard')

  }

  return (
    <Container>
      <div className="py-4">
        <section>
          <div className="container py-6 px-6 mb-2">
            <Link
              to="/dashboard"
              className="hover:text-indigo-200 flex items-center transition duration-100"
            >
              <FaArrowLeft className="mr-2" /> Back to Job Listings
            </Link>
          </div>
        </section>
        <div className="grid sm:grid-cols-1 gap-2 pl-2 pr-2 grid-flow-row">
          <div className="grid gap-2 grid-cols">
            <Card className="p-5">
              <CardHeader>
                <CardDescription>{job.type}</CardDescription>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardDescription className="flex gap-2 items-center text-indigo-400">
                <div className="items-center flex gap-2 ml-6">
                  <FaMapMarker />
                  {job.location}
                </div>
              </CardDescription>
            </Card>
            <Card className="p-5">
              <CardHeader>
                <CardTitle className="text-md ">Job Description</CardTitle>
                <CardDescription>{job.description}</CardDescription>
                <CardTitle className="text-md ">Salary</CardTitle>
                <CardDescription>{job.salary}</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Card className="p-5">
              <CardHeader>
                <CardTitle className="text-xl ">Company Info</CardTitle>
                <CardDescription>
                  <CardTitle className="text-md">{job.company.name}</CardTitle>
                  <CardDescription>{job.company.description}</CardDescription>
                </CardDescription>
                <CardTitle className="text-md">Contact</CardTitle>
                <CardDescription>
                  {job.company.contactEmail}
                  <br />
                  {job.company.contactPhone}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="p-5">
              <CardHeader>
                <CardTitle>Manage Job</CardTitle>
                <div className="grid sm:grid-cols-1 md:grid-cols-8 gap-2 pt-4">
                  <Link to={`/edit-job/${job.id}`} className="w-23">
                    <Button className="w-[100%]">Edit Job</Button>
                  </Link>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="w-23" variant="outline">
                        Delete Job
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your job posting and remove it from the job list.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => onDeleteClick(job.id)}>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
