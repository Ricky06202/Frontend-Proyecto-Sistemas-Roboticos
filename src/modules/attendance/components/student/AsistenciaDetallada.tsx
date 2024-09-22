import { Icon } from '@iconify/react'
export default function AsistenciaDetallada() {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex justify-center gap-4'>
				<select className='px-4 py-2 border-2 rounded-lg outline-none border-blue-50 focus:border-blue-300 bg-blue-50'>
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
				<select className='px-4 py-2 border-2 rounded-lg outline-none border-blue-50 focus:border-blue-300 bg-blue-50'>
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
			<div className='flex flex-col p-4 border-2 rounded-lg'>
				<table className=''>
					<thead>
						<tr>
							<th className='py-4 text-left'>Curso</th>
							<th className='border-l'>Horario</th>
							<th className='border-l'>Registro</th>
							<th className='border-l'>Asistencia</th>
						</tr>
					</thead>
					<tbody>
						<tr className='border-t'>
							<td className='py-6 text-lg'>Calculo 1</td>
							<td className='text-center border-l'>
								Lunes<div>10:00 - 11:00</div>
							</td>
							<td className='text-center border-l'>
								Jun 10, 2024 <div>10:00 AM</div>
							</td>
							<td className='border-l'>
								<Icon
									icon='mingcute:check-2-fill'
									className='mx-auto text-2xl text-green-600'
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	)
}
