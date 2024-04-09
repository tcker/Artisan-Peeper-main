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
import { db, storage } from '../../../backend/config/firebase'; 
import { getDocs, collection } from 'firebase/firestore';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const TablePassing = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const userData = await Promise.all(usersSnapshot.docs.map(async doc => {
          const userData = { id: doc.id, ...doc.data() };
          const userFolderRef = ref(storage, `resumes/${userData.uid}`);
          const userFolderSnapshot = await listAll(userFolderRef);
          if (userFolderSnapshot.items.length > 0) {
            return userData;
          }
          return null;
        }));
        setUsers(userData.filter(user => user !== null));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleViewResume = async (uid) => {
    console.log('View Resume clicked for user UID:', uid);
    try {
      const userFolderRef = ref(storage, `resumes/${uid}`);
      const userFolderSnapshot = await listAll(userFolderRef);
      if (userFolderSnapshot.items.length === 0) {
        console.log('User folder is empty.');
        toast.error('No resume uploaded yet!');
        return;
      }
      const firstFileRef = userFolderSnapshot.items[0];
      const resumeUrl = await getDownloadURL(firstFileRef);
      window.open(resumeUrl, '_blank');
    } catch (error) {
      console.error('Error fetching or viewing resume:', error);
    }	
  };
  
  return (
    <Table className="w-full md:w-full lg:w-[850px]">
      <TableCaption>A list of Registered Applicants.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">First Name</TableHead>
          <TableHead className="w-[100px]">Last Name</TableHead>
          <TableHead className="w-[200px]">Email</TableHead>
          <TableHead className="w-[200px]">Job Position</TableHead>
          <TableHead className="w-[100px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index}>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.email}</TableCell>
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
