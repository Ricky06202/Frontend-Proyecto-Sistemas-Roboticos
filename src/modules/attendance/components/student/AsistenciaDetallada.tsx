import type { Materia } from "@attendance/constants/materiasTypes";
import TarjetasAsistenciaDetallada from "./TarjetasAsistenciaDetallada";
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
        <TarjetasAsistenciaDetallada materias={materias} />
      </div>
    </section>
  );
}
