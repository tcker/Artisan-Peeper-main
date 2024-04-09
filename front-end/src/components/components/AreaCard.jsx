import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button.jsx";
import {
  CameraAlert,
  CameraAlertAction,
  CameraAlertCancel,
  CameraAlertContent,
  CameraAlertDescription,
  CameraAlertFooter,
  CameraAlertHeader,
  CameraAlertTitle,
  CameraAlertTrigger,
} from "@/components/CameraAlert.jsx";

const Question = ({ scorez }) => {
  return (
    <div
      className={
        "flex flex-col border-gray-300 justify-center h-64 w-72 p-7 bg-white border-2 rounded-xl  ease-in-out duration-200 dark:bg-slate-950 dark:border-slate-600 hover:bg-indigo-100 dark:hover:bg-indigo-950 transition cursor-pointer"
      }
    >
      <div className="grid justify-end">
        {scorez.score}/{scorez.upto}
      </div>
      <span className="col-start-1 col-end-4 mb-2 pb-2 text-xl hover:text-slate-700 font-bold border-b-2 border-black dark:border-white text-wrap dark:text-white dark:hover:text-slate-200">
        {scorez.title}
      </span>
      <div className="flex mt-2 mb-3 gap-2">
        <Badge className="text-black dark:text-black-200 bg-slate-200 hover:bg-slate-300">
          10 Questions
        </Badge>
        <Badge className="text-black dark:text-black-200 bg-yellow-100 hover:bg-yellow-200">
          10 Mins
        </Badge>
      </div>
      <CameraAlert>
        <CameraAlertTrigger className="grid justify-start">
          <Button>Start Assessment</Button>
        </CameraAlertTrigger>
        <CameraAlertContent>
          <CameraAlertHeader>
            <CameraAlertTitle>Disclaimer: Camera Usage</CameraAlertTitle>
            <CameraAlertDescription>
              The whole process requires an open camera for trasparency. Please
              open your camera to continue to the assessment.
            </CameraAlertDescription>
          </CameraAlertHeader>
          <CameraAlertFooter>
            <CameraAlertCancel>Cancel</CameraAlertCancel>
            <CameraAlertAction>
              <Link to={`/assessment-start/${scorez.id}`}>Continue</Link>
            </CameraAlertAction>
          </CameraAlertFooter>
        </CameraAlertContent>
      </CameraAlert>
    </div>
  );
};

export default Question;
