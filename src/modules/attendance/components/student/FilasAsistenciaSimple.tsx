import { diasSemana } from "@attendance/constants/diasSemana";
import type { Materia } from "@attendance/constants/materiasTypes";
import { Icon } from "@iconify/react";

interface Props {
  materias: Materia[];
}
export default function FilasAsistenciaSimple({ materias }: Props) {
  return (
    <>
      {materias.map((materia) => (
        <tr key={materia.id} className="text-2xl text-left border-t">
          <td className="py-6 text-lg ">{materia.nombre}</td>

          {diasSemana.map((dia) => (
            <td key={dia + materia.id} className="border-l">
              {materia.dias.some((d) => d.nombre === dia) &&
                (materia.dias.find((d) => d.nombre === dia)?.asistencia
                  .valor ? (
                  <Icon
                    icon="mingcute:check-2-fill"
                    className="mx-auto text-green-600"
                  />
                ) : (
                  <Icon
                    icon="mingcute:close-fill"
                    className="mx-auto text-red-600"
                  />
                ))}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
