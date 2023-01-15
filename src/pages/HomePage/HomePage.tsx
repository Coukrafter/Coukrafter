import TodoLists from "./components/TodoListsList";

export default function HomePage() {
  return (
    <div>
      <div>
        <h1>Home Page</h1>
      </div>
      <div>Search bar</div>
      <TodoLists />
    </div>
  );
}
