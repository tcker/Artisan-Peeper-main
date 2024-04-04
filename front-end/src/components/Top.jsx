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

const invoices = [
  {
    invoice: "INV001",
    CV: "Success",
    assessment: "Failed",
    name: "Fabella, Emmanuel T.",
    totalAmount: "$250.00",
  },
  {
    invoice: "INV002",
    CV: "Pending",
    assessment: "Failed",
    name: "Raizen Vahn Cedrick Sanchez",
    totalAmount: "$150.00",
  },
  {
    invoice: "INV003",
    CV: "Failed",
    name: "Marcus Zach Lestat Guttierez Rancio",
    assessment: "Success",
    totalAmount: "$350.00",
  },
  {
    invoice: "INV004",
    CV: "Success",
    totalAmount: "$450.00",
    assessment: "Failed",
  },
  {
    invoice: "INV005",
    CV: "Success",
    totalAmount: "$550.00",
    assessment: "Failed",
  },
  {
    invoice: "INV006",
    CV: "Pending",
    totalAmount: "$200.00",
    assessment: "Success",
  },
  {
    invoice: "INV007",
    CV: "Failed",
    totalAmount: "$300.00",
    assessment: "Pending",
  },
]
 
const Top = () => {
  return (
    <Table className="w-[400px] overflow-auto">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Job</TableHead>
          <TableHead className="w-[200px]">Name</TableHead>
          <TableHead className="w-[100px]">Rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell className="[200px]">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">163</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default Top