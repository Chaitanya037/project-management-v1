import { useState, useRef } from "react";
import Modal from "./Modal.jsx";

const NewTask = ({ onAddTask }) => {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim().length === 0) {
      modal.current.open();
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
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
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Task Title"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={enteredTask}
          onChange={handleChange}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </>
  );
};
export default NewTask;
