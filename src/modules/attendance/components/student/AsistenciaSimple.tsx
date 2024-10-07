import type { Materia } from "@attendance/constants/materiasTypes";
import { Icon } from "@iconify/react";
import FilasAsistenciaSimple from "./FilasAsistenciaSimple";
interface Props {
  materias: Materia[];
}
export default function AsistenciaSimple({ materias }: Props) {
  return (
    <section className="flex flex-col gap-4 overflow-hidden">
      <header className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button className="focus:outline-none hover:text-blue-500">
            <Icon icon="mingcute:left-fill" className="text-3xl" />
          </button>
          <select className="px-4 py-2 border-2 rounded-lg outline-none border-blue-50 focus:border-blue-300 bg-blue-50">
            <option value="1">Semana 1</option>
            <option value="2">Semana 2</option>
            <option value="3">Semana 3</option>
            <option value="4">Semana 4</option>
          </select>
          <button className="focus:outline-none hover:text-blue-500">
            <Icon icon="mingcute:right-fill" className="text-3xl" />
          </button>
        </div>
      </header>
      {/* este div es una linea divisora */}
      <div className="w-full h-px bg-gray-300"></div>
      <div className="flex flex-col p-4 border-2 rounded-lg overflow-auto">
        <table>
          <thead>
            <tr>
              <th className="py-4 text-left min-w-72">Curso</th>
              <th className="border-l min-w-28">Lunes</th>
              <th className="border-l min-w-28">Martes</th>
              <th className="border-l min-w-28">Miércoles</th>
              <th className="border-l min-w-28">Jueves</th>
              <th className="border-l min-w-28">Viernes</th>
            </tr>
          </thead>
          <tbody>
            <FilasAsistenciaSimple materias={materias} />
          </tbody>
        </table>
      </div>
    </section>
  );
}
