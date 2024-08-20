import { DM_Sans } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import { Inter } from "next/font/google";
import { cn } from '../lib/utils';
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "../components/ui/sonner";
import './globals.css';

const fontHeading = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

// font
const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '700']
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Interview Genie",
  description: "Empowered by AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body 
          className={cn(
            'antialiased',
            fontHeading.variable,
            fontBody.variable,
            inter.className
          )}
        >
          <Toaster/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
