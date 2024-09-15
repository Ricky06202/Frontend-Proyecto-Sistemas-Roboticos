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
			<div className='flex gap-4 justify-center'>
				<h2>Historial de Asistencias</h2>
				<button onClick={handleToggleAttendanceView}>{isSimpleAttendanceView ? 'Simple' : 'Detallada'}</button>
			</div>
			{isSimpleAttendanceView ? <AsistenciaSimple /> : <AsistenciaDetallada />}
		</>
	)
}
