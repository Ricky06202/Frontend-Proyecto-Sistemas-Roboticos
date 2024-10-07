import type { Materia } from "@attendance/constants/materiasTypes";
import { Icon } from "@iconify/react";

interface Props {
  materias: Materia[];
}
export default function TarjetasAsistenciaDetallada({ materias }: Props) {
  return (
    <>
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
    </>
  );
}
