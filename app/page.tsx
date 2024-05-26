'use client'
import styles from '@/app/ui/home.module.css';
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

<div className={styles.shape} />;
export  default function Page() {
  const [name, setName] = useState('');
  const router = useRouter()


 const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      if (!response.ok) {
        throw new Error('Failed to sign in');
      }
      const data = await response.json();
      console.log('Sign in successful:', data);
      router.push('/dashboard')
      // Further actions after successful sign in, such as redirect or state update
    } catch (error) {
      console.error('Error during sign in:', error);
    }}
  
  return <div className="flex flex-col h-screen bg-green-300 md:flex-row">
  <div className="sm:flex md:hidden flex-col justify-center items-center w-full p-8">
    <div className="text-center">
      <img src="/board.png" alt="Board" className="mb-4 w-48 h-auto mx-auto" />
      <div className="text-white italic">a Board</div>
    </div>
  </div>

  <div className="flex justify-center items-center w-full md:w-1/2 p-8 md:p-0 bg-green-500 rounded-b-3xl md:rounded-b-none md:rounded-l-3xl">
    <div className="w-full max-w-xs md:max-w-sm">
      <div className="text-white text-3xl mb-6 text-left">Sign in</div>
      <input
        type="text"
        placeholder="Username"
        className="p-2 mb-4 w-full rounded bg-white text-gray-900"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSignIn} className="p-2 w-full rounded bg-green-600 text-white">
        Sign In
      </button>
    </div>
  </div>

  <div className="hidden md:flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-0">
    <div className="text-center">
      <img src="/board.png" alt="Board" className="mb-4 w-64 h-auto mx-auto" />
      <div className="text-white italic">a Board</div>
    </div>
  </div>
</div>
    };