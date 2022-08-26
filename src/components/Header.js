import argentBankLogo from '../assets/img/argentBankLogo.png';
import { Link } from "react-router-dom";

function Header() {
    return (
      <nav className="main-nav">
        <Link to="/"  className="main-nav-logo">
          <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo"/>
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <div>
            <Link to="/signin"  className="main-nav-logo">
                <i className="fa fa-user-circle"></i> Sign In
            </Link>
          </div>
          <div>
            <Link to="/tony"  className="main-nav-item">
              <i className="fa fa-user-circle"></i> Tony
            </Link>
            <Link to="/"  className="main-nav-item">
              <i className="fa fa-sign-out"></i> Sign Out
            </Link>
          </div>
        </div>
      </nav>);
  }
  
  export default Header;