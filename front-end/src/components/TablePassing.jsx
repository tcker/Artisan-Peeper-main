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
} from "@/components/ui/table"
import {Link} from 'react-router-dom'

const invoices = [
  {
    invoice: "INV001",
    CV: "Success",
    assessment: "Failed",
    name: "Fabella, Emmanuel T.",
    totalAmount: "55%",
  },
  {
    invoice: "INV002",
    CV: "Pending",
    assessment: "Failed",
    name: "Raizen Vahn Cedrick Sanchez",
    totalAmount: "25%",
  },
  {
    invoice: "INV003",
    CV: "Failed",
    name: "Marcus Zach Lestat Guttierez Rancio",
    assessment: "Success",
    totalAmount: "65%",
  },
  {
    invoice: "INV004",
    CV: "Success",
    assessment: "Failed",
    name: "Fabella, Emmanuel T.",
    totalAmount: "55%",
  },
  {
    invoice: "INV005",
    CV: "Pending",
    assessment: "Failed",
    name: "Raizen Vahn Cedrick Sanchez",
    totalAmount: "25%",
  },
  {
    invoice: "INV006",
    CV: "Failed",
    name: "Marcus Zach Lestat Guttierez Rancio",
    assessment: "Success",
    totalAmount: "65%",
  },
  {
    invoice: "INV007",
    CV: "Success",
    assessment: "Failed",
    name: "Fabella, Emmanuel T.",
    totalAmount: "55%",
  },
  {
    invoice: "INV008",
    CV: "Pending",
    assessment: "Failed",
    name: "Raizen Vahn Cedrick Sanchez",
    totalAmount: "25%",
  },
  {
    invoice: "INV009",
    CV: "Failed",
    name: "Marcus Zach Lestat Guttierez Rancio",
    assessment: "Success",
    totalAmount: "65%",
  },
]
 
const TablePassing = () => {
  return (
    <Table className="w-full md:w-full lg:w-[850px] ">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Job</TableHead>
          <TableHead className="w-[100px]">CV</TableHead>
          <TableHead className="w-[200px]">Name</TableHead>
          <TableHead className="w-[70px]">CV Rating</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.CV}</TableCell>
            <TableCell><Link to="/view-user">{invoice.name}</Link></TableCell>
            <TableCell className="[200px]">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TablePassing