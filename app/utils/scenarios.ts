type Sequence = Array<SequenceElement>;
type SequenceElement = string | number | ((element: HTMLElement | null) => void | Promise<void>);

type Scenario = {
  sequence: Sequence; 
  image: string;
  options: string[];
}

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
    image: '/case1.webp',
    options: ['Presionar el botón', 'Dejarlo morir']
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
    image: '/case2.webp',
    options: ['Salvar a la doctora', 'Salvar al niño', 'Salvar al veterano']
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
    image: '/case3.webp',
    options: ['Lo activo', 'No lo activo']    
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
    image: '/case4.webp',
    options: ['Culpable', 'Inocente']
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
    image: '/case5.webp',
    options: ['La tomas, necesitas sobrevivir', 'Esperas a que llegue el grupo para pedirles un poco' , 'La dejas ahí, quién sabe con quién te puedas encontrar']    
  },
  {
    sequence: [
      '> Finalmente la comunidad científica descubre la cura para todas las enfermedades.',
      500,
      '> Finalmente la comunidad científica descubre la cura para todas las enfermedades.\n\n > Sin embargo, para poder proporcionarla al mundo es necesario el sacrificio de una persona.',
      500,
      '> Finalmente la comunidad científica descubre la cura para todas las enfermedades.\n\n > Sin embargo, para poder proporcionarla al mundo es necesario el sacrificio de una persona.\n\n > Puede ser cualquieria, pero la decisión la tienes tú.',
      500,
      '> Finalmente la comunidad científica descubre la cura para todas las enfermedades.\n\n > Sin embargo, para poder proporcionarla al mundo es necesario el sacrificio de una persona.\n\n > Puede ser cualquieria, pero la decisión la tienes tú.\n\n ? ¿Qué haces?',
    ],

    image: '/case6.webp',
    options: ['Sacrificar a alguien más', 'Sacrificarte tú', 'No sacrificar a nadie']
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
    image: '/case7.webp',
    options: ['Mundo virtual', 'Mundo real']
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
		image: '/case8.webp',
		options: ['Acepto', 'No acepto']		
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
		image: '/case9.webp',
		options: ['Acepto', 'No acepto']		
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
		image: '/case10.webp',
		options: ['Sí', 'No']		
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
		image: '/case11.webp',
		options: ['Sí', 'No'],		
	}
  
]