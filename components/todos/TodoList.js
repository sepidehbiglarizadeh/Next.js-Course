import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
      {todos.map((todo) => {
        return (
          <div
            key={todo._id}
            className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl"
          >
            <Link href={`/todos/${todo._id}`}>
              <span>{todo.title}</span>
            </Link>
            <div className="flex gap-x-3 items-center">
              <button>
                <CheckIcon className="w-6 h-6 stroke-green-400" />
              </button>
              <button onClick={() => onDelete(todo._id)}>
                <TrashIcon className="w-6 h-6 stroke-red-400" />
              </button>
              <Link href={`todos/edit/${todo._id}`}>
                <PencilIcon className="w-6 h-6 stroke-blue-400" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
