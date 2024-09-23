import Image from "next/image";
import { Quicksand } from 'next/font/google';
import Logo from '../assets/logo.svg';
import { DifficultyProvider } from "../context/DifficultyContext";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
})

export const metadata = {
  title: "Quiz App",
  description: "Become the quiz!",
};

const  RootLayout = ({
  children
 }: {children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-[#fff] p-4">
      <DifficultyProvider>
        <main className={`${quicksand.variable} font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center`}>
        <Image className="h-[80px] sm:h-full " src={Logo} alt='logo quiz' />
        {children}
        </main>
        </DifficultyProvider>
      </body>
    </html>
  );
};

export default RootLayout;