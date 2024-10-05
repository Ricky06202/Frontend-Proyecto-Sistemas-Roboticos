import type { Estudiante } from '@attendance/constants/apiTypes'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface StudentsState {
	students: Estudiante[] | null
	setStudents: (students: Estudiante[] | null) => void
}

export const useStudentsStore = create<StudentsState>()(
	persist(
		(set, get) => ({
			students: null,
			setStudents: (students) => set({ students }),
		}),
		{
			name: 'students-storage',
			// storage: createJSONStorage(() => sessionStorage), // defaults to localStorage if not set
		}
	)
)
