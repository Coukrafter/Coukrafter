import { useSelector } from "react-redux";

import { getTodoListTitle } from "../../features/TodoList/selectors";
import Searchbar from "./Searchbar";
import ProgressSlider from "./ProgressSlider";

export default function Sidebar() {
  const todoListTitle = useSelector(getTodoListTitle);

  return (
    <div className="card w-1/5 bg-secondary shadow-2xl p-4 flex gap-4 h-min">
      <h1 className="font-bold text-2xl">
        {todoListTitle || "Loading todo list"}
      </h1>
      <hr className="border-accent" />
      <Searchbar />
      <ProgressSlider />
    </div>
  );
}
