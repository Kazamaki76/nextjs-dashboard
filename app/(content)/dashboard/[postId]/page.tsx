'use client'
import { Post } from '@/app/types/PostType';
import { useRouter } from 'next/navigation'
import { useState , useEffect } from 'react';

export default  function Page({ params }: { params: { postId: string } }) {  
  const [loadind, setLoadind] = useState(true)
  const [data, setData] = useState<Post>({} as Post)
   useEffect  (   () => {
    async function getData(){
      let  res = await fetch(`http://127.0.0.1:3000/api/post/${params.postId}`);
      res = await res.json()
      console.log(res)
      setData(res)
      setLoadind(false)

      return res
    } 
    getData()
    
  },[])

  const createComment = async (event) => {
    event.preventDefault(); 
    const commentContent = event.target.form[0].value; 
    try {
      const response = await fetch('http://localhost:3000/api/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postId: params.postId, content: commentContent })
      });
      if (!response.ok) {
        throw new Error('Failed to create comment');
      }
      const newComment = await response.json();
      setData(prevState => ({
        ...prevState,
        comments: [...prevState.comments, newComment]
      }));
      event.target.form[0].value = ''; 
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [openComment, setOpenComment] = useState(false);
  const toggleComment = () => {
    setOpenComment(!openComment);
  }
  const router = useRouter()

    return <div>
  
    <div className="flex flex-col h-screen bg-gray-100">

      <div className="bg-green-500 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="md:hidden" onClick={toggleSidebar} aria-label="Toggle sidebar">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 5h16M4 11h16M4 17h16" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded bg-gray-100 text-gray-700"
            aria-label="Search"
          />
          <div className="relative">
            <button className="p-2 bg-green-700 rounded" aria-label="Community options">Community</button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          
        </div>
      </div>

      
      
        {loadind ? 
         <div> Loading</div> :<div key={data.id} className="flex-1 overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto bg-white p-4 rounded shadow mb-4">
          <button onClick={()=> router.push('/dashboard')} className="text-gray-600" aria-label="Go back">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center space-x-4 my-4">
           
            <div>
               <div  className="font-semibold">{data.author.name}</div>
              
            </div>
          </div>
          <div className="text-lg text-gray-500 mb-2">History</div>

          <h1  className="text-2xl font-bold mb-4"> {data.title}</h1>
          <p className="text-gray-700 mb-4">
            {data.content}
          </p>
          { openComment ? <form action="open" placeholder='Add Comments'>
            <input type="text" className="w-full py-10" placeholder="Enter your Comment..." ></input>
            <button onClick={createComment} type='submit' aria-label='Submit' className='p-2 bg-green-600 text-white rounded mb-4' > Submit</button>
            <button onClick={toggleComment} type='reset' aria-label='Submit'className='p-2 bg-red-600 text-white rounded mb-4'> Cancel </button>
          </form> 
          :<button className="p-2 bg-green-600 text-white rounded mb-4" onClick={toggleComment}  >Add Comments</button>
          }


          {data.comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-4 mb-4">
             
              <div>
                <div className="font-semibold">User Name</div>
                <div className="text-sm text-gray-500 mb-2">12h ago</div>
                <p className="text-gray-700">
                  {comment.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>  
        }
    </div>
  </div>
    
  }