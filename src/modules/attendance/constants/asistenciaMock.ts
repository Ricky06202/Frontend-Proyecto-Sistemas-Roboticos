import type { Asistencia } from './apiTypes'

export const getAsistenciasMock = (): Asistencia[] =>
	asistenciaMock.map((asistencia) => ({
		estudiante: asistencia.nombre_estudiante,
		codigoHorario: asistencia.codigo_hora,
		materia: asistencia.nombre_materia,
		dia: asistencia.dia_semana,
		inicio: asistencia.hora_inicio,
		fin: asistencia.hora_fin,
		fecha: asistencia.fecha_asistencia,
		hora: asistencia.hora_asistencia,
		asistencia: asistencia.asistio,
	}))
const asistenciaMock = [
	{
		nombre_estudiante: 'Christopher Serrano',
		codigo_hora: '0756',
		nombre_materia: 'Topicos Especiales 1',
		dia_semana: 'Lunes',
		hora_inicio: '07:50:00',
		hora_fin: '09:25:00',
		fecha_asistencia: '2024-09-07',
		hora_asistencia: '09:00:00',
		asistio: true,
	},
	{
		nombre_estudiante: 'Christopher Serrano',
		codigo_hora: '0756',
		nombre_materia: 'Topicos Especiales 1',
		dia_semana: 'Lunes',
		hora_inicio: '07:50:00',
		hora_fin: '09:25:00',
		fecha_asistencia: '2024-12-12',
		hora_asistencia: '05:54:28',
		asistio: true,
	},
	{
		nombre_estudiante: 'Isaias Atencio',
		codigo_hora: '8321',
		nombre_materia: 'Matematicas Superiores para Ingenieros',
		dia_semana: 'Lunes',
		hora_inicio: '11:10:00',
		hora_fin: '11:55:00',
		fecha_asistencia: '2024-09-08',
		hora_asistencia: '06:02:25',
		asistio: true,
	},
	{
		nombre_estudiante: 'Christopher Serrano',
		codigo_hora: '0756',
		nombre_materia: 'Topicos Especiales 1',
		dia_semana: 'Lunes',
		hora_inicio: '07:50:00',
		hora_fin: '09:25:00',
		fecha_asistencia: '2024-09-09',
		hora_asistencia: '22:12:30',
		asistio: true,
	},
]
