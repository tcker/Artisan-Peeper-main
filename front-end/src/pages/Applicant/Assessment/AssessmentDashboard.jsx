import Container from "@/components/Container.jsx";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button.jsx";

function AssessmentDashboard() {
  return (
    <Container>
      <div className="pl-2 pr-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-indigo-900 text-center text-3xl">
              Assessment Exam
            </CardTitle>
            <CardContent>
              <CardTitle className="text-green-700 text-xl">
                The DO&apos;s Before The Exam
              </CardTitle>
              <ol className="leading-10 tracking-wide">
                <li>
                  <strong>Prepare Adequately:</strong> Spend some time preparing
                  for the assessment. Review the soft skills being assessed and
                  think about examples from your past experiences that
                  demonstrate those skills.
                </li>
                <li>
                  <strong>Read Instructions Carefully:</strong> Take the time to
                  read all instructions provided before starting each
                  assessment. Understand what is expected of you for each task.
                </li>
                <li>
                  <strong>Stay Calm and Focused:</strong> Maintain a calm and
                  focused mindset throughout the assessment. Try to manage any
                  stress or nerves that may arise.
                </li>
                <li>
                  <strong>Demonstrate Soft Skills:</strong> During the
                  assessment, aim to demonstrate the soft skills being
                  evaluated. Show examples of your communication,
                  problem-solving, teamwork, and adaptability skills.
                </li>
                <li>
                  <strong>Use Time Wisely:</strong> Manage your time effectively
                  during each assessment. Allocate time for reading
                  instructions, completing tasks, and reviewing your work if
                  possible.
                </li>
                <li>
                  <strong>Review Answers Before Submitting:</strong> Before
                  submitting each assessment, take a moment to review your
                  answers or responses. Look for any errors or areas that could
                  be improved.
                </li>
                <li>
                  <strong>Stay Positive:</strong> Maintain a positive attitude
                  throughout the assessment process. Even if you encounter
                  challenges or find certain tasks difficult, try to approach
                  them with a positive mindset.
                </li>
              </ol>
            </CardContent>
            <CardContent>
              <CardTitle className="text-red-700 text-xl">
                The DONT&apos;s Before The Exam
              </CardTitle>
              <ol className="leading-10 tracking-wide">
                <li>
                  <strong>Rush Through Assessments:</strong> Avoid rushing
                  through assessments without fully understanding the
                  instructions or tasks. Take your time to ensure quality
                  responses.
                </li>
                <li>
                  <strong>Guess Answers:</strong> Try not to guess answers to
                  assessment questions if you&apos;re unsure. It&apos;s better to provide
                  thoughtful, well-considered responses.
                </li>
                <li>
                  <strong>Disregard Soft Skill Criteria:</strong> Don&apos;t ignore
                  the soft skill criteria being evaluated. Make a conscious
                  effort to demonstrate these skills in your responses and
                  actions.
                </li>
                <li>
                  <strong>Get Distracted: </strong>Minimize distractions during
                  the assessment process. Find a quiet, comfortable environment
                  where you can focus fully on the tasks at hand.
                </li>
                <li>
                  <strong>Leave Assessments Incomplete:</strong> Make sure to
                  complete all required assessments before proceeding. Leaving
                  assessments incomplete could impact your overall evaluation.
                </li>
                <li>
                  <strong>Ignore Feedback:</strong> If feedback is provided on
                  your assessments, take it seriously and use it as an
                  opportunity for growth and improvement.
                </li>
                <li>
                  <strong>Lose Confidence:</strong> Even if you encounter
                  challenges or difficulties during the assessments, try to
                  maintain confidence in your abilities. Stay resilient and
                  approach tasks with a can-do attitude.
                </li>
                <li>
                  <strong>
                    Don&apos;t Collaborate with AI During Individual Assessments:
                  </strong>{" "}
                  Avoid collaborating with AI tools or bots during individual
                  assessments where collaboration is prohibited. This includes
                  using AI to solve problems or answer questions on behalf of
                  the individual.
                </li>
              </ol>
            </CardContent>
            <CardContent>
              By reading and agreeing to this message, you acknowledge and
              consent to Artisan Peeper&apos;s use of your data for screening
              assessment purposes.
            </CardContent>
          </CardHeader>
          <CardFooter className="flex flex-row">
            <CardContent>
              <Button>I agree and proceed to the assessment</Button>
            </CardContent>
          </CardFooter>
        </Card>
      </div>
    </Container>
  );
}

export default AssessmentDashboard;
