import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
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

import { useState } from "react";
import FileUpload from "@/components/FileUpload";
import { FaMapMarker } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {Link} from 'react-router-dom'


function JobCard({ job }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description || "";
  if (!showFullDescription && description.length > 90) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <Card className="xl:w-[350px]">
      <CardHeader>
        <CardDescription>{job.type}</CardDescription>
        <CardTitle>{job.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-5">{description}</div>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>
        <CardDescription className="flex gap-x-2">
          <FaMapMarker />
          {job.location}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-x-4">

      <AlertDialog>
        <AlertDialogTrigger>
        <Button className="bg-indigo-500 hover:bg-indigo-300 text-white" variant="outline">Apply</Button>
        </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Upload CV/Resume File:</AlertDialogTitle>
              <AlertDialogDescription>
                To apply for {job.title}, please upload your Curriculum Vitae (CV) or resume that contains the expertise and experience correlated to the chosen career. 
                <div className="h-5"></div>
                <div className="flex justify-center items-center h-56 w-full border-2 border-slate-400 rounded-md relative">
                    <FileUpload/>
                </div>
                <div className="h-3"></div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
             <AlertDialogAction>Submit</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
      </AlertDialog>

        <Link to={`/jobs/${job.id}`}>
          <Button variant="outline">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default JobCard;
