import type { Estudiante } from '@attendance/constants/apiTypes'
import { getEstudiantesMock } from '@attendance/constants/horarioMock'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StudentsState {
	student: Estudiante | null
	setStudent: (student: Estudiante | null) => void
	students: Estudiante[] | null // Promise<Estudiante[] | null> | null
	setStudents: (students: Estudiante[]) => void
}

export const useStudentsStore = create<StudentsState>()(
	persist(
		(set, get) => ({
			student: null,
			setStudent: (student) => set({ student }),
			students: get()?.students ?? null,
			setStudents: (students) => set({ students }),
		}),
		{
			name: 'studentsStorage',
			// storage: createJSONStorage(() => sessionStorage), // defaults to localStorage if not set
		}
	)
)
