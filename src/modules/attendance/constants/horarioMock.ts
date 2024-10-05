import type { Estudiante } from './apiTypes'

export const getEstudiantesMock = (): Estudiante[] =>
	horarioMock.map((estudiante) => ({
		id: estudiante.id_estudiante,
		nombre: estudiante.nombre,
		horario: estudiante.horario.map((horario) => ({
			codigoHorario: horario.codigo_hora,
			idMateria: horario.id_materia,
			materia: horario.nombre_materia,
			idCarrera: horario.id_carrera,
			idFacultad: horario.id_facultad,
			dia: horario.dia_semana,
			inicio: horario.hora_inicio,
			fin: horario.hora_fin,
			salon: horario.salon,
			profesor: horario.profesor,
		})),
	}))

const horarioMock = [
	{
		id_estudiante: 11,
		nombre: 'Christopher Serrano',
		horario: [
			{
				codigo_hora: '0756',
				id_materia: 25,
				nombre_materia: 'Topicos Especiales 1',
				id_carrera: 12,
				id_facultad: 12,
				dia_semana: 'Lunes',
				hora_inicio: '07:50:00',
				hora_fin: '09:25:00',
				salon: 'A4',
				profesor: 'Vladimir Villareal',
			},
			{
				codigo_hora: '0756',
				id_materia: 25,
				nombre_materia: 'Topicos Especiales 1',
				id_carrera: 12,
				id_facultad: 12,
				dia_semana: 'Miércoles',
				hora_inicio: '07:50:00',
				hora_fin: '09:25:00',
				salon: 'A4',
				profesor: 'Vladimir Villareal',
			},
			{
				codigo_hora: '0757',
				id_materia: 26,
				nombre_materia: 'Herramientas de Programación Aplicada 4',
				id_carrera: 12,
				id_facultad: 12,
				dia_semana: 'Miércoles',
				hora_inicio: '09:30:00',
				hora_fin: '11:05:00',
				salon: 'A4',
				profesor: 'Jose Mendoza',
			},
			{
				codigo_hora: '0757',
				id_materia: 26,
				nombre_materia: 'Herramientas de Programación Aplicada 4',
				id_carrera: 12,
				id_facultad: 12,
				dia_semana: 'Jueves',
				hora_inicio: '09:30:00',
				hora_fin: '11:55:00',
				salon: 'A4',
				profesor: 'Jose Mendoza',
			},
			{
				codigo_hora: '0758',
				id_materia: 27,
				nombre_materia: 'Ingeniería de Sistemas Roboticos',
				id_carrera: 12,
				id_facultad: 12,
				dia_semana: 'Lunes',
				hora_inicio: '12:00:00',
				hora_fin: '13:35:00',
				salon: 'A4',
				profesor: 'Eloy Lezcano',
			},
			{
				codigo_hora: '0758',
				id_materia: 27,
				nombre_materia: 'Ingeniería de Sistemas Roboticos',
				id_carrera: 12,
				id_facultad: 12,
				dia_semana: 'Martes',
				hora_inicio: '11:10:00',
				hora_fin: '13:35:00',
				salon: 'A4',
				profesor: 'Eloy Lezcano',
			},
			{
				codigo_hora: '0759',
				id_materia: 28,
				nombre_materia: 'Modelado y Simulación',
				id_carrera: 12,
				id_facultad: 12,
				dia_semana: 'Martes',
				hora_inicio: '07:50:00',
				hora_fin: '09:30:00',
				salon: 'A4',
				profesor: 'Andy Gomez',
			},
			{
				codigo_hora: '0759',
				id_materia: 28,
				nombre_materia: 'Modelado y Simulación',
				id_carrera: 12,
				id_facultad: 12,
				dia_semana: 'Miércoles',
				hora_inicio: '11:10:00',
				hora_fin: '13:35:00',
				salon: 'A4',
				profesor: 'Andy Gomez',
			},
			{
				codigo_hora: '8462',
				id_materia: 29,
				nombre_materia: 'Lenguajes Formales, Autómatas y Compiladores',
				id_carrera: 12,
				id_facultad: 12,
				dia_semana: 'Martes',
				hora_inicio: '09:30:00',
				hora_fin: '11:05:00',
				salon: 'A4',
				profesor: 'Andy Gomez',
			},
			{
				codigo_hora: '8462',
				id_materia: 29,
				nombre_materia: 'Lenguajes Formales, Autómatas y Compiladores',
				id_carrera: 12,
				id_facultad: 12,
				dia_semana: 'Lunes',
				hora_inicio: '09:30:00',
				hora_fin: '11:55:00',
				salon: 'A4',
				profesor: 'Andy Gomez',
			},
		],
	},
	{
		id_estudiante: 12,
		nombre: 'Isaias Atencio',
		horario: [
			{
				codigo_hora: '8321',
				id_materia: 30,
				nombre_materia: 'Matematicas Superiores para Ingenieros',
				id_carrera: 11,
				id_facultad: 11,
				dia_semana: 'Lunes',
				hora_inicio: '11:10:00',
				hora_fin: '11:55:00',
				salon: 'C2',
				profesor: 'Rosemary Guevara',
			},
			{
				codigo_hora: '8321',
				id_materia: 30,
				nombre_materia: 'Matematicas Superiores para Ingenieros',
				id_carrera: 11,
				id_facultad: 11,
				dia_semana: 'Jueves',
				hora_inicio: '07:50:00',
				hora_fin: '09:25:00',
				salon: 'C2',
				profesor: 'Rosemary Guevara',
			},
			{
				codigo_hora: '8321',
				id_materia: 30,
				nombre_materia: 'Matematicas Superiores para Ingenieros',
				id_carrera: 11,
				id_facultad: 11,
				dia_semana: 'Viernes',
				hora_inicio: '08:40:00',
				hora_fin: '10:15:00',
				salon: 'C2',
				profesor: 'Rosemary Guevara',
			},
		],
	},
	{
		id_estudiante: 13,
		nombre: 'René Ruíz',
		horario: [],
	},
	{
		id_estudiante: 14,
		nombre: 'José Jaramillo',
		horario: [],
	},
	{
		id_estudiante: 15,
		nombre: 'Azner Aparicio',
		horario: [],
	},
	{
		id_estudiante: 16,
		nombre: 'Julian Diaz',
		horario: [],
	},
	{
		id_estudiante: 17,
		nombre: 'Jeremy Freitas',
		horario: [],
	},
	{
		id_estudiante: 18,
		nombre: 'Alan Saavedra',
		horario: [],
	},
	{
		id_estudiante: 19,
		nombre: 'Ricardo Sanjur',
		horario: [],
	},
	{
		id_estudiante: 21,
		nombre: 'Ketzy Pitty',
		horario: [],
	},
	{
		id_estudiante: 22,
		nombre: 'Thais Samudio',
		horario: [],
	},
	{
		id_estudiante: 23,
		nombre: 'Orlando Montenegro',
		horario: [],
	},
	{
		id_estudiante: 24,
		nombre: 'Sebastián Pimentel',
		horario: [],
	},
	{
		id_estudiante: 25,
		nombre: 'Luis Caballero',
		horario: [],
	},
	{
		id_estudiante: 20,
		nombre: 'Javier Ayala',
		horario: [],
	},
	{
		id_estudiante: 39,
		nombre: 'Pedro De La Torre',
		horario: [],
	},
	{
		id_estudiante: 40,
		nombre: 'Jeisson Paredes',
		horario: [],
	},
	{
		id_estudiante: 41,
		nombre: 'Edwar González',
		horario: [],
	},
	{
		id_estudiante: 42,
		nombre: 'Anibal Pinto',
		horario: [],
	},
	{
		id_estudiante: 43,
		nombre: 'Jean Reyes',
		horario: [],
	},
	{
		id_estudiante: 44,
		nombre: 'Dilan Sobenis',
		horario: [],
	},
	{
		id_estudiante: 38,
		nombre: 'Kendrick Sánchez',
		horario: [],
	},
]
