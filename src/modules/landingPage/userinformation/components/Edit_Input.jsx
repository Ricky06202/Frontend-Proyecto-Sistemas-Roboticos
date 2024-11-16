import { useState, useEffect } from "react";
import { Edit } from "@landingPage/userinformation/iconos/Edit";
import { Cancel } from "@landingPage/userinformation/iconos/Cancel";
import { Save } from "@landingPage/userinformation/iconos/Save";

export default function Edit_Input({ text }) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div class="grid grid-flow-col items-center content-center">
      <div
        class={` ${isHidden ? "hidden" : "Block"} flex gap-8 items-center content-center`}
      >
        <h3>{text}</h3>
        <button onClick={() => setIsHidden(true)}>
          <Edit />
        </button>
      </div>
      <div
        class={` ${isHidden ? "block" : "hidden"} flex gap-4 content-center items-center`}
      >
        <input
          type="text"
          placeholder={text}
          class="border border-black dark:bg-gray-500 dark:border-slate-100"
        />
        <div className="flex gap-4 mt-2">
          <button onClick={() => setIsHidden(false)}>
            <Cancel />
          </button>
          <button>
            <Save />
          </button>
        </div>
      </div>
    </div>
  );
}
