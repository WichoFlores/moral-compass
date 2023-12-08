type Sequence = Array<SequenceElement>;
type SequenceElement = string | number | ((element: HTMLElement | null) => void | Promise<void>);

type Scenario = {
  sequence: Sequence; 
  image: StaticImageData;
  options: string[];
	values: ScenarioValue[];
}

type ScenarioValue = 'compassion' | 'justice' | 'pragmatism' | 'honor' | 'integrity' | 'fairness' | 'survival' | 'altruism';

import case1 from '../../public/case1.webp';
import case2 from '../../public/case2.webp';
import case3 from '../../public/case3.webp';
import case4 from '../../public/case4.webp';
import case5 from '../../public/case5.webp';
import case6 from '../../public/case6.webp';
import case7 from '../../public/case7.webp';
import case8 from '../../public/case8.webp';
import case9 from '../../public/case9.webp';
import case10 from '../../public/case10.webp';
import case11 from '../../public/case11.webp';

import { StaticImageData } from 'next/image';

export const scenarioValues = {
	compassion: {
			title: 'Humanitario',
			description: 'Pones el bienestar de los demás antes que el tuyo, siempre mostrando empatía y comprensión hacia las dificultades de los demás.'
	},
	justice: {
			title: 'Defensor de la Justicia',
			description: 'Buscas incansablemente la equidad y la justicia, luchando contra la injusticia en todas sus formas.'
	},
	pragmatism: {
			title: 'Realista Pragmático',
			description: 'Enfocas las situaciones de manera práctica y efectiva, buscando soluciones realistas y funcionales.'
	},
	honor: {
			title: 'Persona Honorable',
			description: 'Vives según un código de ética estricto, siempre actuando con dignidad y respeto.'
	},
	integrity: {
			title: 'Individuo Íntegro',
			description: 'Demuestras honestidad y firmeza moral en todas tus acciones, siendo un modelo a seguir en cuanto a ética.'
	},
	fairness: {
			title: 'Justiciero',
			description: 'Luchas por lo justo y equitativo, asegurándote de que todos reciban un trato justo y se respeten sus derechos.'
	},
	survival: {
			title: 'Superviviente Astuto',
			description: 'Eres excepcionalmente hábil en adaptarte y sobrevivir en cualquier entorno o situación, no importa cuán difícil sea.'
	},
	altruism: {
			title: 'Altruista Abnegado',
			description: 'Pones las necesidades de los demás antes que las tuyas, dedicando tu vida a ayudar a los demás sin buscar recompensa.'
	}
};

export const englishToSpanishMap = {
  compassion: 'Compasión',
  justice: 'Justicia',
  pragmatism: 'Pragmatismo',
  honor: 'Honor',
  integrity: 'Integridad',
  fairness: 'Equidad',
  survival: 'Supervivencia',
  altruism: 'Altruismo',
};

