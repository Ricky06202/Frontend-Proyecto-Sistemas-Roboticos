import Edit_Input from "@landingPage/userinformation/components/Edit_Input";

export default function Personal_Edit({
  idComponent,
  field,
  data,
  showClickFunction,
  hiddenClickFunction,
}) {
  return (
    <div className="flex gap-10">
      <h1 className="flex flex-col text-2xl">
        {field}{" "}
        <a className="text-lg ">
          <Edit_Input id={idComponent} text={data} />
        </a>
      </h1>
    </div>
  );
}
