import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

import Logo from "../assets/images/Logo-HS54.png";
import SmileyAccueil from "../assets/images/Smiley4.png"
import SmileyMariage from "../assets/images/Smiley1.png";
import SmileySoiree from "../assets/images/Smiley2.png";
import SmileyEvenement from "../assets/images/Smiley3.png";
import Modal from "../components/Modal"

const samplePageLinks = [
    {
      text: "Accueil Happy Sound 54",
      src: SmileyAccueil,
      url: "/",
      badge: false,
      description:
        "Retour à l'accueil de Happy Sound 54",
    },
    {
      text: "Mariage",
      src: SmileyMariage,
      url: "/mariage",
      badge: false,
      description:
        "Animations de votre mariage",
    },
    {
      text: "Soirées à thème",
      src: SmileySoiree,
      url: "/soirees",
      badge: false,
      description:
        "Animations de vos soirées",
    },
    {
      text: "Evènements professionnels",
      src: SmileyEvenement,
      url: "/evenement",
      badge: false,
      description:
        "Animations de vos évènements professionnels",
    }
  ];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const openModal = (type) => {
        setModalType(type);
        setIsOpen(true);
    };
    
    const closeModal = () => setIsOpen(false);


    return (
        <header>
            <Link to="/" className="header-link">
                <img className="header-link__logo" src={Logo} alt="Logo Happy Sound 54" />
            </Link>
            <nav className="header-nav">
                {/* <li className={isHomePage ? 'header-nav__link-button active' : 'header-nav__link-button'}>
                    <Link to={samplePageLinks[0].url}>
                    <img src={samplePageLinks[0].src} alt={samplePageLinks[0].description} />
                    </Link>
                </li> */}
                <div className="header-nav__link">
                    {samplePageLinks.slice(1).map((link, i) => (
                    <li key={link.url} className="header-nav__link-button">
                        <NavLink to={link.url}>
                            <img src={link.src} alt={link.description} />
                        </NavLink>
                    </li>
                    ))}
                </div>
            </nav>
            <button onClick={() => openModal('case3')}>CONTACT</button>
            <Modal isOpen={isOpen} onClose={closeModal} modalType={modalType} />
        </header>
    )
}

export default Header;