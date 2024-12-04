import type { User } from '@authentication/constants/userTypes'
import { AppPages } from '@constants/pages'

export function authRedirect(user: User) {
	// if (user.groups[0] === 'Estudiante') window.location.href = AppPages.Student(user.id_estudiante).Attendance.url
	// else if (user.groups[0] === 'Profesor') window.location.href = AppPages.Professor(user.id_estudiante).Attendance.url
	// else if (user.groups[0] === 'Admin') window.location.href = AppPages.Administrator.Panel.url
	if (user.groups[0] === 'Admin') window.location.href = AppPages.Administrator.Panel.url
	else window.location.href = AppPages.Student(user.id_estudiante).Attendance.url
}
