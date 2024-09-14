import { useState } from "react";
export default function Newtask({ onaddt }) {
  const [enteredTask, setenteredTask] = useState();
  function onchangehandle(event) {
    setenteredTask(event.target.value);
  }
  function handleclick() {
    // Check if onaddt is indeed a function
    console.log("Type of onaddt:", typeof onaddt); // Should log 'function'
    if (typeof onaddt === "function") {
      if (enteredTask.trim() === "") {
        return;
      } else {
        onaddt(enteredTask);
        setenteredTask("");
      }
    } else {
      console.error("onaddt is not a function");
    }
  }
  return (
    <section>
      <div className="flex item-center gap-4">
        <input
          onChange={onchangehandle}
          className="w-64rem py-1 px-2 rounded-sm bg-stone-200 "
          type="text"
          value={enteredTask}
        ></input>
        <button
          className="rounded-md border-2 bg-blue-300 hover:bg-blue-500 hover:text-stone-900"
          onClick={handleclick}
        >
          Add Task
        </button>
      </div>
    </section>
  );
}
