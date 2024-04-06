import React, { useState, useEffect } from 'react';
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
import { db } from '../../../backend/config/firebase'; // Assuming db is your Firestore instance
import { getDocs, collection } from 'firebase/firestore';


const TablePassing = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const userData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };


    fetchUsers();
  }, []);


  const handleViewResume = async (resumePath) => {
    try {
      // Fetch the resume file
      const response = await fetch(resumePath);
      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }
      // Convert response to blob
      const resumeBlob = await response.blob();
      // Create a URL for the blob
      const resumeUrl = URL.createObjectURL(resumeBlob);
      // Open the URL in a new tab
      window.open(resumeUrl, '_blank');
    } catch (error) {
      console.error('Error fetching or viewing resume:', error);
    }
  };


  return (
    <Table className="w-full md:w-full lg:w-[850px]">
      <TableCaption>A list of registered users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Email</TableHead>
          <TableHead className="w-[100px]">First Name</TableHead>
          <TableHead className="w-[100px]">Last Name</TableHead>
          <TableHead className="w-[200px]">Job Position</TableHead>
          <TableHead className="w-[100px]">View Resume</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index}>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.jobPosition}</TableCell>
            <TableCell>
              <button onClick={() => handleViewResume(user.resumePath)}>View Resume</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};


export default TablePassing;


