import { getOneTodo } from "../api/todos/[todoId]";

const TodoPage = ({todo}) => {
  return (
    <>
      <h1>Todo Detail Page</h1>
      <h2>Title: {todo.title}</h2>
      <p>Description: {todo.description}</p>
    </>
  );
};

export default TodoPage;

export async function getServerSideProps(context) {
  const { query } = context;
  // get one todo from DB
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
