import { getAsistencias } from '@attendance/services/apiAsistencia'
import { getEstudiante } from '@attendance/services/apiHorario'
import { useStudentsStore } from '@attendance/store/studentsStore'
import { useEffect } from 'react'

export function useStudent(id: number) {
	const estudiante = useStudentsStore((state) => state.student)
	const setEstudiante = useStudentsStore((state) => state.setStudent)
	useEffect(() => {
		if (estudiante) return
		getEstudiante(id)
			.then((response) => {
				setEstudiante(response)
			})
			.catch((error) => {
				alert(error)
			})
	}, [])
	return { estudiante }
}
