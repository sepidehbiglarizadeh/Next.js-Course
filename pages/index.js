import TodoForm from "@/components/todos/TodoForm";
import TodoList from "@/components/todos/TodoList";
import Todo from "@/server/models/todo";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = ({ todosData }) => {
  const [todos, setTodos] = useState(todosData);

  const deleteTodoHandler = async (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addTodoHandler = async (e, formData) => {
    e.preventDefault();
    axios
      .post(`/api/todos/`, { formData })
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const completeHandler = (id) => {
    axios
      .put(`/api/todos/complete/${id}`)
      .then(({ data }) => {
        setData(data.todos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className=" w-full bg-white shadow-sm flex justify-center py-4 mb-6">
        <h1 className="font-bold">TodoList App using Next.js & TailwindCSS</h1>
      </nav>
      <div className="container p-2 xl:max-w-screen-xl mx-auto">
        <section className="flex md:flex-row md:items-start md:justify-center gap-x-8 flex-col gap-y-8">
          <TodoForm onAdd={addTodoHandler} />
          <TodoList todos={todos} onDelete={deleteTodoHandler} onComplete={completeHandler} />
        </section>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const todos = await Todo.find({});
  return {
    props: {
      todosData: JSON.parse(JSON.stringify(todos)),
    },
  };
}
