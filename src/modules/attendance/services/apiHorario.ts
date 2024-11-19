import type { Estudiante } from '@attendance/constants/apiTypes'
import axios from 'axios'
import { APIBaseUrl } from 'src/env'

const apiHorario = axios.create({
	baseURL: APIBaseUrl + 'horario/estudiantesJSON',
})

export async function getEstudiantes(): Promise<Estudiante[]> {
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
}

export async function getEstudiante(id: number): Promise<Estudiante> {
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
}
