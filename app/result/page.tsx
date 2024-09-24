"use client";
import Image from "next/image";
import WinnerImage from '../../assets/winner.gif';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';

const ResultPage = () => {
    const [score, setScore] = useState<number | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedScore = localStorage.getItem('quizScore'); 
        if (storedScore) {
            setScore(parseInt(storedScore, 10)); 
        }
    }, []);

    return (
        <div className="mt-6 text-center">
            <h3 className="text-2xl text-[#55AC78] font-bold">Uau! Você arrasou, parabéns! 🎉</h3>
            <p className="text-black">Que tal mais um desafio pra provar que foi sorte... ou puro gênio? 😜</p>
            <p className="mt-4 text-[#46178F] font-bold">Sua pontuação foi : {score !== null ? score : 'N/A'} de 6</p>
            <Image className='max-w-[700px] w-full' src={WinnerImage} alt='Carlton Banks dancing'/>
            <Button text='Novo Quiz' onClick={() => {
                localStorage.removeItem('quizScore'); 
                router.push('/'); 
            }}>
              
            </Button>
        </div>
    );
};

export default ResultPage;