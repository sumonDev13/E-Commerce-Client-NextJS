"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { POST } from '@/utils/http';
import toast, { Toaster } from 'react-hot-toast';

const signUp = () => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] =useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();


  const handleUserNameChange = (event:any) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
  };
  const handleFirstNameChange = (event:any) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event:any) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event:any) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event:any) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async () => {
   
    try {
      
      const response = await POST(
        `http://localhost:5000/api/signup`,
        {
          firstName,
          lastName,
          email,
          phone,
          userName,
          password,
        },
      
      );

      if (response) {
        toast('signUp successful!');
        router.push('/login');
        window.location.reload();
      }
    } catch (error:any) {
      console.log('error', error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
     
    </>
  );
};

export default signUp;
