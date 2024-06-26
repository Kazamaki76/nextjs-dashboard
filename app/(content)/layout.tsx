import SideNav from '@/app/ui/dashboard/sidenav';
import SimpleTopNav from '../ui/dashboard/topnav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>

      <SimpleTopNav/>
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-green-100">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    </div>
  );
}