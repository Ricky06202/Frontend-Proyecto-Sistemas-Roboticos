import { useState, useEffect } from "react";
import { Edit } from "@landingPage/userinformation/iconos/Edit";
import { Cancel } from "@landingPage/userinformation/iconos/Cancel";
import { Save } from "@landingPage/userinformation/iconos/Save";

export default function Edit_Input() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div class="grid grid-flow-col gap-4">
      <button onClick={() => setIsHidden(true)}>
        <Edit />
      </button>
      <div
        class={` ${isHidden ? "block" : "hidden"} flex gap-2 content-center items-center`}
      >
        <button onClick={() => setIsHidden(false)}>
          <Cancel />
        </button>
        <input
          type="text"
          class="border border-black dark:bg-gray-500 dark:border-slate-100"
        />
        <Save />
      </div>
    </div>
  );
}
