import { useEffect, useState } from "react";

import Section from "../components/Section";
import Headband from "../components/Headband";
import Avis from "../components/Avis";
import Music from "../components/Music";
import Modal from "../components/Modal";
// import FacebookPost from "../components/facebookPost";

// const appId = process.env.FB_APP_ID;

function Accueil({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && typeof window.FB !== 'undefined') {
  //     window.FB.api(
  //       `/${appId}/feed`, 
  //       function (response) {
  //         if (response && !response.error) {
  //           setPosts(response.data);
  //         }
  //       }
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll('section');
  //     const body = document.querySelector('body');
  //     const windowHeight = window.innerHeight;
      
  //     sections.forEach(section => {
  //       const sectionRect = section.getBoundingClientRect();
  //       const sectionMiddle = sectionRect.top + sectionRect.height / 2;
  //       const newClassName = section.getAttribute('data-classname');

  //       if (sectionMiddle <= windowHeight / 2) {
  //         body.className = newClassName || '';  
  //       }
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.Accueil section');
    const windowHeight = window.innerHeight;
  
    sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect();
        const sectionMiddle = sectionRect.top + sectionRect.height / 2;
  
        if (sectionMiddle <= windowHeight / 2) {
          const newClassName = section.getAttribute('data-classname');
          document.querySelector('body').className = newClassName;
        }
    });
  });

  const openModal = (type) => {
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const handleParagraphClick = (event) => {
    const text = event.target.textContent.toLowerCase();
    if (text.includes('matériel')) {
        openModal('case1');
    } else if (text.includes('prestataires')) {
        openModal('case2');
    }
  };

  return (
    <main className="Accueil">
      <h1>Happy Sound 54 - Accueil</h1>
      <Section 
      className="Intro" 
      dataClassname="background1"
      titre="Avec Deejay Fredowski passez un pur moment festif" 
      >
      <div className="Intro-article__text">
        <p>Bienvenue sur le site de Happy Sound 54, votre DJ professionnel pour des soirées inoubliables!</p>
        <p>Avec une passion débordante pour la musique et une expertise dans l'animation d'événements, nous sommes là pour donner  vie à vos fêtes, mariages, anniversaires et tout autre événement spécial.
        <br/>Notre mission est de créer une ambiance enivrante et de faire vibrer vos invités sur le dancefloor. Avec une vaste sélection de musiques adaptées à tous les goûts et une expérience riche dans le domaine, nous garantissons une soirée mémorable, où chaque moment sera une célébration de la musique et de la joie.
        <br/>Notre service est personnalisé, en accord avec vos préférences musicales et le style de votre événement. Notre équipement de pointe et notre expertise technique garantissent un son de haute qualité et une performance sans faille, pour que vous puissiez profiter pleinement de chaque instant de votre soirée.</p>
        <p>Faites confiance à Happy Sound 54 pour transformer vos événements en des moments inoubliables. <br/>Contactez-nous dès aujourd'hui pour réserver votre date et laissez-nous créer ensemble une soirée exceptionnelle!</p>
      </div>
      <p className="Intro-article__list">
        Liste 
          <button onClick={handleParagraphClick}>
            du matériel
          </button> 
        et 
          <button onClick={handleParagraphClick}>
            des prestataires
          </button>
      </p>
    </Section>

    <Section 
      className="avis" 
      dataClassname="background2"
      titre="AVIS"
    >
      <Avis/>
    </Section>
    <Section 
      className="ambiance"
      dataClassname="background3"
      titre="AMBIANCES" 
      >
        <p className="ambiance-text">Cliquez pour écouter un extrait</p>
        <Music />
        <Headband/> 
    </Section>    
    <Section 
      className="news" 
      dataClassname="background1"
      titre="DERNIERES NOUVELLES"
      >
      {/* <div className="facebook-posts">
        <p>Suivez-moi sur Facebook</p>
        {posts.map((post, index) => (
          <FacebookPost key={index} post={post} />
        ))}
      </div>  */}
    </Section>
    <Modal isOpen={isOpen} onClose={closeModal} modalType={modalType} />
    </main>
  );
}

export default Accueil;
