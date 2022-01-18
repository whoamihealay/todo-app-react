import React from "react";

const Filter = () => {
  return (
    <div className="flex justify-center gap-4 text-slate-500 dark:text-gray-600 bg-white dark:bg-slate-800 px-4 py-3 rounded-lg">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};

export default Filter;
