import { useEffect, useState } from 'react'
import AsistenciaDetallada from './AsistenciaDetallada'
import AsistenciaSimple from './AsistenciaSimple'
import { getEstudiante } from '@attendance/services/apiHorario'
import type { Asistencia, Estudiante } from '@attendance/constants/apiTypes'
import { getAsistencias } from '@attendance/services/apiAsistencia'
import { getEstudiantesMock } from '@attendance/constants/horarioMock'
import { getAsistenciasMock } from '@attendance/constants/asistenciaMock'
import { useAttendanceStore } from '@attendance/store/attendanceStore'

interface Props {
	id: number
}

export default function HistorialAsistencias({ id }: Props) {
	const [isSimpleAttendanceView, toggleAttendanceView] = useState(true)
	function handleToggleAttendanceView() {
		toggleAttendanceView(!isSimpleAttendanceView)
	}

	const [estudiante, setEstudiante] = useState<Estudiante | null>(null)
	const [asistencias, setAsistencias] = useAttendanceStore((state) => [state.attendance, state.setAttendance])

	useEffect(() => {
		// 	async function getInfo() {
		// 		const dataEstudiante = await getEstudiante(id)
		// 		setEstudiante(dataEstudiante)
		// 		const dataAsistencias = await getAsistencias()
		// 		setAsistencias(dataAsistencias)
		// 	}
		function getInfo() {
			setEstudiante(getEstudiantesMock().filter((estudiante) => estudiante.id === id)[0])
			setAsistencias(getAsistenciasMock())
		}

		getInfo()
	}, [])

	return (
		<>
			<div className='flex flex-col items-center justify-center gap-4 lg:flex-row'>
				<h2 className='text-4xl '>Historial de Asistencias</h2>
				<button
					className='mt-auto text-2xl text-blue-500 w-28 hover:underline focus:outline-none'
					onClick={handleToggleAttendanceView}
				>
					{isSimpleAttendanceView ? 'Simple' : 'Detallada'}
				</button>
			</div>
			{estudiante && asistencias ? (
				isSimpleAttendanceView ? (
					<AsistenciaSimple />
				) : (
					<AsistenciaDetallada />
				)
			) : (
				<div className='text-center w-full text-xl  italic'>Loading...</div>
			)}
		</>
	)
}
