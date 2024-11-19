import React from "react";
import Personal_Edit from "./Personal_Edit";
import { useAccountStore } from "@authentication/stores/accountStore";

export default function PersonalInformation() {
  const user = useAccountStore((state) => state.user);
  const components = [
    { idComponent: "3", field: "Nombre:", data: user?.first_name },
    { idComponent: "4", field: "Apellido:", data: user?.last_name },
    { idComponent: "5", field: "Email:", data: user?.email },
    { idComponent: "6", field: "Tipo de Usuario:", data: "Comming Soon!" },
  ];

  return (
    <div className="flex rounded-xl bg-component border border-black/10 dark:bg-component-dark dark:border-white/30 dark:text-white shadow-md p-5 justify-start gap-4">
      <div className="">
        <h2 className="text-4xl font-semibold mb-10">Información Personal</h2>
        <div className="grid grid-cols-1 gap-8">
          {components.map((component, index) => (
            <Personal_Edit
              key={index}
              idComponent={component.idComponent}
              field={component.field}
              data={component.data}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
