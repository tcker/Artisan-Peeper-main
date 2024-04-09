import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Link } from "react-router-dom";
import { Button } from "./ui/button";

import SoftSkillsRadialChart from "./charts/SoftSkillsRadialChart";
import BigFiveRadialChart from "./charts/BigFiveRadialChart";
import ResumeDonutChart from "./charts/ResumeDonutChart";
import HiringMeterDonutChart from "./charts/HiringMeterDonutChart";

const AboutCard = ({ image, name, job, email, contact, type }) => {
  const subject = encodeURIComponent(
    "Congratulations! Invitation to Final Stage of Hiring Process"
  );

  const rejectSubject = encodeURIComponent(
    "Application Status Update"
  );

  const onboardBody = encodeURIComponent(`
  Dear ${name},
  
  I hope this email finds you well.
  
  I am pleased to inform you that you have successfully passed the assessment stage of our hiring process for the ${job} position. Congratulations on this achievement!
  
  Your skills, experience, and achievements have impressed our hiring team, and we believe you would be a valuable addition to our company.
  
  We would like to invite you to the final stage of the hiring process, where we will discuss the details of your onboarding and provide you with the opportunity to review and sign the job offer.
  
  The final stage will include:
  
  1. Onboarding Process Overview: We will provide you with an overview of our company's onboarding process, including important information about our culture, policies, and procedures.
  
  2. Job Offer Discussion: We will discuss the details of the job offer, including compensation, benefits, and any additional terms or conditions.
  
  3. Signing of Job Offer: Once all details have been reviewed and agreed upon, we will present you with the job offer for your review and signature.
  
  Please let us know your availability for the final stage of the hiring process. We are flexible and will do our best to accommodate your schedule.
  
  If you have any questions or require any additional information before the final stage, please feel free to contact me at +63 0920 123 4567.
  
  Once again, congratulations on your success so far, and we look forward to meeting with you to discuss the next steps.
  
  Best regards,
  
  John Craig
  Human Resource
  +63 0920 123 4567
  John Doe
  `);

  const rejectionBody = encodeURIComponent(`
  Dear ${name},
  
  
Thank you for taking the time to apply for the [Job Position] at [Your Company Name]. We appreciate the opportunity to review your application and carefully considered your qualifications.

After a thorough review of all candidates, we regret to inform you that we have decided not to move forward with your application at this time. While we received many impressive applications, we ultimately selected candidates whose skills and experiences align more closely with the requirements of the position.

We want to express our gratitude for your interest in joining our team. We recognize the effort and dedication it takes to apply for a position, and we genuinely appreciate the time and energy you invested in the application process.

Although we are unable to offer you a position at this time, we encourage you to continue pursuing your career goals and exploring opportunities that match your skills and aspirations. We will keep your application on file for future reference, and we encourage you to apply for other positions with us that align with your qualifications and interests.

Once again, thank you for considering [Your Company Name] as a potential employer. We wish you the best of luck in your future endeavors, and we hope our paths may cross again in the future.

Sincerely,
  
  John Craig
  Human Resource
  +63 0920 123 4567
  John Doe
  `);

  const onboardTemplate = `mailto:${email}?subject=${subject}&body=${onboardBody}`;
  const rejectTemplate = `mailto:${email}?subject=${rejectSubject}&body=${rejectionBody}`;

  const [openAssessment, setOpenAssessment] = useState(true);
  const [onboard, setOnboard] = useState(true);

  const handleAssessment = () => {
    setOpenAssessment(!openAssessment);
  };

  const handleOnboarding = () => {
    setOnboard(!onboard);
  };

  return (
    <>
      <div className="flex flex-col gap-2 py-2">
        <Card>
          <CardHeader className="flex items-center justify-center md:justify-start sm:flex-col md:flex-row gap-8">
            <div className="grid justify-center items-center">
              <img
                className="h-24 w-24 rounded-full"
                src={'/profile/' + image}
              />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <CardTitle>{name}</CardTitle>
              <CardDescription className="text-muted-bg my-1">
                {job}
              </CardDescription>
              <CardDescription>{type}</CardDescription>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <p className="text-sm text-gray-200">
              <span className="text-gray-500 text-l">Email:</span> {email}
            </p>
            <p className="text-sm text-gray-200">
              <span className="text-gray-500 text-l">Phone:</span> {contact}
            </p>
          </CardHeader>
          <CardContent className="flex gap-4">
            {openAssessment ? (
              <Button
                variant="outline"
                className="bg-yellow-700 hover:bg-yellow-600 dark:text-white transition ease-in-out duration-200"
                onClick={handleAssessment}
              >
                Open Assessment
              </Button>
            ) : (
              <Button
                variant="outline"
                className="bg-rose-700 hover:bg-rose-600 dark:text-white transition ease-in-out duration-200"
                onClick={handleAssessment}
              >
                Close Assessment
              </Button>
            )}
            {onboard ? (
              <Link to={onboardTemplate}>
                  <Button
                  className="bg-green-700 hover:bg-green-600 dark:text-white transition ease-in-out duration-200"
                  onClick={handleOnboarding}
                >
                  Onboard
                </Button>
              </Link>
            ) : (
              <Button
                className="bg-orange-500 hover:bg-red-600 dark:text-white transition ease-in-out duration-200"
                onClick={handleOnboarding}
              >
                Unboard
              </Button>
            )}

            <Link to={rejectTemplate}>
            <Button className="bg-red-700 hover:bg-red-600 dark:text-white">
              Reject
            </Button>
            </Link>
            <Link to={`mailto:${email}`}>
              <Button className="dark:text-white">Send an Email</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Statistics</CardTitle>
            <CardDescription className="flex flex-col justify-center items-center gap-8">
              <CardContent>
                <CardTitle className="text-center text-md mt-6 mb-2">
                  Talent Hiring Meter
                </CardTitle>
                <HiringMeterDonutChart />
              </CardContent>
              <CardContent>
                <CardTitle className="text-center text-md mt-6 mb-2">
                  Resume Evaluation Score
                </CardTitle>
                <ResumeDonutChart />
              </CardContent>
              <CardContent>
                <CardTitle className="text-center text-md mt-6 mb-2">
                  Soft Skill Assessment Score
                </CardTitle>
                <SoftSkillsRadialChart />
              </CardContent>
              <CardContent>
                <CardTitle className="text-center text-md mt-6 mb-2">
                  Big-5-Theory Personality Insight
                </CardTitle>
                <BigFiveRadialChart />
              </CardContent>
            </CardDescription>
          </CardHeader>
          <CardContent className="w-[700px] flex flex-col gap-4">
            <p className="text-center font-bold text-xl">Findings Summary</p>
            <p className="text-start text-sm text-muted-foreground">Overall, Rhyu&apos;s response demonstrates strengths in conscientiousness, agreeableness, and low neuroticism, which are associated with effective conflict resolution and interpersonal relationships. However, there could be further emphasis on aspects like openness to experience and extraversion to enhance Rhyu&apos;s approach.
To improve Rhyu&apos;s response and predict job success, he could provide specific examples of situations where he successfully applied these principles in a team setting. Additionally, discussing how he adapts his approach based on the personalities and preferences of team members could further showcase Rhyu&apos;s emotional intelligence and ability to navigate conflicts effectively.</p>
            <p className="text-center font-bold text-xl">Detailed Report</p>
            <p className="text-start font-bold">Agreeableness - <span className="text-green-500">80</span></p>
            <p className="text-start text-sm text-muted-foreground">Rhyu&apos;s emphasis on communication, compromise, and understanding reflects an agreeable approach to conflict resolution. Rhyu prioritize maintaining positive relationships and avoiding confrontational or aggressive behaviors, which are characteristic of agreeable individuals.</p>
            <p className="text-start font-bold">Conscientiousness - <span className="text-orange-500">75</span></p>
            <p className="text-start text-sm text-muted-foreground">Rhyu&apos;s approach to conflict resolution highlights a sense of responsibility and diligence. Rhyu advocate for proactive communication and active listening, suggesting a conscientious effort to address issues constructively and prevent escalation.</p>
            <p className="text-start font-bold">Extraversion - <span className="text-red-500">60</span></p>
            <p className="text-start text-sm text-muted-foreground">While Rhyu response doesn&apos;t explicitly focus on extraversion, it does emphasize the importance of interpersonal communication and engagement. Rhyu suggest that resolving conflicts requires initiating communication and actively listening to others, which aligns with extraverted tendencies.</p>
            <p className="text-start font-bold">Openness - <span className="text-green-500">80</span></p>
            <p className="text-start text-sm text-muted-foreground">Rhyu&apos;s response suggests a willingness to engage with and explore different perspectives and approaches to conflict resolution. Rhyu emphasize the importance of communication and compromise, indicating openness to new ideas and solutions</p>
            <p className="text-start font-bold">Neuroticism - <span className="text-green-500">85</span></p>
            <p className="text-start text-sm text-muted-foreground">Rhyu&apos;s response suggests a calm and rational approach to conflict, advocating for dialogue and understanding rather than resorting to violence or aggression. This indicates a low level of neuroticism, as he appear to handle conflict in a composed and emotionally stable manner.</p>

          </CardContent>
        </Card>

      </div>
    </>
  );
};

export default AboutCard;
