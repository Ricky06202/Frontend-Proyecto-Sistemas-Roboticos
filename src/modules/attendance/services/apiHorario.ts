import type { Estudiante } from '@attendance/constants/apiTypes'
import axios from 'axios'

const apiHorario = axios.create({
	baseURL: 'http://asiscan.sytes.net/horario/estudiantesJSON',
})

export async function getEstudiantes(): Promise<Estudiante[] | null> {
	return apiHorario
		.get('/')
		.then((res) => res.data)
		.then((data) =>
			data.map((estudiante: any) => ({
				id: estudiante.id_estudiante,
				nombre: estudiante.nombre,
				horario: estudiante.horario.map((horario: any) => ({
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
		)
		.catch((err) => {
			console.log(err)
			return null
		})
}

export async function getEstudiante(id: number): Promise<Estudiante | null> {
	return apiHorario
		.get(`/${id}`)
		.then((res) => res.data)
		.then((data) => ({
			id: data.id_estudiante,
			nombre: data.nombre,
			horario: data.horario.map((horario: any) => ({
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
		.catch((err) => {
			console.log(err)
			return null
		})
}
