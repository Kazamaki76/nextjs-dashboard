'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Post } from '@/app/types/PostType';
import { useRouter } from 'next/navigation'

export default function Page() {
  const[title,setTitle]=useState('')
  const[content,setContent]=useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter()

  const handleCreatePost = async () => {
    try {
      const json = localStorage.getItem('userData')
      const author = localStorage.getItem('userData')
      console.log(author)
      
      let object = JSON.parse(author);
      let authorId = object.id
      console.log(authorId)
      const response = await fetch('http://localhost:3000/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title,content,authorId }),
      });
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
      const data = await response.json();
      console.log('Post created', data);
       const router = useRouter()
       router.push('/dashboard')
      
      // Further actions after successful sign in, such as redirect or state update
    } catch (error) {
      console.error('Error during create post', error);
    }}
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [data, setData] = useState<Post[]>([] as Post[])
  
   useEffect  (   () => {
    async function getData(){
      const res = await fetch('http://127.0.0.1:3000/api/post');
      const posts = await res.json();
      posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setData(posts);
      setLoading(false);
    } 
    getData()
    
  },[])

    return  (<div className="flex h-screen bg-gray-100">
      
    {sidebarOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={toggleSidebar}></div>
    )}
    
    <div className="flex flex-col flex-1">
      <div className="bg-green-500 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="md:hidden" onClick={toggleSidebar}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 5h16M4 11h16M4 17h16" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded bg-gray-100 text-gray-700"
          />
          <div className="relative">
           
          </div>
        </div>
        <div className="flex items-center space-x-4">
        <button
        className="p-2 bg-green-700 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        create +
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    Add Post 
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                    
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      close
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create Post</h2>
          <button className="text-xl">&times;</button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full border text-black border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="What's on your mind..."
            className="w-full border text-black border-gray-300 rounded-lg py-2 px-4 h-24 focus:outline-none focus:border-blue-500"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="px-4 py-2 bg-white border border-green-500 text-green-500 rounded-lg hover:bg-green-50" type="button"
                    onClick={() => setShowModal(false)}>
          Close
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" type="button"
                    onClick={handleCreatePost}>
            Post
          </button>
        </div>
      </div>
    </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          
        </div>
      </div>


      {loading ? 
      <div> Loading</div> : <div className="flex-1 overflow-y-auto p-4">
        {data.map((post) => (
          <div key={post.id } className="bg-white p-4 rounded shadow mb-4">
            < Link href={`/dashboard/${post.id}`} > 
            <div className="flex items-center space-x-4 mb-2">
              <div>
                <div className="font-semibold">{post.author.name}</div>
              </div>
            </div>
            </Link>
            <div className="text-lg font-semibold mb-2">{post.title}</div>
            <div className="text-gray-700 mb-2">{post.content}</div>
            
          </div>
        ))}
      </div> }
    </div>
  </div>
    )
  }
