import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";

function ResumeDonutChart() {
  const data = {
    labels: [
      'Hire', 'Reject'
    ],
    datasets: [{
      label: 'Resume Evaluation',
      data: [80,20],
      backgroundColor: [
        'rgb(99, 102, 241)',
        'rgb(0, 0, 50)'
      ],
      borderColor: "rgb(30, 41, 59)",
      circumference: 180,
      rotation: 270,
      hoverOffset: 8
    }]
  };

  return (
    <div className="w-[300px] h-[300px]">
      <Doughnut data={data}/>
    </div>
  )
}

export default ResumeDonutChart;
