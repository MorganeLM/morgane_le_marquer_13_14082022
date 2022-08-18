import Header from '../components/Header';
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <Header />
      <main>
        <div>
            <h2>Error 404</h2>
            <p>Cette page n'existe pas...</p>
            <ul>
                <li><Link to="/">Retour à la page d'accueil</Link></li>
            </ul>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage;
