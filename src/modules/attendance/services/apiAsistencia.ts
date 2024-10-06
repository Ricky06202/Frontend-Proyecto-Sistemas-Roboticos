import type { Asistencia } from '@attendance/constants/apiTypes'
import axios from 'axios'

const apiAsistencia = axios.create({
	baseURL: 'http://asiscan.sytes.net/asistencias/asistenciasJSON',
})

export async function getAsistencias(): Promise<Asistencia[] | null> {
	return apiAsistencia
		.get('/')
		.then((res) => res.data)
		.then((data) =>
			data.map((asistencia: any) => ({
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
		)
		.catch((err) => {
			console.log(err)
			return null
		})
}
