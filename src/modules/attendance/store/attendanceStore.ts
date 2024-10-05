import type { Asistencia } from '@attendance/constants/apiTypes'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AttendanceState {
	attendance: Asistencia[] | null
	setAttendance: (attendance: Asistencia[] | null) => void
}

export const useAttendanceStore = create<AttendanceState>()(
	persist(
		(set) => ({
			attendance: null,
			setAttendance: (attendance) => set({ attendance }),
		}),
		{ name: 'attendance-storage' }
	)
)
