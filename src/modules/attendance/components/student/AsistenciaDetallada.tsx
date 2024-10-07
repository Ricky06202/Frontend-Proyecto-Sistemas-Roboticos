import type { Estudiante } from "@attendance/constants/apiTypes";
import type { Materia } from "@attendance/constants/materiasTypes";
import { Icon } from "@iconify/react";
interface Props {
  materias: Materia[];
}
export default function AsistenciaDetallada({ materias }: Props) {
  return (
    <section className="flex flex-col gap-4 overflow-x-hidden">
      <header className="flex justify-center gap-4">
        <select
          defaultValue="0"
          className="px-4 py-2 border-2 rounded-lg outline-none border-blue-50 focus:border-blue-300 bg-blue-50"
        >
          <option value="0" disabled>
            Curso
          </option>
          <option value="1">Calculo I</option>
          <option value="2">Dibujo</option>
          <option value="3">Programación</option>
          <option value="4">Base De Datos I</option>
        </select>
        <select
          defaultValue="0"
          className="px-4 py-2 border-2 rounded-lg outline-none border-blue-50 focus:border-blue-300 bg-blue-50"
        >
          <option value="0" disabled>
            Filtrar
          </option>
          <option value="1">Todo</option>
          <option value="2">Asistencias</option>
          <option value="3">Inasistencias</option>
        </select>
      </header>
      {/* este div es una linea divisora */}
      <div className="w-full h-px bg-gray-300"></div>
      {/*className='overflow-y-auto max-h-[1000px]' esto es por si acaso pensamos en hacerlo como una area delimitada*/}
      <div className="flex flex-col gap-4">
        {materias.map((materia) => (
          <div
            key={materia.id}
            className="flex flex-col p-4 border-2 rounded-lg overflow-x-auto "
          >
            <table className="">
              <thead>
                <tr>
                  <th className="py-4 text-left min-w-72">Curso</th>
                  <th className="border-l min-w-36">Horario</th>
                  <th className="border-l min-w-36">Registro</th>
                  <th className="border-l min-w-36">Asistencia</th>
                </tr>
              </thead>
              <tbody>
                {materia.dias.map((dia) => (
                  <tr key={dia.nombre + materia.id} className="border-t">
                    <td className="py-6 text-lg">{materia.nombre}</td>
                    <td className="text-center border-l">
                      {dia.nombre}{" "}
                      <div>{`${dia.inicio.slice(0, -3)} - ${dia.fin.slice(0, -3)}`}</div>
                    </td>
                    <td className="text-center border-l">
                      {dia.asistencia.fecha}{" "}
                      <div>{dia.asistencia.hora.slice(0, -3)}</div>
                    </td>
                    <td className="border-l">
                      {dia.asistencia.valor ? (
                        <Icon
                          icon="mingcute:check-2-fill"
                          className="mx-auto text-2xl text-green-600"
                        />
                      ) : (
                        <Icon
                          icon="mingcute:close-fill"
                          className="mx-auto text-2xl text-red-600"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}
