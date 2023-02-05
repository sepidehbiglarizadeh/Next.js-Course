import { todos } from "@/data/todos";

export default function handler(req, res) {
  if (req.method === "POST") {
    const newTodo = {
      id: Date.now(),
      title: req.body.formData.title,
      description: req.body.formData.description,
    };
    todos.push(newTodo);
    return res.status(201).json({ message: "New todo added", todos });
  } else if (req.method === "GET") {
    return res.status(200).json({ todos });
  }
}
