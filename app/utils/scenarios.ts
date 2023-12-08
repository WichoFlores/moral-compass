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
			description: 'Tu enfoque en la vida se centra en la empatía y el cuidado hacia los demás. Antepones el bienestar ajeno al tuyo, mostrando una comprensión profunda y genuina hacia los retos y sufrimientos que enfrentan las personas. Tu naturaleza compasiva te lleva a actuar de manera altruista y a brindar apoyo emocional y práctico a quienes lo necesitan.'
	},
	justice: {
			title: 'Defensor de la Justicia',
			description: 'Eres una persona que se dedica apasionadamente a la búsqueda de la equidad y la justicia social. Luchas contra las injusticias y desigualdades, buscando siempre promover un trato justo y equitativo para todos. Tu compromiso con la justicia te lleva a abogar activamente por los derechos y la dignidad de las personas, no importa cuán grandes sean los desafíos.'
	},
	pragmatism: {
			title: 'Realista Pragmático',
			description: 'Tu enfoque de la vida se basa en la practicidad y la eficiencia. Enfrentas los problemas con una mentalidad orientada a soluciones, buscando siempre el camino más directo y realista para alcanzar tus objetivos. Tu pragmatismo te permite adaptarte rápidamente a diferentes situaciones, utilizando tus recursos de manera inteligente y efectiva.'
	},
	honor: {
			title: 'Persona Honorable',
			description: 'Te guías por un código ético estricto, mostrando un gran respeto por los principios de dignidad y rectitud. Actúas con honor en todas tus interacciones, manteniendo siempre tu palabra y comportándote con integridad. Tu conducta honorable te hace una persona de confianza y respetada por aquellos que te rodean.'
	},
	integrity: {
			title: 'Individuo Íntegro',
			description: 'Eres un ejemplo de honestidad y coherencia moral. Tus acciones reflejan tus valores y creencias profundas, actuando siempre de manera ética y justa. Tu integridad te hace un modelo a seguir, inspirando a otros a actuar con la misma firmeza moral en sus propias vidas.'
	},
	fairness: {
			title: 'Justiciero',
			description: 'Te esfuerzas incansablemente por garantizar la equidad y la justicia en tu entorno. Buscas activamente asegurar que todos sean tratados de manera justa y que se respeten sus derechos. Tu compromiso con la equidad te lleva a ser un defensor y mediador en situaciones de conflicto, buscando siempre el bienestar común.'
	},
	survival: {
			title: 'Superviviente Astuto',
			description: 'Posees una habilidad excepcional para adaptarte y sobrevivir en cualquier circunstancia. Ya sea en situaciones de estrés, desafíos extremos o ambientes cambiantes, tu ingenio y fortaleza te permiten encontrar soluciones innovadoras y efectivas para superar obstáculos y seguir adelante.'
	},
	altruism: {
			title: 'Altruista Abnegado',
			description: 'Tu vida está dedicada a poner las necesidades de los demás antes que las tuyas. Muestras un compromiso desinteresado con el bienestar de los demás, ofreciendo tu tiempo, recursos y energía para apoyar y mejorar la vida de las personas. Tu altruismo no busca reconocimiento, sino que se centra genuinamente en el acto de ayudar.'
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
      '> Te encuentras con el cuerpo de un hombre que parece estar muriendo.\n > Hay un botón rojo el cual, si presionas, salvará su vida.',
      500,
      '> Te encuentras con el cuerpo de un hombre que parece estar muriendo.\n > Hay un botón rojo el cual, si presionas, salvará su vida.\n > Debajo de él está un reporte de actividad criminal donde se detalla que el hombre es un asesino serial.',
      500,
      '> Te encuentras con el cuerpo de un hombre que parece estar muriendo.\n > Hay un botón rojo el cual, si presionas, salvará su vida.\n > Debajo de él está un reporte de actividad criminal donde se detalla que el hombre es un asesino serial.\n ? ¿Qué haces?',
    ],
    image: case1,
    options: ['Presionar el botón', 'Dejarlo morir'],
		values: ['compassion', 'justice'],
  },
  {
    sequence: [
      '> Eres parte de la tripulación de un barco que se está hundiendo.',
      500,
      '> Eres parte de la tripulación de un barco que se está hundiendo.\n > Queda poco espacio en los botes salvavidas, solo puede entrar una persona más.',
      500,
      '> Eres parte de la tripulación de un barco que se está hundiendo.\n > Queda poco espacio en los botes salvavidas, solo puede entrar una persona más.\n > Quedan tres pasajeros, una doctora con la cura del cáncer, un niño y un veterano de guerra.',
      500,
      '> Eres parte de la tripulación de un barco que se está hundiendo.\n > Queda poco espacio en los botes salvavidas, solo puede entrar una persona más.\n > Quedan tres pasajeros, una doctora con la cura del cáncer, un niño y un veterano de guerra.\n ? ¿A quién salvas?',
    ],    
    image: case2,
    options: ['Salvar a la doctora', 'Salvar al niño', 'Salvar al veterano'],
		values: ['pragmatism', 'compassion', 'honor'],
  },
  {
    sequence: [
      '> El futuro ha sido revolucionario.',
      500,
      '> El futuro ha sido revolucionario.\n > Se creó un dispositivo que es capaz de eliminar cualquier recuerdo y experiencia dolorosa de tu cabeza.',
      500,
      '> El futuro ha sido revolucionario.\n > Se creó un dispositivo que es capaz de eliminar cualquier recuerdo y experiencia dolorosa de tu cabeza.\n > Sin embargo, esto también eliminaría a las personas involucradas de tu memoria.',
      500,
      '> El futuro ha sido revolucionario.\n > Se creó un dispositivo que es capaz de eliminar cualquier recuerdo y experiencia dolorosa de tu cabeza.\n > Sin embargo, esto también eliminaría a las personas involucradas de tu memoria.\n ? ¿Te gustaría activar el dispositivo?',
    ],
    image: case3,
    options: ['Lo activo', 'No lo activo'],
		values: ['pragmatism', 'integrity'],
  },
  {
    sequence: [
      '> Eres parte del jurado en un juicio contra un presunto violador.',
      500,
      '> Eres parte del jurado en un juicio contra un presunto violador.\n > En ti está la decisión final de su sentencia.',
      500,
      '> Eres parte del jurado en un juicio contra un presunto violador.\n > En ti está la decisión final de su sentencia.\n > La evidencia no es contundente, pero dejarlo ir puede resultar peligroso.',
      500,
      '> Eres parte del jurado en un juicio contra un presunto violador.\n > En ti está la decisión final de su sentencia.\n > La evidencia no es contundente, pero dejarlo ir puede resultar peligroso.\n ? ¿Cuál es tu veredicto?',
    ],
    image: case4,
    options: ['Culpable', 'Inocente'],
		values: ['justice', 'fairness'],
  },
  {
    sequence: [
      '> Estás en un futuro post-apocalíptico.',
      500,
      '> Estás en un futuro post-apocalíptico.\n > Los recursos son escasos y se te acaban las raciones.',
      500,
      '> Estás en un futuro post-apocalíptico.\n > Los recursos son escasos y se te acaban las raciones.\n > Encuentras comida que le pertenece a otro grupo, pero ellos no están ahí.',
      500,
      '> Estás en un futuro post-apocalíptico.\n > Los recursos son escasos y se te acaban las raciones.\n > Encuentras comida que le pertenece a otro grupo, pero ellos no están ahí.\n ? ¿Qué haces?',
    ],
    image: case5,
    options: ['La tomas, necesitas sobrevivir', 'Esperas a que llegue el grupo para pedirles un poco' , 'La dejas ahí, quién sabe con quién te puedas encontrar'],
		values: ['survival', 'altruism', 'honor'],
  },
  {
    sequence: [
      '> Finalmente la comunidad científica descubre la cura para todas las enfermedades.',
      500,
      '> Finalmente la comunidad científica descubre la cura para todas las enfermedades.\n > Sin embargo, para poder proporcionarla al mundo es necesario el sacrificio de una persona.',
      500,
      '> Finalmente la comunidad científica descubre la cura para todas las enfermedades.\n > Sin embargo, para poder proporcionarla al mundo es necesario el sacrificio de una persona.\n > Puede ser cualquiera, pero la decisión la tienes tú.',
      500,
      '> Finalmente la comunidad científica descubre la cura para todas las enfermedades.\n > Sin embargo, para poder proporcionarla al mundo es necesario el sacrificio de una persona.\n > Puede ser cualquiera, pero la decisión la tienes tú.\n ? ¿Qué haces?',
    ],
    image: case6,
    options: ['Sacrificar a alguien más', 'Sacrificarte tú', 'No sacrificar a nadie'],
		values: ['pragmatism', 'altruism', 'integrity'],
  },
  {
    sequence: [
		'> La realidad virtual llegó a su máximo esplendor.',
		500,
		'> La realidad virtual llegó a su máximo esplendor.\n> Ahora eres capaz de llevar todos tus sentidos a un mundo donde todo es perfecto.',
		500,
		'> La realidad virtual llegó a su máximo esplendor.\n> Ahora eres capaz de llevar todos tus sentidos a un mundo donde todo es perfecto.\n> El mundo en el que vives ahora es gris y miserable.',
		500,
		'> La realidad virtual llegó a su máximo esplendor.\n> Ahora eres capaz de llevar todos tus sentidos a un mundo donde todo es perfecto.\n> El mundo en el que vives ahora es gris y miserable.\n? ¿Cuál mundo prefieres?',
		],      
    image: case7,
    options: ['Mundo virtual', 'Mundo real'],
		values: ['pragmatism', 'integrity'],
  },
	{
		sequence: [
			'> Eres hereditario de la fortuna de un familiar distante.',
			500,
			'> Eres hereditario de la fortuna de un familiar distante.\n> Te tocará mucho dinero, el suficiente para no volver a trabajar en tu vida.',
			500,
			'> Eres hereditario de la fortuna de un familiar distante.\n> Te tocará mucho dinero, el suficiente para no volver a trabajar en tu vida.\n> Eres consciente de que este familiar adquirió el dinero a través de medios ilegales y amorales.',
			500,
			'> Eres hereditario de la fortuna de un familiar distante.\n> Te tocará mucho dinero, el suficiente para no volver a trabajar en tu vida.\n> Eres consciente de que este familiar adquirió el dinero a través de medios ilegales y amorales.\n? ¿Aceptas la herencia?',
		],
		image: case8,
		options: ['Acepto', 'No acepto'],
		values: ['survival', 'justice'],
	},
	{
		sequence: [
			'> Estás en un bar, disfrutando la noche.',
			500,
			'> Estás en un bar, disfrutando la noche.\n> A la distancia notas a una persona que te atrae intensamente.',
			500,
			'> Estás en un bar, disfrutando la noche.\n> A la distancia notas a una persona que te atrae intensamente.\n> La persona se te acerca, te coquetea y sugiere llevar las cosas al siguiente nivel.',
			500,
			'> Estás en un bar, disfrutando la noche.\n> A la distancia notas a una persona que te atrae intensamente.\n> La persona se te acerca, te coquetea y sugiere llevar las cosas al siguiente nivel.\n> En su mano notas que lleva un anillo. La persona es casada.\n? ¿Aceptas su invitación?',
		],
		image: case9,
		options: ['Acepto', 'No acepto'],
		values: ['survival', 'fairness'],		
	},
	{
		sequence: [
			'> Eres habitante de un pueblo donde todos son excelentes personas.',
			500,
			'> Eres habitante de un pueblo donde todos son excelentes personas.\n> Como individuos, se ayudan entre sí y son muy humildes.',
			500,
			'> Eres habitante de un pueblo donde todos son excelentes personas.\n> Como individuos, se ayudan entre sí y son muy humildes.\n> Te enteras que hay un grupo de ellos que comete crímenes, solamente, en conjunto.',
			500,
			'> Eres habitante de un pueblo donde todos son excelentes personas.\n> Como individuos, se ayudan entre sí y son muy humildes.\n> Te enteras que hay un grupo de ellos que comete crímenes, solamente, en conjunto.\n? ¿Consideras que los miembros de un grupo criminal, también son criminales como individuos?',
		],
		image: case10,
		options: ['Sí', 'No'],
		values: ['justice', 'fairness'],
	},
	{
		sequence: [
			'> Vas caminando y te encuentras unas vías del tren. El tren viene a lo lejos.',
			500,
			'> Vas caminando y te encuentras unas vías del tren. El tren viene a lo lejos.\n> En ellas, están 3 personas atadas. No se pueden mover.',
			500,
			'> Vas caminando y te encuentras unas vías del tren. El tren viene a lo lejos.\n> En ellas, están 3 personas atadas. No se pueden mover.\n> Ves una palanca que, si jalas, cambias las vias por las que el tren se mueve.',
			500,
			'> Vas caminando y te encuentras unas vías del tren. El tren viene a lo lejos.\n> En ellas, están 3 personas atadas. No se pueden mover.\n> Ves una palanca que, si jalas, cambias las vias por las que el tren se mueve.\n> Sin embargo, en las vias a las que cambiarías hay una persona distraida.',
			500,
			'> Vas caminando y te encuentras unas vías del tren. El tren viene a lo lejos.\n> En ellas, están 3 personas atadas. No se pueden mover.\n> Ves una palanca que, si jalas, cambias las vias por las que el tren se mueve.\n> Sin embargo, en las vias a las que cambiarías hay una persona distraida.\n? ¿Jalarías la palanca?',
		],
		image: case11,
		options: ['Sí', 'No'],
		values: ['pragmatism', 'altruism'],		
	}
  
]