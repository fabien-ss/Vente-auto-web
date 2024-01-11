import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';

function SearchBar() {
    return (
        <div class="search-bar">
        <form class="search-form d-flex align-items-center" method="POST" action="#">
          <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
          <button type="submit" title="Search"><i class="bi bi-search"></i></button>
        </form>
      </div>
      );
}

export default SearchBar;