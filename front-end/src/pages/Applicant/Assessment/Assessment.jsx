import QuestionNav from "@/components/QuestionNav";
import Container from "@/components/Container.jsx";
import Camera from "@/components/Camera.jsx";
import Question from "@/components/Question.jsx";
import { Button } from "@/components/ui/button";

const Assessment = () => {
  return (
    <Container>
      <div className="grid gap-x-5 md:grid-cols-2 justify-center items-center min-h-screen">
        <div className="border-in grid justify-center items-center">
          <div className="grid gap-4">
            <Camera />
            <QuestionNav />
          </div>
        </div>
        <div className="flex flex-col gap-10 pt-5 overflow-hidden">
          <span className="pb-2 text-2xl text-wrap border-b-[1px] w-full">
            Teamwork
          </span>
          <div className="h-[calc(70vh+100px)] overflow-scroll grid gap-4">
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Button className="mt-10 mb-10 w-[100%]">Submit</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Assessment;
