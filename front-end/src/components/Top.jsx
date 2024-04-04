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

const invoices = [
  {
    invoice: "INV001",
    CV: "Success",
    assessment: "Failed",
    name: "Fabella, Emmanuel T.",
    totalAmount: "56/100",
  },
  {
    invoice: "INV002",
    CV: "Pending",
    assessment: "Failed",
    name: "Raizen Vahn Cedrick Sanchez",
    totalAmount: "67/100",
  },
  {
    invoice: "INV003",
    CV: "Failed",
    name: "Marcus Zach Lestat Guttierez Rancio",
    assessment: "Success",
    totalAmount: "85/100",
  },
  {
    invoice: "INV004",
    CV: "Success",
    totalAmount: "56/100",
    assessment: "Failed",
  },
  {
    invoice: "INV005",
    CV: "Success",
    totalAmount: "56/100",
    assessment: "Failed",
  },
  {
    invoice: "INV006",
    CV: "Pending",
    totalAmount: "56/100",
    assessment: "Success",
  },
  {
    invoice: "INV007",
    CV: "Failed",
    totalAmount: "56/100",
    assessment: "Pending",
  },
]
 
const Top = () => {
  return (
    <Table className="w-full md:w-full lg:w-[400px] ">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="md:w-[300px] lg:w-[100px]">Job</TableHead>
          <TableHead className="lg:w-[200px]">Name</TableHead>
          <TableHead className="lg:w-[100px]">Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell><Link to="/view-user">{invoice.name}</Link></TableCell>
            <TableCell className="[200px]">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Top