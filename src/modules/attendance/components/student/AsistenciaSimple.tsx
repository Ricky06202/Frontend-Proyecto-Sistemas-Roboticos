import { Icon } from '@iconify/react'
export default function AsistenciaSimple() {
	return (
		<section className='flex flex-col gap-4'>
			<header className='flex flex-col gap-4 items-center'>
				<div>
					<button className='focus:outline-none'>
						<Icon icon='mingcute:left-fill' />
					</button>
					<select className='focus:outline-none'>
						<option value='1'>Semana 1</option>
						<option value='2'>Semana 2</option>
						<option value='3'>Semana 3</option>
						<option value='4'>Semana 4</option>
					</select>
					<button className='focus:outline-none'>
						<Icon icon='mingcute:right-fill' />
					</button>
				</div>
			</header>
			{/* este div es una linea divisora */}
			<div className='w-full h-px bg-gray-300'></div>
			<div className='flex flex-col p-4 border-2 rounded-lg'>
				<table>
					<thead>
						<tr>
							<th className='text-left py-4'>Curso</th>
							<th className='border-l'>Lunes</th>
							<th className='border-l'>Martes</th>
							<th className='border-l'>Miércoles</th>
							<th className='border-l'>Jueves</th>
							<th className='border-l'>Viernes</th>
						</tr>
					</thead>
					<tbody>
						<tr className='border-t text-2xl'>
							<td className='text-left py-6 text-lg'>Calculo 1</td>
							<td className='border-l'>
								<Icon
									icon='mingcute:check-2-fill'
									className='text-green-600 mx-auto'
								/>
							</td>
							<td className='border-l'>
								<Icon
									icon='mingcute:close-fill'
									className='text-red-600 mx-auto'
								/>
							</td>
							<td className='border-l'>
								<Icon
									icon='mingcute:check-2-fill'
									className='text-green-600 mx-auto'
								/>
							</td>
							<td className='border-l'>
								<Icon
									icon='mingcute:check-2-fill'
									className='text-green-600 mx-auto'
								/>
							</td>
							<td className='border-l'>
								<Icon
									icon='mingcute:close-fill'
									className='text-red-600 mx-auto'
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	)
}
