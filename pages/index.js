import TodoForm from "@/components/todos/TodoForm";
import TodoList from "@/components/todos/TodoList";
import axios from "axios";
import { useEffect, useState } from "react";

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
        setTodos(todos.filter((t) => t.id !== parseInt(id)));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addTodoHandler = async (e, todo) => {
    e.preventDefault();
    axios
      .post(`/api/todos/`, { todo })
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
          <TodoForm onAdd={addTodoHandler} />
          <TodoList todos={todos} onDelete={deleteTodoHandler} />
        </section>
      </div>
    </div>
  );
};

export default Home;
