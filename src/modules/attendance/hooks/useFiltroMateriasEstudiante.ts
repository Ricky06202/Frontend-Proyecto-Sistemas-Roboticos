import type { Materia } from '@attendance/constants/materiasTypes'
import { useState, useEffect } from 'react'

export function useFiltroMateriasEstudiante(materias: Materia[]) {
	const [filtroMateria, setFiltroMateria] = useState(0)
	const [filtroAsistencia, setFiltroAsistencia] = useState(0)
	const [materiasFiltradas, setMateriasFiltradas] = useState(materias)
	const handleFiltroMateria = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFiltroMateria(parseInt(e.target.value))
	}

	useEffect(() => {
		setMateriasFiltradas(
			materias.filter((materia) => {
				if (filtroMateria === 0) return true
				return materia.id === filtroMateria
			})
		)
	}, [materias, filtroMateria])

	const handleFiltroAsistencia = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFiltroAsistencia(parseInt(e.target.value))
	}

	useEffect(() => {
		setMateriasFiltradas(
			materias.filter((materia) => {
				return materia.dias.some((dia) => {
					if (filtroAsistencia === 0) return true
					else if (filtroAsistencia === 1) return dia.asistencia.valor
					else return !dia.asistencia.valor
				})
			})
		)
	}, [materias, filtroAsistencia])

	return {
		filtroMateria,
		filtroAsistencia,
		materiasFiltradas,
		handleFiltroMateria,
		handleFiltroAsistencia,
	}
}
