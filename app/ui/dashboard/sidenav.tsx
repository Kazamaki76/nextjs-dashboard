import Link from "next/link";
export default function SideNav() {
  return (
    <div className="hidden md:block w-full h-screen  p-4">
      <div className="text-2xl font-semibold mb-4">a Board</div>
      <nav className="space-y-2">
        <Link href="/dashboard" className="flex items-center space-x-2 p-2 text-gray-700 rounded hover:bg-gray-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        Home
        </Link>
        <Link href={"/our-blog"} className="flex items-center space-x-2 p-2 text-gray-700 rounded hover:bg-gray-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13H5v-2h14v2z" />
          </svg>
          <>Our Blog</>
        </Link>
      </nav>
    </div>
  );
}
