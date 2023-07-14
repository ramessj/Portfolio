import calendar from './calendar.gif';
import gifexpert from './gifexpert.gif';
import heroes from './heroes.gif';
import journal from './journal.gif';
import memory from './memory.gif';
import rockps from './rockps.gif';
import todos from './todos.gif';
import weather from './weather.gif';
import etch from './etch.gif';

export const projects = [
	{
		title: 'Memory Game',
		img: memory,
		description: '2 gamemodes with online records',
		descriptionEs: '2 modos de juego con records online',

		links: {
			repo: 'https://github.com/ramiroquesada/Memory-Game',
			live: 'https://ramiroquesada.github.io/Memory-Game/',
		},
		techs: [
			'React',
			'NodeJS',
			'Express',
			'Firebase',
			'MongoDB',
			'MaterialUI',
			'Redux',
		],
	},
	{
		title: 'Journal ',
		img: journal,
		description: 'A personal diary to save whatever you want',
		descriptionEs: 'Diario personal para anotar lo que quieras',

		links: {
			repo: 'https://github.com/ramiroquesada/Journal-App-React',
			live: 'https://ramiroquesada.github.io/Journal-App-React/',
		},
		techs: [
			'React',
			'NodeJS',
			'Express',
			'Firebase',
			'MongoDB',
			'MaterialUI',
			'Redux',
		],
	},
	{
		title: 'TO-DO App',
		img: todos,
		description: 'Manage your time with TO-DOs',
		descriptionEs: 'Maneja tu tiempo utilizando tareas',

		links: {
			repo: 'https://github.com/ramiroquesada/To-Do-List',
			live: 'https://ramiroquesada.github.io/To-Do-List/',
		},
		techs: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
	},
	{
		title: 'Heroes App',
		img: heroes,
		description: 'Get information about your favorite heroes',
		descriptionEs: 'Obten información sobre tus heroes favoritos',

		links: {
			repo: 'https://github.com/ramiroquesada/Heroes-SPA-React',
			live: 'https://ramiroquesada.github.io/Heroes-SPA-React/',
		},
		techs: ['React', 'CSS', 'Axios', 'Bootstrap'],
	},
	{
		title: 'Weather App',
		img: weather,
		description: 'Simple weather app',
		descriptionEs: 'Una simple aplicacion para ver el estado del tiempo',

		links: {
			repo: 'https://github.com/ramiroquesada/Weather-App',
			live: 'https://ramiroquesada.github.io/Weather-App/',
		},
		techs: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
	},
	{
		title: 'Gif Expert',
		img: gifexpert,
		description: 'Search for gifs',
		descriptionEs: 'Buscador de gifs',

		links: {
			repo: 'https://github.com/ramiroquesada/Gif-Expert',
			live: 'https://ramiroquesada.github.io/Gif-Expert/',
		},
		techs: ['React', 'CSS', 'Jest'],
	},
	{
		title: 'Calendar App',
		img: calendar,
		description: 'Colaborative calendar app',
		descriptionEs: 'Aplicación de calendario colaborativa',

		links: {
			repo: 'https://github.com/ramiroquesada/Calendar-React',
			live: 'https://ramiroquesada.github.io/Calendar-React/',
		},
		techs: ['React', 'NodeJS', 'Express', 'Firebase', 'MongoDB', 'Redux'],
	},
	{
		title: 'Rock Paper Scissors',
		img: rockps,
		description: 'Classic game to play vs the IA',
		descriptionEs: 'Clasico juego, enfrentate a la IA',

		links: {
			repo: 'https://github.com/ramiroquesada/Rock-Paper-Scissors',
			live: 'https://ramiroquesada.github.io/Rock-Paper-Scissors/',
		},
		techs: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		title: 'Etch-A-Sketch',
		img: etch,
		description: 'Create pixelart',
		descriptionEs: 'Crea tus pixelart',

		links: {
			repo: 'https://github.com/ramiroquesada/Etch-A-Sketch',
			live: 'https://ramiroquesada.github.io/Etch-A-Sketch/',
		},
		techs: ['HTML', 'CSS', 'JavaScript'],
	},
];
