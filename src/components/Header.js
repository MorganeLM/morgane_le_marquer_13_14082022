import argentBankLogo from '../assets/img/argentBankLogo.png';
import { Link } from "react-router-dom";

function Header() {
    return (
      <nav class="main-nav">
        <Link to="/"  class="main-nav-logo">
          <img class="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo"/>
          <h1 class="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <div>
            <Link to="/signin"  class="main-nav-logo">
                <i class="fa fa-user-circle"></i> Sign In
            </Link>
          </div>
          <div>
            <Link to="/tony"  class="main-nav-item">
              <i class="fa fa-user-circle"></i> Tony
            </Link>
            <Link to="/"  class="main-nav-item">
              <i class="fa fa-sign-out"></i> Sign Out
            </Link>
          </div>
        </div>
      </nav>);
  }
  
  export default Header;