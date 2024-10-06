import type { Estudiante } from '@attendance/constants/apiTypes'
import { getEstudiantesMock } from '@attendance/constants/horarioMock'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StudentsState {
	students: Estudiante[] | null // Promise<Estudiante[] | null> | null
	fetchStudents: () => void
}

export const useStudentsStore = create<StudentsState>()(
	persist(
		(set) => ({
			students: null,
			fetchStudents: () => {
				set({ students: getEstudiantesMock() })
			},
		}),
		{
			name: 'students-storage',
			// storage: createJSONStorage(() => sessionStorage), // defaults to localStorage if not set
		}
	)
)
