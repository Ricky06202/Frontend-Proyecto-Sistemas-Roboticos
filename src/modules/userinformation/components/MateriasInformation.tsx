export default function MateriasInformation() {
  return (
    <div className="grid grid-row rounded-xl bg-component border border-black/10 dark:bg-component-dark dark:border-white/30 dark:text-white shadow-md p-5 justify-start gap-4">
      <h2 className="text-4xl font-semibold mb-10">Asistencias Activas</h2>
      <div className="grid grid-cols-2">
        <div className="space-y-10">
          <h2 className="text-2xl font-semibold">Cursos:</h2>
          <div className="space-y-8 opacity-60">
            <a className="flex flex-col text-2xl">Materia 1</a>
            <a className="flex flex-col text-2xl">Materia 2</a>
            <a className="flex flex-col text-2xl">Materia 3</a>
          </div>
        </div>
        <div className="space-y-10">
          <h2 className="text-2xl font-semibold">Última asistencia:</h2>
          <div className="space-y-8 opacity-60">
            <a className="flex flex-col text-2xl">12-13-2024 10:15:00</a>
            <a className="flex flex-col text-2xl">12-13-2024 10:15:00</a>
            <a className="flex flex-col text-2xl">12-13-2024 10:15:00</a>
          </div>
        </div>
      </div>
    </div>
  );
}
