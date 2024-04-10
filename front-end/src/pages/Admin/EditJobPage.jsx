import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

function EditJobPage({ updateJobSubmit }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // State variable to store job data
  const [jobData, setJobData] = useState({
    title: "",
    type: "",
    location: "",
    description: "",
    salary: "",
    company: {
      name: "",
      description: "",
      contactEmail: "",
      contactPhone: "",
    },
  });

  // Fetch job data from API
  useEffect(() => {
    // Replace this with your API call to fetch job data based on the ID
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/jobs/${id}`);
        if (response.ok) {
          const job = await response.json();
          setJobData(job);
        } else {
          throw new Error("Failed to fetch job data");
        }
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchData();
  }, [id]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    updateJobSubmit(jobData);
    toast.success("Job Updated Successfully!");
    navigate("/dashboard");
  };

  return (
    <Container>
      <div className="pl-2 pr-2 justify-center flex items-center">
        <Card className="w-[800px]">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Edit Job Post</CardTitle>
              <CardDescription>Edit the information below</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="mb-4">
                  <Label htmlFor="type">Job Type</Label>
                  <select
                    id="type"
                    name="type"
                    className="border rounded w-full py-2 px-3 dark:bg-slate-900"
                    required
                    value={jobData.type}
                    onChange={(e) =>
                      setJobData({ ...jobData, type: e.target.value })
                    }
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Job Listing Name</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Name of the job"
                    required
                    value={jobData.title}
                    onChange={(e) =>
                      setJobData({ ...jobData, title: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Description of the job"
                    value={jobData.description}
                    onChange={(e) =>
                      setJobData({ ...jobData, description: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="salary">Salary</Label>
                  <select
                    id="salary"
                    name="salary"
                    className="border rounded w-full py-2 px-3 dark:bg-slate-900"
                    required
                    value={jobData.salary}
                    onChange={(e) =>
                      setJobData({ ...jobData, salary: e.target.value })
                    }
                  >
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - 60K">$50K - $60K</option>
                    <option value="$60K - 70K">$60K - $70K</option>
                    <option value="$70K - 80K">$70K - $80K</option>
                    <option value="$80K - $90K">$80K - $90K</option>
                    <option value="$90K - $100K">$90K - $100K</option>
                    <option value="$100K - $125K">$100K - $125K</option>
                    <option value="$125K - $150K">$125K - $150K</option>
                    <option value="$150K - $175K">$150K - $175K</option>
                    <option value="$175K - $200K">$175K - $200K</option>
                    <option value="Over $200K">Over $200K</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Location of the job"
                    required
                    value={jobData.location}
                    onChange={(e) =>
                      setJobData({ ...jobData, location: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Name of the company"
                    value={jobData.company.name}
                    onChange={(e) =>
                      setJobData({
                        ...jobData,
                        company: { ...jobData.company, name: e.target.value },
                      })
                    }
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="companyDescription">Company Description</Label>
                  <Textarea
                    id="companyDescription"
                    placeholder="Description of the company"
                    value={jobData.company.description}
                    onChange={(e) =>
                      setJobData({
                        ...jobData,
                        company: {
                          ...jobData.company,
                          description: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="contactEmail">Company Email</Label>
                  <Input
                    id="contactEmail"
                    type="text"
                    placeholder="Email of the company"
                    value={jobData.company.contactEmail}
                    onChange={(e) =>
                      setJobData({
                        ...jobData,
                        company: { ...jobData.company, contactEmail: e.target.value },
                      })
                    }
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="contactPhone">Company Phone</Label>
                  <Input
                    id="contactPhone"
                    type="text"
                    placeholder="Phone number of the company"
                    value={jobData.company.contactPhone}
                    onChange={(e) =>
                      setJobData({
                        ...jobData,
                        company: {
                          ...jobData.company,
                          contactPhone: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Update Job</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Container>
  );
}

export default EditJobPage;
