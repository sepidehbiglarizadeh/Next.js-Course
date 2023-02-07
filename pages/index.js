import TodoForm from "@/components/todos/TodoForm";
import TodoList from "@/components/todos/TodoList";
import Layout from "@/containers/Layout";
import Todo from "@/server/models/todo";
import axios from "axios";
import { useState } from "react";

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
    <Layout>
      <section className="flex md:flex-row md:items-start md:justify-center gap-x-8 flex-col gap-y-8">
        <TodoForm onAdd={addTodo} />
        <TodoList data={data} onDelete={deleteTodo} onComplete={completeHandler} />
      </section>
    </Layout>
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
