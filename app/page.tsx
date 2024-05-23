
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from './ui/fonts';
import Image from 'next/image';

import React from "react";
<div className={styles.shape} />;




async function getData() {
  const res = await fetch('http://127.0.0.1:3000/api/user');
  let data = await res.json()
  console.log(res)
  console.log(res.ok)
  console.log(data)
  return data
}
 
export  default  async function Page() {
  const data = await getData()
  return <div className="flex flex-col h-screen bg-green-900 md:flex-row">
    <div className="sm:flex md:hidden  flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-0">
    <div className="text-center">
      <img src="/board.png" alt="Board" className="mb-4 w-48 h-auto mx-auto md:w-64" />
      
      <div className="text-white italic">a Board</div>
    </div>
  </div>
  <div className="flex justify-center items-center w-full md:w-1/2 p-8 md:p-0 bg-green-700 rounded-b-3xl md:rounded-b-none md:rounded-l-3xl">
  <div className="w-full max-w-xs md:max-w-sm">
      <div className="text-white text-3xl mb-6 text-left">Sign in</div>
      <input
        type="text"
        placeholder="Username"
        className="p-2 mb-4 w-full rounded bg-white text-gray-900"
      />
      <button className="p-2 w-full rounded bg-green-600 text-white">Sign In</button>
    </div>
  </div>
  <div className="hidden md:flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-0">
  <div className="text-center">
      <img src="/board.png" alt="Board" className="mb-4 w-48 h-auto mx-auto md:w-64" />
      
      <div className="text-white italic">a Board</div>
    </div>
  </div>
</div>

  
    };
    
    














