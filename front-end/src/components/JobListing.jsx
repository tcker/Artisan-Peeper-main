import JobCard from "./JobCard.jsx";
import jobs from "@/jobs.json";

function JobListing() {
  return (
    <div className="flex justify-center align-center overflow-hidden pl-2 pr-2">
      <div className="grid md:grid-cols-2 md:justify-center md:align-center xl:grid-cols-4 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobListing;
