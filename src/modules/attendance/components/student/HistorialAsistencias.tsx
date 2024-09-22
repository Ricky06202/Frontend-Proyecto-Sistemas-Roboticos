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
			<div className='flex flex-col lg:flex-row gap-4 justify-center items-center'>
				<h2 className='text-4xl '>Historial de Asistencias</h2>
				<button
					className='text-blue-500 text-2xl w-28 hover:underline focus:outline-none'
					onClick={handleToggleAttendanceView}
				>
					{isSimpleAttendanceView ? 'Simple' : 'Detallada'}
				</button>
			</div>
			{isSimpleAttendanceView ? <AsistenciaSimple /> : <AsistenciaDetallada />}
		</>
	)
}
