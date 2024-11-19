import { useState } from 'react'
import AsistenciaDetallada from './AsistenciaDetallada'
import AsistenciaSimple from './AsistenciaSimple'
import { useMaterias } from '@attendance/hooks/useMaterias'

interface Props {
	id: number
}

export default function HistorialAsistencias({ id }: Props) {
	const [isSimpleAttendanceView, toggleAttendanceView] = useState(true)
	function handleToggleAttendanceView() {
		toggleAttendanceView(!isSimpleAttendanceView)
	}

	const { materias } = useMaterias(id)

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
			{materias ? (
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
