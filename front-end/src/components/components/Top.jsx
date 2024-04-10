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
} from "@/components/ui/table.jsx"
import {Link} from 'react-router-dom'
import {invoices} from '../invoices.json'
 
const Top = () => {
  return (
    <Table className="w-full md:w-full lg:w-[400px] ">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="md:w-[300px] lg:w-[100px]">Job</TableHead>
          <TableHead className="lg:w-[200px]">Name</TableHead>
          <TableHead className="lg:w-[150px]">Overall Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices
        .filter((invoice) => invoice.CV === "Passed" && invoice.isAssessmentDone)
        .sort((a, b) => b.overallRating - a.overallRating)
        .map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell><Link to={`/view-user/${invoice.id}`}>{invoice.name}</Link></TableCell>
            <TableCell className="[200px]">{invoice.overallRating}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Top