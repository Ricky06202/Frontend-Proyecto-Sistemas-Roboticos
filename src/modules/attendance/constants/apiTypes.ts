export interface Estudiante {
	id: number
	nombre: string
	horario: Horario[]
}

export interface Horario {
	codigoHorario: string
	idMateria: number
	materia: string
	idCarrera: number
	idFacultad: number
	dia: string
	inicio: string
	fin: string
	salon: string
	profesor: string
}

export interface Asistencia {
	estudiante: string
	codigoHorario: string
	materia: string
	dia: string
	inicio: string
	fin: string
	fecha: string
	hora: string
	asistencia: boolean
}
