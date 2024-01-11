function Logo (props){
    return(
        <div class="d-flex align-items-center justify-content-between">
      <a href={props.link} class="logo d-flex align-items-center">
        <img src={props.image} alt=""/>
        <span class="d-none d-lg-block">{props.name}</span>
      </a>
    </div>
    );
}

export default Logo;