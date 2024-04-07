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
import { db, storage } from '../../../backend/config/firebase'; // Import storage and database from your Firebase configuration file
import { getDocs, collection } from 'firebase/firestore';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

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

  const handleViewResume = async (uid) => {
    console.log('View Resume clicked for user UID:', uid);
    try {
      // Construct a reference to the user's folder in Firebase Storage
      const userFolderRef = ref(storage, `resumes/${uid}`);
  
      // Get a list of files in the user's folder
      const userFolderSnapshot = await listAll(userFolderRef);
  
      // Check if the user's folder is empty
      if (userFolderSnapshot.items.length === 0) {
        console.log('User folder is empty.');
        // Optionally, display a message to the user
        return;
      }
  
      // Get the reference of the first file in the user's folder
      const firstFileRef = userFolderSnapshot.items[0];
  
      // Get the download URL for the first file
      const resumeUrl = await getDownloadURL(firstFileRef);
  
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
          <TableHead className="w-[100px]">Actions</TableHead>
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
              <button onClick={() => handleViewResume(user.uid)}>View Resume</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );  
};

export default TablePassing;
