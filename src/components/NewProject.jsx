// import { image1 } from "../assets/no-projects.png";
import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ handlecancel, onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const programmerRef = useRef();
  const modalRef = useRef();
  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    const enteredProgrammer = programmerRef.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === "" ||
      enteredProgrammer.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      programmer: enteredProgrammer,
    });
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h2>INVALID INPUT</h2>
      </Modal>
      <div className="w-[35rem] mt-16">
        <nav className="flex justify-end items-center gap-4 my-4">
          <button
            className="py-2 text-stone-500 hover:text-stone-950"
            onClick={handlecancel}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="py-2 px-6 bg-stone-400 text-stone-50 hover:bg-stone-950 rounded-md"
          >
            Save
          </button>
        </nav>

        <div>
          <Input ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input ref={dueDateRef} type="date" label="Due Date" />
          <Input ref={programmerRef} label="Programmer Title" />
        </div>
      </div>
    </>
  );
}
