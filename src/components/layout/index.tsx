import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="border-b-2 border-amber-200 p-4 shadow-sm">
        <ul className="flex gap-8">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>

      <main className="flex-1 p-4">
        <Outlet />
      </main>

      <footer className="p-4">
        <p>© 2025 My Website</p>
      </footer>
    </div>
  );
}

export default Layout;
