// import  { useEffect } from 'react';

// function FeedFacebook() {
//   useEffect(() => {
//     // Charge le SDK Facebook une fois que le composant est monté
//     window.fbAsyncInit = function() {
//       window.FB.init({
//         xfbml            : true,
//         version          : 'v19.0'
//       });
//     };

//     (function(d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s); js.id = id;
//       js.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v19.0&appId=2177823652609908';
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
//   }, []);

//   return (
//     <div>
//       <div id="fb-root"></div>
//       <div className="fb-page" 
//         data-href="https://www.facebook.com/virginie.lachouette" 
//         data-tabs="timeline" 
//         data-width="350" 
//         data-height="250" 
//         data-small-header="false" 
//         data-adapt-container-width="true" 
//         data-hide-cover="false" 
//         data-show-facepile="true">
//       </div>
//     </div>
//   );
// }

// export default FeedFacebook;
