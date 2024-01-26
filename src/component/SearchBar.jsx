import React, {useState} from 'react';
import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';

function SearchBar() {
  const [state, setState] = useState({
    search: ""
  })

  const handleChange = (event) => {
    console.log(event);
    const data = event.target.value;
    setState({
      ...state,
       [event.target.name]: data
    })  
  }
    return (
        <div class="search-bar">
        <form class="search-form d-flex align-items-center" method="POST" action="#">
          <input type="text" name="query" onChange={e => handleChange(e)} placeholder="Search" title="Enter search keyword"/>
          <button type="submit" name="search" title="Search" ><i class="bi bi-search"></i></button>
        </form>
      </div>
      );
}

export default SearchBar;