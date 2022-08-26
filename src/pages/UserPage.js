import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeBanner from '../components/WelcomeBanner';
import Account from '../components/Account';
import { useEffect } from 'react';

function UserPage() {
    useEffect(() => {
        console.log('hého')
        fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                    email: 'tony@stark.com',
                    password: 'password123'
                })
            })
            .then(async response => {
                console.log(response.data)
            })
      }, [])

  return (
    <div>
      <Header />
      <main className="main bg-dark main-user">
        <WelcomeBanner />
        <h2 className="sr-only">Accounts</h2>
        <Account />
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
            </div>
        </section>
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
            </div>
        </section>
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
            </div>
        </section>
        </main>
        <Footer />
    </div>
  );
}

export default UserPage;
