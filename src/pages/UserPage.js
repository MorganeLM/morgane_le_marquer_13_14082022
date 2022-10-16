import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeBanner from '../components/WelcomeBanner';
import Account from '../components/Account';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserPage() {
    const isUserLogged = useSelector(state => state.login.isLogged);
    const navigate = useNavigate();
    // not logged users are redirected to signin page
    useEffect(() => {
        if(!isUserLogged){
            navigate("/signin")
          }
      }, [isUserLogged, navigate]);

    return (
    <div>
        <Header />
        <main className="main bg-dark main-user">
            <WelcomeBanner />
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="2,082.79" description="Available Balance"/>
            <Account title="Argent Bank Savings (x6712)" amount="10,928.42" description="Available Balance"/>
            <Account title="Argent Bank Credit Card (x8349)" amount="184.30" description="Current Balance"/>
        </main>
        <Footer />
    </div>
    );
}

export default UserPage;
