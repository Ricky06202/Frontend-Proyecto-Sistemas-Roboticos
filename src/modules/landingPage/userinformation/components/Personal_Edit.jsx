import Edit_Input from "@landingPage/userinformation/components/Edit_Input";

export default function Personal_Edit({ field, data }) {
  return (
    <div class="flex gap-10">
      <h1 class="flex flex-col text-2xl">
        {field}{" "}
        <a class="text-lg opacity-60">
          <Edit_Input text={data} />
        </a>
      </h1>
    </div>
  );
}
