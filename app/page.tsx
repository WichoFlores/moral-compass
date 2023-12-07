"use client"; // This is a client component 👈🏽

import { VT323 } from 'next/font/google'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { englishToSpanishMap, scenarios } from './utils/scenarios';

const vtFont = VT323({ weight: "400", subsets: ['latin'] })

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function Home() {
  const maxElements = 10;
  const [visitedScenarios, setVisitedScenarios] = useState<number[]>([]);
  const [currentScenario, setCurrentScenario] = useState<number | null>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [scenarioState, setScenarioState] = useState({
    compassion: 0,
    justice: 0,
    pragmatism: 0,
    honor: 0,
    integrity: 0,
    fairness: 0,
    survival: 0,
    altruism: 0,
  })


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

  const handlePressOption = (index: number) => {
    if (currentScenario === null) return;

    // Update scenario state
    const selectedValue = scenarios[currentScenario].values[index];
    const newScenarioState = { ...scenarioState };
    newScenarioState[selectedValue] += 1;
    setScenarioState(newScenarioState);

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

  if (visitedScenarios.length === maxElements) {
    const data = Object.entries(scenarioState)
    .filter(([key, value]) => value > 0)
    .map(([key, value]) => ({
      subject: englishToSpanishMap[key as keyof typeof englishToSpanishMap],
      A: value,
      fullMark: 4,
    }));

    
    
    return (
      <main className="bg-neutral-900/70 h-screen w-screen">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </main>
    )
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
              <p key={index} className='text-white hover:bg-white hover:text-neutral-900/70 sm:text-base md:text-lg md:leading-10 lg:text-3xl xl:text-5xl cursor-pointer w-max p-2 max-w-fit' onClick={() => handlePressOption(index)}>
                / {option}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
