interface Asistencia {
	valor: boolean
	fecha: string
	hora: string
}
interface Dia {
	nombre: string
	inicio: string
	fin: string
	salon: string
	profesor: string
	asistencia: Asistencia
}
export interface Materia {
	id: number
	nombre: string
	dias: Dia[]
}
