import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

const Home = () => {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/todos")
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteTodoHandler = async (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  if (loading) return <div>Loading...!</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className=" w-full bg-white shadow-sm flex justify-center py-4 mb-6">
        <h1 className="font-bold">TodoList App using Next.js & TailwindCSS</h1>
      </nav>
      <div className="container p-2 xl:max-w-screen-xl mx-auto">
        <section className="flex items-center justify-center">
          <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
            {todos.map((todo) => {
              return (
                <div
                  key={todo.id}
                  className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl"
                >
                  <span>{todo.title}</span>
                  <div className="flex gap-x-3 items-center">
                    <button>
                      <CheckIcon className="w-6 h-6 stroke-green-400" />
                    </button>
                    <button onClick={() => deleteTodoHandler(todo.id)}>
                      <TrashIcon className="w-6 h-6 stroke-red-400" />
                    </button>
                    <button>
                      <PencilIcon className="w-6 h-6 stroke-blue-400" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
