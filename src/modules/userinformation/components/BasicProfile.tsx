import { useAccountStore } from "@authentication/stores/accountStore";
import Edit_Input from "./Edit_Input";
import { AccountCircle } from "./iconos/Account";

export default function BasicProfile() {
  const user = useAccountStore((state) => state.user);
  return (
    <div className="grid grid-cols-1 rounded-xl bg-component border border-black/10 dark:bg-component-dark dark:border-white/30 shadow-md p-5 justify-start gap-4">
      <div>
        <AccountCircle />
        <div className="flex flex-col text-xl dark:text-white space-y-2">
          <a className="flex font-semibold gap-10 items-center">
            Nombre de Usuario:
            <h3 className="ml-2 opacity-80">
              {user?.first_name} {user?.last_name}
            </h3>
          </a>

          <a className="flex font-semibold gap-40 items-center">
            Usuario:
            <h3 className="ml-1">
              <Edit_Input id="1" text={user?.username} />
            </h3>
          </a>
          <a className="flex font-semibold gap-14 items-center">
            Correo Electrónico:
            <h3>
              <Edit_Input id="2" text={user?.email} />
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}
