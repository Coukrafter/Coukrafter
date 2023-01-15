import "../../index.css";

export default function Navbar() {
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href="/">
            Todo
          </a>
        </div>
        <div className="flex-none">
          <nav>
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/todo_list/1">Todo List</a>
              </li>
              <li>
                <a href="/deleted">Deleted</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
