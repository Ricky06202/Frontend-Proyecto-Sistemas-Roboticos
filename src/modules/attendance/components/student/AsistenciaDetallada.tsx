import type { Materia } from '@attendance/constants/materiasTypes'
import TarjetasAsistenciaDetallada from './TarjetasAsistenciaDetallada'
import { useFiltroMateriasEstudiante } from '@attendance/hooks/useFiltroMateriasEstudiante'
interface Props {
	materias: Materia[]
}
export default function AsistenciaDetallada({ materias }: Props) {
	const { filtroMateria, handleFiltroMateria, filtroAsistencia, handleFiltroAsistencia, materiasFiltradas } =
		useFiltroMateriasEstudiante(materias)

	return (
		<section className='flex flex-col gap-4 overflow-x-hidden'>
			<header className='flex justify-center gap-4'>
				<div className='flex flex-col'>
					<label
						className='pb-2 pl-4 text-gray-600'
						htmlFor='materias'
					>
						Materia
					</label>
					<select
						id='materias'
						defaultValue='0'
						className='px-4 py-2 border-2 rounded-lg outline-none border-blue-50 focus:border-blue-300 bg-blue-50'
						value={filtroMateria}
						onChange={handleFiltroMateria}
					>
						<option value='0'>Todas</option>
						{materias.map((materia) => (
							<option
								key={materia.id}
								value={materia.id}
							>
								{materia.nombre}
							</option>
						))}
					</select>
				</div>
				<div className='flex flex-col'>
					<label
						htmlFor='attendance'
						className='pb-2 pl-4 text-gray-600'
					>
						Filtrar
					</label>
					<select
						id='attendance'
						defaultValue='0'
						className='px-4 py-2 border-2 rounded-lg outline-none border-blue-50 focus:border-blue-300 bg-blue-50'
						value={filtroAsistencia}
						onChange={handleFiltroAsistencia}
					>
						<option value='0'>Todo</option>
						<option value='1'>Asistencias</option>
						<option value='2'>Inasistencias</option>
					</select>
				</div>
			</header>
			{/* este div es una linea divisora */}
			<div className='w-full h-px bg-gray-300'></div>
			{/*className='overflow-y-auto max-h-[1000px]' esto es por si acaso pensamos en hacerlo como una area delimitada*/}
			<div className='flex flex-col gap-4'>
				<TarjetasAsistenciaDetallada materias={materiasFiltradas} />
			</div>
		</section>
	)
}
