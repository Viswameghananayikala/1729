import { NavLink } from "react-router-dom";

const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
};

export default function Navbar() {
  return (
    <nav style={{ padding: "12px 20px", background: "#f3f4f6" }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : { marginRight: 16 })}>
        Home
      </NavLink>
      <NavLink to="/courses" style={({ isActive }) => (isActive ? activeStyle : { marginRight: 16 })}>
        Courses
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : { marginRight: 16 })}>
        Contact
      </NavLink>
    </nav>
  );
}
