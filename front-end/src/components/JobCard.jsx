import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";

import { useState } from "react";

import {FaMapMarker} from 'react-icons/fa'
import { Button } from "@/components/ui/button";


function JobCard({job}) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  let description = job.description || '';
  if (!showFullDescription && description.length > 90) {
    description = description.substring(0, 90) + '...';
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
          className='text-indigo-500 mb-5 hover:text-indigo-600'
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>
        <CardDescription className="flex gap-x-2">
          <FaMapMarker/>
          {job.location}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-x-4">
        <Button className="bg-indigo-500 hover:bg-indigo-300">Apply</Button>
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}

export default JobCard;
