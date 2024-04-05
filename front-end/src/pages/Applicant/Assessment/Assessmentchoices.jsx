import Container from "@/components/Container.jsx";
import AreaCard from "@/components/AreaCard";
import scores from "../../../scores.json";

const Assessmentchoices = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="border-b-[2px] mb-5 border-black dark:border-slate-400 text-wrap ">
            Soft Skills Evaluation
          </h1>
          <div
            className="grid md:grid-cols-4 gap-4"
          >
            {scores.map((scorez) => (
              <AreaCard key={scorez.id} scorez={scorez} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Assessmentchoices;
