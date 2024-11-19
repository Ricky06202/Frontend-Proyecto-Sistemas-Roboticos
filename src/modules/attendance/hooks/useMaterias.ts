import type { Materia } from '@attendance/constants/materiasTypes'
import { useAttendance } from './useAttendance'
import { useStudent } from './useStudent'
import { useEffect, useState } from 'react'
import { ordenarMaterias } from '@attendance/logic/ordenarMaterias'

export function useMaterias(id: number) {
	const { estudiante } = useStudent(id)
	const { asistencias } = useAttendance()
	const [materias, setMaterias] = useState<Materia[] | null>(null)
	useEffect(() => {
		if (!estudiante || !asistencias) return
		setMaterias(ordenarMaterias(estudiante, asistencias))
	}, [estudiante, asistencias])
	return { materias }
}