export const scenarios: Scenario[] = [
  {
    sequence: [
      '> Te encuentras con el cuerpo de un hombre que parece estar muriendo.',
      500,
      '> Te encuentras con el cuerpo de un hombre que parece estar muriendo.\n\n > Hay un botón rojo el cual, si presionas, salvará su vida.',
      500,
      '> Te encuentras con el cuerpo de un hombre que parece estar muriendo.\n\n > Hay un botón rojo el cual, si presionas, salvará su vida.\n\n > Debajo de él está un reporte de actividad criminal donde se detalla que el hombre es un asesino serial.',
      500,
      '> Te encuentras con el cuerpo de un hombre que parece estar muriendo.\n\n > Hay un botón rojo el cual, si presionas, salvará su vida.\n\n > Debajo de él está un reporte de actividad criminal donde se detalla que el hombre es un asesino serial.\n\n ? ¿Qué haces?',
    ],
    image: case1,
    options: ['Presionar el botón', 'Dejarlo morir'],
		values: ['compassion', 'justice'],
  },
  {
    sequence: [
      '> Eres parte de la tripulación de un barco que se está hundiendo.',
      500,
      '> Eres parte de la tripulación de un barco que se está hundiendo.\n\n > Queda poco espacio en los botes salvavidas, solo puede entrar una persona más.',
      500,
      '> Eres parte de la tripulación de un barco que se está hundiendo.\n\n > Queda poco espacio en los botes salvavidas, solo puede entrar una persona más.\n\n > Quedan tres pasajeros, una doctora con la cura del cáncer, un niño y un veterano de guerra.',
      500,
      '> Eres parte de la tripulación de un barco que se está hundiendo.\n\n > Queda poco espacio en los botes salvavidas, solo puede entrar una persona más.\n\n > Quedan tres pasajeros, una doctora con la cura del cáncer, un niño y un veterano de guerra.\n\n ? ¿A quién salvas?',
    ],    
    image: case2,
    options: ['Salvar a la doctora', 'Salvar al niño', 'Salvar al veterano'],
		values: ['pragmatism', 'compassion', 'honor'],
  },
  {
    sequence: [
      '> El futuro ha sido revolucionario.',
      500,
      '> El futuro ha sido revolucionario.\n\n > Se creó un dispositivo que es capaz de eliminar cualquier recuerdo y experiencia dolorosa de tu cabeza.',
      500,
      '> El futuro ha sido revolucionario.\n\n > Se creó un dispositivo que es capaz de eliminar cualquier recuerdo y experiencia dolorosa de tu cabeza.\n\n > Sin embargo, esto también eliminaría a las personas involucradas de tu memoria.',
      500,
      '> El futuro ha sido revolucionario.\n\n > Se creó un dispositivo que es capaz de eliminar cualquier recuerdo y experiencia dolorosa de tu cabeza.\n\n > Sin embargo, esto también eliminaría a las personas involucradas de tu memoria.\n\n ? ¿Te gustaría activar el dispositivo?',
    ],
    image: case3,
    options: ['Lo activo', 'No lo activo'],
		values: ['pragmatism', 'integrity'],
  },
  {
    sequence: [
      '> Eres parte del jurado en un juicio contra un presunto violador.',
      500,
      '> Eres parte del jurado en un juicio contra un presunto violador.\n\n > En ti está la decisión final de su sentencia.',
      500,
      '> Eres parte del jurado en un juicio contra un presunto violador.\n\n > En ti está la decisión final de su sentencia.\n\n > La evidencia no es contundente, pero dejarlo ir puede resultar peligroso.',
      500,
      '> Eres parte del jurado en un juicio contra un presunto violador.\n\n > En ti está la decisión final de su sentencia.\n\n > La evidencia no es contundente, pero dejarlo ir puede resultar peligroso.\n\n ? ¿Cuál es tu veredicto?',
    ],
    image: case4,
    options: ['Culpable', 'Inocente'],
		values: ['justice', 'fairness'],
  },
  {
    sequence: [
      '> Estás en un futuro post-apocalíptico.',
      500,
      '> Estás en un futuro post-apocalíptico.\n\n > Los recursos son escasos y se te acaban las raciones.',
      500,
      '> Estás en un futuro post-apocalíptico.\n\n > Los recursos son escasos y se te acaban las raciones.\n\n > Encuentras comida que le pertenece a otro grupo, pero ellos no están ahí.',
      500,
      '> Estás en un futuro post-apocalíptico.\n\n > Los recursos son escasos y se te acaban las raciones.\n\n > Encuentras comida que le pertenece a otro grupo, pero ellos no están ahí.\n\n ? ¿Qué haces?',
    ],
    image: case5,
    options: ['La tomas, necesitas sobrevivir', 'Esperas a que llegue el grupo para pedirles un poco' , 'La dejas ahí, quién sabe con quién te puedas encontrar'],
		values: ['survival', 'altruism', 'honor'],
  },
  {
    sequence: [
      '> Finalmente la comunidad científica descubre la cura para todas las enfermedades.',
      500,
      '> Finalmente la comunidad científica descubre la cura para todas las enfermedades.\n\n > Sin embargo, para poder proporcionarla al mundo es necesario el sacrificio de una persona.',
      500,
      '> Finalmente la comunidad científica descubre la cura para todas las enfermedades.\n\n > Sin embargo, para poder proporcionarla al mundo es necesario el sacrificio de una persona.\n\n > Puede ser cualquiera, pero la decisión la tienes tú.',
      500,
      '> Finalmente la comunidad científica descubre la cura para todas las enfermedades.\n\n > Sin embargo, para poder proporcionarla al mundo es necesario el sacrificio de una persona.\n\n > Puede ser cualquiera, pero la decisión la tienes tú.\n\n ? ¿Qué haces?',
    ],
    image: case6,
    options: ['Sacrificar a alguien más', 'Sacrificarte tú', 'No sacrificar a nadie'],
		values: ['pragmatism', 'altruism', 'integrity'],
  },
  {
    sequence: [
		'> La realidad virtual llegó a su máximo esplendor.',
		500,
		'> La realidad virtual llegó a su máximo esplendor.\n\n> Ahora eres capaz de llevar todos tus sentidos a un mundo donde todo es perfecto.',
		500,
		'> La realidad virtual llegó a su máximo esplendor.\n\n> Ahora eres capaz de llevar todos tus sentidos a un mundo donde todo es perfecto.\n\n> El mundo en el que vives ahora es gris y miserable.',
		500,
		'> La realidad virtual llegó a su máximo esplendor.\n\n> Ahora eres capaz de llevar todos tus sentidos a un mundo donde todo es perfecto.\n\n> El mundo en el que vives ahora es gris y miserable.\n\n? ¿Cuál mundo prefieres?',
		],      
    image: case7,
    options: ['Mundo virtual', 'Mundo real'],
		values: ['pragmatism', 'integrity'],
  },
	{
		sequence: [
			'> Eres hereditario de la fortuna de un familiar distante.',
			500,
			'> Eres hereditario de la fortuna de un familiar distante.\n\n> Te tocará mucho dinero, el suficiente para no volver a trabajar en tu vida.',
			500,
			'> Eres hereditario de la fortuna de un familiar distante.\n\n> Te tocará mucho dinero, el suficiente para no volver a trabajar en tu vida.\n\n> Eres consciente de que este familiar adquirió el dinero a través de medios ilegales y amorales.',
			500,
			'> Eres hereditario de la fortuna de un familiar distante.\n\n> Te tocará mucho dinero, el suficiente para no volver a trabajar en tu vida.\n\n> Eres consciente de que este familiar adquirió el dinero a través de medios ilegales y amorales.\n\n? ¿Aceptas la herencia?',
		],
		image: case8,
		options: ['Acepto', 'No acepto'],
		values: ['survival', 'justice'],
	},
	{
		sequence: [
			'> Estás en un bar, disfrutando la noche.',
			500,
			'> Estás en un bar, disfrutando la noche.\n\n> A la distancia notas a una persona que te atrae intensamente.',
			500,
			'> Estás en un bar, disfrutando la noche.\n\n> A la distancia notas a una persona que te atrae intensamente.\n\n> La persona se te acerca, te coquetea y sugiere llevar las cosas al siguiente nivel.',
			500,
			'> Estás en un bar, disfrutando la noche.\n\n> A la distancia notas a una persona que te atrae intensamente.\n\n> La persona se te acerca, te coquetea y sugiere llevar las cosas al siguiente nivel.\n\n> En su mano notas que lleva un anillo. La persona es casada.\n\n? ¿Aceptas su invitación?',
		],
		image: case9,
		options: ['Acepto', 'No acepto'],
		values: ['survival', 'fairness'],		
	},
	{
		sequence: [
			'> Eres habitante de un pueblo donde todos son excelentes personas.',
			500,
			'> Eres habitante de un pueblo donde todos son excelentes personas.\n\n> Como individuos, se ayudan entre sí y son muy humildes.',
			500,
			'> Eres habitante de un pueblo donde todos son excelentes personas.\n\n> Como individuos, se ayudan entre sí y son muy humildes.\n\n> Te enteras que hay un grupo de ellos que comete crímenes, solamente, en conjunto.',
			500,
			'> Eres habitante de un pueblo donde todos son excelentes personas.\n\n> Como individuos, se ayudan entre sí y son muy humildes.\n\n> Te enteras que hay un grupo de ellos que comete crímenes, solamente, en conjunto.\n\n? ¿Consideras que los miembros de un grupo criminal, también son criminales como individuos?',
		],
		image: case10,
		options: ['Sí', 'No'],
		values: ['justice', 'fairness'],
	},
	{
		sequence: [
			'> Vas caminando y te encuentras unas vías del tren. El tren viene a lo lejos.',
			500,
			'> Vas caminando y te encuentras unas vías del tren. El tren viene a lo lejos.\n\n> En ellas, están 3 personas atadas. No se pueden mover.',
			500,
			'> Vas caminando y te encuentras unas vías del tren. El tren viene a lo lejos.\n\n> En ellas, están 3 personas atadas. No se pueden mover.\n\n> Ves una palanca que, si jalas, cambias las vias por las que el tren se mueve.',
			500,
			'> Vas caminando y te encuentras unas vías del tren. El tren viene a lo lejos.\n\n> En ellas, están 3 personas atadas. No se pueden mover.\n\n> Ves una palanca que, si jalas, cambias las vias por las que el tren se mueve.\n\n> Sin embargo, en las vias a las que cambiarías hay una persona distraida.',
			500,
			'> Vas caminando y te encuentras unas vías del tren. El tren viene a lo lejos.\n\n> En ellas, están 3 personas atadas. No se pueden mover.\n\n> Ves una palanca que, si jalas, cambias las vias por las que el tren se mueve.\n\n> Sin embargo, en las vias a las que cambiarías hay una persona distraida.\n\n? ¿Jalarías la palanca?',
		],
		image: case11,
		options: ['Sí', 'No'],
		values: ['pragmatism', 'altruism'],		
	}
  
]