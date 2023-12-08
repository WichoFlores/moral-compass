"use client"; // This is a client component 👈🏽

import { VT323 } from 'next/font/google'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { englishToSpanishMap, scenarioValues, scenarios } from './utils/scenarios';

const vtFont = VT323({ weight: "400", subsets: ['latin'] })

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const defaultScenarioState = {
  compassion: 0,
  justice: 0,
  pragmatism: 0,
  honor: 0,
  integrity: 0,
  fairness: 0,
  survival: 0,
  altruism: 0,
}

export default function Home() {
  const maxElements = 10;
  const [visitedScenarios, setVisitedScenarios] = useState<number[]>([]);
  const [currentScenario, setCurrentScenario] = useState<number | null>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // const [scenarioState, setScenarioState] = useState(defaultScenarioState);

  const [scenarioState, setScenarioState] = useState({
    compassion: 1,
    justice: 4,
    pragmatism: 1,
    honor: 1,
    integrity: 1,
    fairness: 1,
    survival: 1,
    altruism: 1,
  })


  const initialize = () => {
    const randomScenario = Math.floor(Math.random() * scenarios.length);
    setCurrentScenario(randomScenario);
    setVisitedScenarios([randomScenario]);
  }

  const reinitialize = () => {
    setCurrentScenario(null);
    setVisitedScenarios([]);
    setScenarioState(defaultScenarioState);
  }

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
    return (
      <main className={`${vtFont.className} bg-neutral-900/70 h-screen w-screen`}>
      <div className="w-full h-full flex justify-evenly items-center flex-col">
        <div className='flex justify-center items-center flex-col gap-6'>
          <div className='flex flex-col items-center'>
            <h2 className={`${vtFont.className} text-9xl`}>Valores</h2>
            <TypeAnimation
              preRenderFirstString={true}
                sequence={[
                  500,
                  'Pon a prueba tu moral',
                  1000,
                  'Pon a prueba tus valores',
                  1000,
                  'Pon a prueba tus decisiones',
                  1000,
                  'Pon a prueba tu ética',
                  500,
                ]}
              speed={50}
              className='text-5xl'
              repeat={Infinity}
            />
          </div>
          <div className='flex align-center flex-col'>
            <p className='text-center text-lg'>Por: Carlos Perez y Luis Flores</p>
            <p className='text-center text-lg'>Universidad Humanitas</p>
          </div>
        </div>
        <p className='text-white hover:bg-white hover:text-neutral-900/70 text-4xl cursor-pointer w-max p-2 max-w-fit' onClick={initialize}>Iniciar</p>
      </div>
    </main>
    )
  }

  if (visitedScenarios.length !== maxElements) {

    // Find the most selected value
    const max = Math.max(...Object.values(scenarioState));
    const mostSelectedValue = Object.keys(scenarioState).find(key => scenarioState[key as keyof typeof scenarioState] === max);

    const data = Object.entries(scenarioState)
    .filter(([key, value]) => value > 0)
    .map(([key, value]) => ({
      subject: englishToSpanishMap[key as keyof typeof englishToSpanishMap],
      A: value,
      fullMark: 4,
    }));

    
    return (
      <main className="bg-neutral-900/70 h-screen w-screen flex flex-col items-center justify-center">
        <div className={`${vtFont.className} flex flex-col items-center`}>
          <h1 className='text-6xl'>{scenarioValues[mostSelectedValue as keyof typeof scenarioValues].title}</h1>
          <p className='text-4xl'>{scenarioValues[mostSelectedValue as keyof typeof scenarioValues].description}</p>
        </div>
        <div className='h-3/4'>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        {/* <p className='text-white hover:bg-white hover:text-neutral-900/70 text-4xl cursor-pointer w-max p-2 max-w-fit' onClick={reinitialize}>Reiniciar prueba</p> */}
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
