import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="px-4 mx-auto max-w-2xl min-w-[300px]">
      <div className="bg-gray-200 dark:bg-slate-900 absolute inset-0 -z-50" />
      <Header />
      <main className="">
        <div className="flex flex-col gap-4">
          <TodoInput />
          <Todos />
          <Filter />
        </div>
        <div className="py-8 text-gray-500 text-center">
          Drag and drop to reorder list
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
