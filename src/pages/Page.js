import { useParams } from 'react-router-dom';

import Section from "../components/Section"

function Page() {
    const { type } = useParams();

    let titre, texte;

    // Définir le titre et le texte en fonction du type d'événement
    switch (type) {
        case 'mariage':
            titre = "Rendez votre mariage inoubliable";
            texte = (
                <article className="mariage-article__text">
                <p>Lorsque vous choisissez Happy Sound 54 pour animer votre soirée de mariage, vous optez pour une expérience exceptionnelle du début à la fin.</p>
                <p>Notre processus d'organisation de mariage est conçu pour répondre à vos besoins les plus précis et pour faire de votre journée spéciale un moment magique et inoubliable. Nous commençons par une consultation approfondie pour comprendre vos goûts musicaux, vos préférences en matière d'ambiance et de style, ainsi que tous les détails logistiques de votre événement. Avec notre expertise, nous vous conseillons sur le déroulement de la soirée, depuis le cocktail jusqu'à la dernière danse, en veillant à ce que chaque moment soit parfaitement orchestré.</p>
                <p>Le jour de votre mariage, notre équipe professionnelle assure une installation discrète et efficace de l'équipement son et lumière, garantissant un son cristallin et des effets visuels spectaculaires pour accompagner chaque instant de votre célébration. Pendant la soirée, nous sommes à l'écoute de vos demandes et de celles de vos invités, en adaptant notre playlist en temps réel pour créer une atmosphère en accord avec l'ambiance souhaitée. De la musique d'ambiance pendant le dîner à l'animation dynamique sur la piste de danse, notre sélection musicale variée et notre talent pour lire la foule garantissent une soirée animée et divertissante pour tous.<br/>En plus de notre prestation de DJ, nous offrons également des services supplémentaires pour enrichir votre soirée de mariage, tels que l'éclairage d'ambiance, la diffusion de vidéos ou de diaporamas, ainsi que des animations spéciales selon vos envies. Notre objectif est de faire de votre mariage un événement unique et personnalisé, reflétant votre amour et votre style, et laissant à vos invités des souvenirs inoubliables. Faites confiance à Happy Sound 54 pour créer une soirée de mariage sur mesure, à la hauteur de vos rêves les plus fous.
                </p>
                </article>
            );
        break;
        case 'soirees':
            titre = "Des soirées inoubliables";
            texte = (
                <article className="soirees-article__text">
                    <p>Faites briller votre entreprise avec des soirées d'entreprise inoubliables organisées par Happy Sound 54! </p>
                    <p>Que vous souhaitiez célébrer une réussite professionnelle, renforcer les liens au sein de votre équipe ou simplement remercier vos collaborateurs pour leur dévouement, nous sommes là pour créer une expérience mémorable qui reflète l'esprit et les valeurs de votre entreprise.
                    <br/>Nos soirées d'entreprise sont conçues sur mesure pour répondre à vos objectifs et vos besoins spécifiques. Que vous préfériez une soirée élégante et sophistiquée dans un lieu prestigieux, une soirée décontractée et conviviale dans un cadre plus informel, ou une combinaison des deux, nous avons l'expertise et les ressources pour réaliser votre vision.
                    <br/>En tant que spécialistes de l'animation d'événements, nous mettons à votre disposition notre talent de DJ, notre équipement de pointe et notre vaste sélection musicale pour créer une ambiance festive et dynamique qui ravira vos invités. De plus, nous proposons une gamme d'animations interactives et d'activités de team building pour stimuler l'esprit d'équipe et renforcer les relations professionnelles.</p>
                    <p>Nos soirées d'entreprise sont également l'occasion parfaite de mettre en avant votre marque et de laisser une impression durable sur vos invités. Nous pouvons personnaliser chaque aspect de l'événement, de la décoration aux éléments visuels, en intégrant subtilement votre identité d'entreprise pour une cohérence totale. <br/>Confiez l'organisation de votre prochaine soirée d'entreprise à Happy Sound 54 et laissez-nous créer un événement sur mesure qui inspirera, divertira et laissera une impression durable sur vos invités. Contactez-nous dès aujourd'hui pour discuter de vos besoins et laissez-nous faire de votre soirée d'entreprise un succès retentissant.</p>
                </article>
            );
        break;
        case 'evenements':
            titre = "Votre évènement d'entreprise réussi";
            texte = (
                <article className="evenements-article__text">
                    <p>Faites briller votre entreprise avec des soirées d'entreprise inoubliables organisées par Happy Sound 54! </p>
                    <p>Que vous souhaitiez célébrer une réussite professionnelle, renforcer les liens au sein de votre équipe ou simplement remercier vos collaborateurs pour leur dévouement, nous sommes là pour créer une expérience mémorable qui reflète l'esprit et les valeurs de votre entreprise.
                    <br/>Nos soirées d'entreprise sont conçues sur mesure pour répondre à vos objectifs et vos besoins spécifiques. Que vous préfériez une soirée élégante et sophistiquée dans un lieu prestigieux, une soirée décontractée et conviviale dans un cadre plus informel, ou une combinaison des deux, nous avons l'expertise et les ressources pour réaliser votre vision.
                    <br/>En tant que spécialistes de l'animation d'événements, nous mettons à votre disposition notre talent de DJ, notre équipement de pointe et notre vaste sélection musicale pour créer une ambiance festive et dynamique qui ravira vos invités. De plus, nous proposons une gamme d'animations interactives et d'activités de team building pour stimuler l'esprit d'équipe et renforcer les relations professionnelles.</p>
                    <p>Nos soirées d'entreprise sont également l'occasion parfaite de mettre en avant votre marque et de laisser une impression durable sur vos invités. Nous pouvons personnaliser chaque aspect de l'événement, de la décoration aux éléments visuels, en intégrant subtilement votre identité d'entreprise pour une cohérence totale. <br/>Confiez l'organisation de votre prochaine soirée d'entreprise à Happy Sound 54 et laissez-nous créer un événement sur mesure qui inspirera, divertira et laissera une impression durable sur vos invités. Contactez-nous dès aujourd'hui pour discuter de vos besoins et laissez-nous faire de votre soirée d'entreprise un succès retentissant.</p>
                </article>
            );
        break;
        default:
            titre = "Bienvenue chez Happy Sound 54";
            texte = (
                <article className="default-article__text">
                <p>Bienvenue sur notre site. Découvrez nos services pour rendre vos événements inoubliables.</p>
                {/* Le reste du contenu par défaut */}
                </article>
            );
  }

  return (
    <main className={type}>
        <Section className={type} titre={titre}>
            {texte}
        </Section>
    </main>
  );
}

export default Page;
