'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Difficulty } from "../types/quiz";

import Button from "../components/Button/Button";

import HomepageImage from '../assets/home-pic.gif';
import { useDifficulty } from "../context/DifficultyContext";

const Home = () => {
  
  const router = useRouter();
  const {difficulty, setDifficulty} = useDifficulty()

  const handleButtonClick = () => {
    router.push('/quiz');
  }

  return (
    <div className='text-center'>
     <p className='text-[#020288]  p-4'>Você tem o que é preciso para se tornar o mestre do Quiz?</p>

     <label htmlFor="difficulty">Escolha a dificuldade:</label>
            <select
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            >
                <option value={Difficulty.EASY}>Fácil</option>
                <option value={Difficulty.MEDIUM}>Médio</option>
                <option value={Difficulty.HARD}>Difícil</option>
            </select>
    <Image className='max-w-[700px] w-full rounded-[10px]' src={HomepageImage} alt='home-page' />
    <Button text='Iniciar Quiz' onClick={handleButtonClick}/>
    </div>
  );
};

export default Home;