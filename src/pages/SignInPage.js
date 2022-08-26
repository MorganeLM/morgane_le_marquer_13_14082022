import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


function SignInPage() {
  const isUserLogged = useSelector(state => state.login.isLogged);

  return (
    <div>
        <Header />
        <main className="main bg-dark sign-in-main">
        {
            !isUserLogged ?
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <LoginForm />
            </section> 
            : 
            <section className="sign-in-content">
                <p>You're already logged.</p>
                <Link to="/tony"  className="main-nav-item">
                    <i className="fa fa-user-circle"></i> My Profile
                </Link>
            </section>
        }
        </main>
        <Footer />
    </div>
  );
}

export default SignInPage;
