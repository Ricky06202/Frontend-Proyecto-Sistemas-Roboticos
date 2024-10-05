import type { Asistencia } from '@attendance/constants/apiTypes'
import { create } from 'zustand'

interface AttendanceState {
	attendance: Asistencia[] | null
	setAttendance: (attendance: Asistencia[] | null) => void
}

export const useAttendanceStore = create<AttendanceState>()((set) => ({
	attendance: null,
	setAttendance: (attendance) => set({ attendance }),
}))
