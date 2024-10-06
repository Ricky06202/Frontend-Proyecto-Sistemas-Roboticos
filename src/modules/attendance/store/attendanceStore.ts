import type { Asistencia } from '@attendance/constants/apiTypes'
import { getAsistenciasMock } from '@attendance/constants/asistenciaMock'
import { getAsistencias } from '@attendance/services/apiAsistencia'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AttendanceState {
	attendance: Asistencia[] | null //Promise<Asistencia[] | null> | null
	fetchAttendance: () => void
}

export const useAttendanceStore = create<AttendanceState>()(
	persist(
		(set) => ({
			attendance: null,
			fetchAttendance: () => {
				set({ attendance: getAsistenciasMock() })
			},
		}),
		{ name: 'attendance-storage' }
	)
)
