import Filter from "./features/filters/Filter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoInput from "./features/todos/TodoInput";
import TodoList from "./features/todos/TodoList";

function App() {
  return (
    <div className="px-4 mx-auto max-w-2xl min-w-[300px]">
      <div className="bg-gray-200 dark:bg-slate-900 absolute inset-0 -z-50" />
      <Header />
      <main className="">
        <div className="flex flex-col gap-4">
          <TodoInput />
          <TodoList />
          <div className="sm:hidden flex justify-center gap-4 text-slate-500 dark:text-gray-600 bg-white dark:bg-slate-800 px-4 py-3 rounded-lg">
            <Filter />
          </div>
        </div>
        {/* TODO: <div className="py-8 text-gray-500 text-center">
          Drag and drop to reorder list
        </div> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
