import { useEffect, useState } from 'react'
import AsistenciaDetallada from './AsistenciaDetallada'
import AsistenciaSimple from './AsistenciaSimple'
import type { Estudiante } from '@attendance/constants/apiTypes'
import { getEstudiantesMock } from '@attendance/constants/horarioMock'
import { useAttendanceStore } from '@attendance/store/attendanceStore'
import { useStudentsStore } from '@attendance/store/studentsStore'
import { getAsistenciasMock } from '@attendance/constants/asistenciaMock'
import { ordenarMaterias } from '@attendance/logic/ordenarMaterias'

interface Props {
	id: number
}

export default function HistorialAsistencias({ id }: Props) {
	const [isSimpleAttendanceView, toggleAttendanceView] = useState(true)
	function handleToggleAttendanceView() {
		toggleAttendanceView(!isSimpleAttendanceView)
	}

	// const [estudiantes, fetchEstudiantes] = useStudentsStore((state) => [state.students, state.fetchStudents])
	// const [asistencias, fetchAsistencias] = useAttendanceStore((state) => [state.attendance, state.fetchAttendance])
	const estudiantes = getEstudiantesMock()
	const asistencias = getAsistenciasMock()

	const estudiante = estudiantes.filter((estudiante) => estudiante.id === id)[0]
	// useEffect(() => {
	// 	async function getInfo() {
	// 		const dataEstudiante = await getEstudiante(id)
	// 		setEstudiante(dataEstudiante)
	// 		const dataAsistencias = await getAsistencias()
	// 		setAsistencias(dataAsistencias)
	// 	}
	// }, [])
	const materias = ordenarMaterias(estudiante, asistencias)
	return (
		<>
			<div className='flex flex-col items-center justify-center gap-4 lg:flex-row'>
				<h2 className='text-4xl text-center'>Historial de Asistencias</h2>
				<button
					className='mt-auto text-2xl text-blue-500 w-28 hover:underline focus:outline-none'
					onClick={handleToggleAttendanceView}
				>
					{isSimpleAttendanceView ? 'Simple' : 'Detallada'}
				</button>
			</div>
			{estudiante && asistencias ? (
				isSimpleAttendanceView ? (
					<AsistenciaSimple materias={materias} />
				) : (
					<AsistenciaDetallada materias={materias} />
				)
			) : (
				<div className='text-center w-full text-xl  italic'>Loading...</div>
			)}
		</>
	)
}
