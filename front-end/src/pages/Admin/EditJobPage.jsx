import { useLoaderData, useParams } from "react-router-dom"
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {toast} from 'react-toastify'


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditJobPage({updateJobSubmit}) {
  const job = useLoaderData();
  const navigate = useNavigate();
  const {id} = useParams();

  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(job.company.description);
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

  const formSubmit = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail: contactEmail,
        contactPhone: contactPhone,
      },
    };

    updateJobSubmit(updatedJob);
    toast.success('Job Updated Successfully!')
    return navigate('/dashboard');
  }
  
  return (
    <Container>
      <div className="pl-2 pr-2 justify-center flex items-center">
        <Card className="w-[800px]">
          <form onSubmit={formSubmit}>
            <CardHeader>
              <CardTitle>Create Job Post</CardTitle>
              <CardDescription>Kindly fill-in the information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="type"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Job Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="border rounded w-full py-2 px-3"
                    required
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Job Listing Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name of your project"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Job Description</Label>
                  <Textarea
                    id="name"
                    placeholder="You are looking for..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Salary</Label>
                  <select
                    id="salary"
                    name="salary"
                    className="border rounded w-full py-2 px-3"
                    required
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  >
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - 60K">$50K - $60K</option>
                    <option value="$60K - 70K">$60K - $70K</option>
                    <option value="$70K - 80K">$70K - $80K</option>
                    <option value="$80K - 90K">$80K - $90K</option>
                    <option value="$90K - 100K">$90K - $100K</option>
                    <option value="$100K - 125K">$100K - $125K</option>
                    <option value="$125K - 150K">$125K - $150K</option>
                    <option value="$150K - 175K">$150K - $175K</option>
                    <option value="$175K - 200K">$175K - $200K</option>
                    <option value="Over $200K">Over $200K</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Location</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name of your project"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Company Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name of your project"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Company Description</Label>
                  <Textarea
                    id="name"
                    placeholder="You are looking for..."
                    value={companyDescription}
                    onChange={(e) => setCompanyDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Company Email</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name of your project"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Company Phone</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name of your project"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button  type="submit">Update Job</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Container>
  )
}

export default EditJobPage