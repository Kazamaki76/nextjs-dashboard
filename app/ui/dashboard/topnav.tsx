'use client'
import { Post } from "@/app/types/PostType";
import { useState } from "react";

export default function SimpleTopNav() {
  const [data, setData] = useState<Post>({} as Post)
    return (
      <div className="bg-green-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-semibold">
            <span className="italic">a Board</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-green-700 rounded" aria-label="Sign in">
            {data.name}
          </button>
        </div>
      </div>
    );
  }