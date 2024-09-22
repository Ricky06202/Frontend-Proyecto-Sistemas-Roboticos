import { Icon } from '@iconify/react'
export default function AsistenciaDetallada() {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex gap-4 justify-center'>
				<select className='focus:outline-none'>
					<option
						value='0'
						disabled
						selected
					>
						Curso
					</option>
					<option value='1'>Calculo I</option>
					<option value='2'>Dibujo</option>
					<option value='3'>Programación</option>
					<option value='4'>Base De Datos I</option>
				</select>
				<select className='focus:outline-none'>
					<option
						value='0'
						disabled
						selected
					>
						Filtrar
					</option>
					<option value='1'>Todo</option>
					<option value='2'>Asistencias</option>
					<option value='3'>Inasistencias</option>
				</select>
			</div>
			{/* este div es una linea divisora */}
			<div className='w-full h-px bg-gray-300'></div>
			<div className='border-2 border-gray-300 rounded-lg p-4 flex flex-col'>
				<table className=''>
					<thead>
						<tr className=''>
							<th>Curso</th>
							<th>Horario</th>
							<th>Registro</th>
							<th>Asistencia</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='text-center'>Calculo 1</td>
							<td className='text-center'>
								Lunes<div>10:00 - 11:00</div>
							</td>
							<td className='text-center'>
								Jun 10, 2024 <div>10:00 AM</div>
							</td>
							<td>
								<Icon
									icon='mingcute:check-2-fill'
									className='text-green-600 mx-auto'
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	)
}
