import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goToContacts = () => {
    console.log("Do somehing...");
    navigate("/contact");
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link  onClick={goToContacts} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;