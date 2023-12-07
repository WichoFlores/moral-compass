"use client"; // This is a client component 👈🏽

import { VT323 } from 'next/font/google'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { scenarios } from './utils/scenarios';

const vtFont = VT323({ weight: "400", subsets: ['latin'] })

export default function Home() {
  const maxElements = 3;
  const [visitedScenarios, setVisitedScenarios] = useState<number[]>([]);
  const [currentScenario, setCurrentScenario] = useState<number | null>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Start at a random scenario
    const randomScenario = Math.floor(Math.random() * scenarios.length);
    setCurrentScenario(randomScenario);
    setVisitedScenarios([randomScenario]);
  }, []);

  const handleShowOptions = () => {
    setTimeout(() => {
      setShowOptions(true);
    }, 1500);
  };

  const handlePressOption = () => {
    if (visitedScenarios.length < maxElements) {
      setLoading(true);
      setShowOptions(false);
      setTimeout(() => {
        let nextScenario;
        do {
          nextScenario = Math.floor(Math.random() * scenarios.length);
        } while (visitedScenarios.includes(nextScenario));
        setCurrentScenario(nextScenario);
        setVisitedScenarios([...visitedScenarios, nextScenario]);
        setLoading(false);
      }, 250);
    }
  };

  if (currentScenario === null) {
    return null;
  }

  return (
    <main className="bg-neutral-900/70 h-screen w-screen">
      <div className='mx-auto h-full flex justify-center w-screen gap-12 p-32'>
        <div className='h-full relative w-3/5'>
          <Image src={scenarios[currentScenario].image}
            alt = 'background'
            layout = 'fill'
            objectFit = 'contain'
            quality = {100}
          />
        </div>
        <div className='h-full relative w-2/5 flex flex-col justify-between gap-12'>
          <div className={vtFont.className}>
            {!loading && <TypeAnimation
              sequence={[...scenarios[currentScenario].sequence, () => {handleShowOptions()}]}
              wrapper="span"
              cursor={true}
              speed={90}
              className='sm:text-base md:text-lg md:leading-10 lg:text-3xl lg:leading-10 xl:text-5xl xl:leading-snug'
              style={{ display: 'inline-block', whiteSpace: 'pre-line' }}
            />}
          </div>
          <div className={`${vtFont.className} pt-12`}>
            {showOptions && scenarios[currentScenario].options.map((option, index) => (
              <p key={index} className='text-white hover:bg-white hover:text-neutral-900/70 sm:text-base md:text-lg md:leading-10 lg:text-3xl xl:text-5xl cursor-pointer w-max p-2 max-w-fit' onClick={() => handlePressOption()}>
                / {option}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
