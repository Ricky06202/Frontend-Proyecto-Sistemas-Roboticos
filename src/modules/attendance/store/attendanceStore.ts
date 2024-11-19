import type { Asistencia } from '@attendance/constants/apiTypes'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AttendanceState {
	attendance: Asistencia[] | null //Promise<Asistencia[] | null> | null
	setAttendance: (attendance: Asistencia[]) => void
}

export const useAttendanceStore = create<AttendanceState>()(
	persist(
		(set, get) => ({
			attendance: get()?.attendance ?? null,
			setAttendance: (attendance) => set({ attendance }),
		}),
		{ name: 'attendanceStorage' }
	)
)
