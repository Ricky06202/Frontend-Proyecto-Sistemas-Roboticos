import { useState } from 'react'
import AsistenciaDetallada from './AsistenciaDetallada'
import AsistenciaSimple from './AsistenciaSimple'

export default function HistorialAsistencias() {
	const [isSimpleAttendanceView, toggleAttendanceView] = useState(true)
	function handleToggleAttendanceView() {
		toggleAttendanceView(!isSimpleAttendanceView)
	}
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
			{isSimpleAttendanceView ? <AsistenciaSimple /> : <AsistenciaDetallada />}
		</>
	)
}
