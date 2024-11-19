import { getAsistencias } from '@attendance/services/apiAsistencia'
import { useAttendanceStore } from '@attendance/store/attendanceStore'
import { useEffect } from 'react'

export function useAttendance() {
	const asistencias = useAttendanceStore((state) => state.attendance)
	const setAsistencias = useAttendanceStore((state) => state.setAttendance)
	useEffect(() => {
		getAsistencias()
			.then((response) => {
				setAsistencias(response)
			})
			.catch((error) => {
				alert(error)
			})
	}, [])
	return { asistencias }
}
