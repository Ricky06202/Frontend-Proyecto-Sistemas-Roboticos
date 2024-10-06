import type { Asistencia, Estudiante } from '@attendance/constants/apiTypes'
import type { Materia } from '@attendance/constants/materiasTypes'

export function ordenarMaterias(estudiante: Estudiante, asistencias: Asistencia[]) {
	const materias: Materia[] = []
	const AsistenciaMaterias = asistencias.filter((asistencia) => asistencia.estudiante === estudiante.nombre)
	estudiante.horario.forEach((horario) => {
		const materiaExistente = materias.find((materia) => materia.id === horario.idMateria)
		let asistenciaMateria = AsistenciaMaterias.filter(
			(asistencia) => asistencia.dia === horario.dia && asistencia.materia === horario.materia
		)[0]
		asistenciaMateria = asistenciaMateria
			? asistenciaMateria
			: {
					asistencia: false,
					dia: '',
					hora: '',
					estudiante: '',
					materia: '',
					codigoHorario: '',
					inicio: '',
					fin: '',
					fecha: '',
				}
		if (!materiaExistente) {
			materias.push({
				id: horario.idMateria,
				nombre: horario.materia,
				dias: [
					{
						nombre: horario.dia,
						inicio: horario.inicio,
						fin: horario.fin,
						salon: horario.salon,
						profesor: horario.profesor,
						asistencia: {
							valor: asistenciaMateria.asistencia,
							fecha: asistenciaMateria.fecha,
							hora: asistenciaMateria.hora,
						},
					},
				],
			})
		} else {
			const indice = materias.indexOf(materiaExistente)
			materias[indice].dias.push({
				nombre: horario.dia,
				inicio: horario.inicio,
				fin: horario.fin,
				salon: horario.salon,
				profesor: horario.profesor,
				asistencia: {
					valor: asistenciaMateria.asistencia,
					fecha: asistenciaMateria.fecha,
					hora: asistenciaMateria.hora,
				},
			})
		}
	})
	return materias
}
