import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import NavItem from './NavItem';

function SideBar() {
    return (
    <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <NavItem name="Profile" icon="bi bi-person" link="#" />
      <NavItem name="F.A.Q" icon="bi bi-question-circle" link="#" />
      <NavItem name="Contact" icon="bi bi-envelope" link="#" />
      <NavItem name="Register" icon="bi bi-card-list" link="#" />
      <NavItem name="Login" icon="bi bi-box-arrow-in-right" link="" />

    </ul>

  </aside>
    );
}

export default SideBar;