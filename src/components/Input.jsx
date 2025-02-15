import { forwardRef } from "react";

const Input = forwardRef(function ({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm bg-stone-200 text-stone-600 focus:outline-none foucs:border-stone-600 border-stone-300";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props}></textarea>
      ) : (
        <input ref={ref} className={classes} type="text" {...props} />
      )}
    </p>
  );
});

export default Input;
