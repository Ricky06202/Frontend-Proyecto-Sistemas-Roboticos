import { Icon } from '@iconify/react'
export default function AsistenciaSimple() {
	return (
		<section className='flex flex-col gap-4'>
			<header className='flex flex-col gap-4 items-center'>
				<div>
					<button>
						<Icon icon='mingcute:left-fill' />
					</button>
					<select>
						<option value='1'>Semana 1</option>
						<option value='2'>Semana 2</option>
						<option value='3'>Semana 3</option>
						<option value='4'>Semana 4</option>
					</select>
					<button>
						<Icon icon='mingcute:right-fill' />
					</button>
				</div>
			</header>
			{/* este div es una linea divisora */}
			<div className='w-full h-px bg-gray-300'></div>

			<table>
				<thead>
					<tr>
						<th>Curso</th>
						<th>Lunes</th>
						<th>Martes</th>
						<th>Miércoles</th>
						<th>Jueves</th>
						<th>Viernes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='text-center'>Calculo 1</td>
						<td>
							<Icon
								icon='mingcute:check-2-fill'
								className='text-green-600 mx-auto'
							/>
						</td>
						<td>
							<Icon
								icon='mingcute:close-fill'
								className='text-red-600 mx-auto'
							/>
						</td>
						<td>
							<Icon
								icon='mingcute:check-2-fill'
								className='text-green-600 mx-auto'
							/>
						</td>
						<td>
							<Icon
								icon='mingcute:check-2-fill'
								className='text-green-600 mx-auto'
							/>
						</td>
						<td>
							<Icon
								icon='mingcute:close-fill'
								className='text-red-600 mx-auto'
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}
