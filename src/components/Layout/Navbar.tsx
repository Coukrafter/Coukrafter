import "../../index.css";

export default function Navbar() {
  return (
    <header className="p-2">
      <div className="navbar bg-primary rounded-box shadow-xl">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href="/todo-app/">
            Todo
          </a>
        </div>
        <div className="flex-none">
          <nav>
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/todo-app/">Home</a>
              </li>
              <li>
                <a href="/todo-app/deleted">Deleted</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
