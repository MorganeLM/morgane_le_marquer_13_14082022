import argentBankLogo from '../assets/img/argentBankLogo.png';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogoff } from '../redux/redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../redux/redux';


function Header() {
  const isUserLogged = useSelector(state => state.login.isLogged);
  const userToken = useSelector(state => state.login.token);
  const firstName = useSelector(state => state.user.firstName)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(isUserLogged){
      fetch("http://localhost:3001/api/v1/user/profile",  {
        method: "POST",
        headers: { Authorization: "Bearer " + userToken, accept: "application/json"}
      })
        .then(async response => {
          let data = await response.json();
          dispatch(updateProfile(data.body));
        })
    }else{
      // navigate("/signin");
      console.log('user not logged!')
    }
  }, [isUserLogged, dispatch, userToken]);

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(userLogoff())
    navigate("/");
  }

    return (
      <nav className="main-nav">
        <Link to="/"  className="main-nav-logo">
          <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo"/>
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isUserLogged ?
          <div>
            <Link to="/profile"  className="main-nav-item">
              <i className="fa fa-user-circle"></i> {firstName}
            </Link>
            <a href='#' className="main-nav-item" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i> Sign Out
            </a>
          </div>
          :
          <div>
            <Link to="/signin"  className="main-nav-logo">
                <i className="fa fa-user-circle"></i> Sign In
            </Link>
          </div>
          }
        </div>
      </nav>);
  }
  
  export default Header;