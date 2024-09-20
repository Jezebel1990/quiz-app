'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "../components/Button/Button";

import HomepageImage from '../assets/home-pic.gif';

const Home = () => {
  const router = useRouter();

  const handleButtonClick = () => router.push('/quiz');

  return (
    <div className='text-center'>
     <p className='text-[#020288]  p-4'>Você tem o que é preciso para se tornar o mestre do Quiz?</p>
    <Image className='max-w-[700px] w-full rounded-[10px]' src={HomepageImage} alt='home-page' />
    <Button text='Iniciar Quiz' onClick={handleButtonClick}/>
    </div>
  );
}

export default Home;