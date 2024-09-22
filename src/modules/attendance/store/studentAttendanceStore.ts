import { createStore } from 'zustand'

interface StudentAttendanceState {
	isSimpleAttendanceView: boolean
	toggleAttendanceView: () => void
}

const useStudentAttendanceStore = createStore<StudentAttendanceState>((set) => ({
	isSimpleAttendanceView: true,
	toggleAttendanceView: () => set((state) => ({ isSimpleAttendanceView: !state.isSimpleAttendanceView })),
}))

export default useStudentAttendanceStore
