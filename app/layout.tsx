import '@/app/ui/global.css';
import { castoro } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${castoro.className} antialiased`}>{children}</body>
    </html>
  );
}