function NavItem(props) {
    return(
        <li class="nav-item">
        <a class="nav-link collapsed" href={props.link}>
          <i class={props.icon}></i>
          <span>{props.name}</span>
        </a>
      </li>
    );
}

export default NavItem