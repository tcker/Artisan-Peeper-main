import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const scores = [
  {
    AssessScore: "Teamwork",
    Score: "8/10",
    result: "Success",
  },
  {
    AssessScore: "Communication",
    Score: "7/10",
    result: "Success",
  },
  {
    AssessScore: "Problem Solving",
    Score: "4/10",
    result: "Failed",
  },
  {
    AssessScore: "Work Ethic",
    Score: "7/10",
    result: "Success",
  },
  {
    AssessScore: "Interpersonal",
    Score: "7/10",
    result: "Success",
  },
  {
    AssessScore: "Time Management",
    Score: "1/10",
    result: "Failed",
  },
  {
    AssessScore: "Adaptability",
    Score: "8/10",
    result: "Success",
  },
]


const AssessEval = ({total}) => {
  return (
    <div className='w-full lg:w-[900px] p-5 dark:bg-slate-900 shadow-md rounded-xl border-[1px] mr-5 border-gray mb-5'>
      <span className='text-xl font-bold overflow-auto'>Assessment Scores</span>
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Soft Skill</TableHead>
          <TableHead>Score</TableHead>
          <TableHead>Result</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {scores.map((score) => (
          <TableRow key={score.scores}>
            <TableCell className="font-medium w-96">{score.AssessScore}</TableCell>
            <TableCell className="w-24">{score.Score}</TableCell>
            <TableCell className="w-24">{score.result}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total Score</TableCell>
            <TableCell className="text-right px-10">{total}50%</TableCell>
          </TableRow>
        </TableFooter>
    </Table>
    </div>
  )
}

export default AssessEval