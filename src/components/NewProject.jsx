import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const newProject = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };
    if (
      newProject.title.trim() === "" ||
      newProject.description.trim() === "" ||
      newProject.dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd(newProject);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Looks like you forgot enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure to provide a valid value for every input.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
