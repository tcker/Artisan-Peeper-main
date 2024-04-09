import React from 'react'
import Container from './Container';
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
import {Link} from 'react-router-dom'
import {invoices} from '../invoices.json'
 
const TablePassing = () => {
  return (
      <Table className="w-full md:w-full lg:w-[740px] p-0">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="w-[100px]">CV</TableHead>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead className="w-[70px]">CV Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices
          .sort((a, b) => b.rating - a.rating)
          .map((invoice) => (
            <TableRow key={invoice.id}  className="cursor-pointer">
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.CV}</TableCell>
              <TableCell><Link to={`/view-user/${invoice.id}`}>{invoice.name}</Link></TableCell>
              <TableCell className="[200px]">{invoice.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}

export default TablePassing