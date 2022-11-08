import '../styles/globals.css'
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

function MyApp({ Component, pageProps }) {
  const cookies = new Cookies();

  useEffect(()=> {
    cookies.set('myCat', 'Pacman', { path: '/' });
  },[])

  // useEffect(()=> {
  //   console.log({cookieValue: getCookieConsentValue()})
  // },[])

  return(
    <>
      <Component {...pageProps} />
      <CookieConsent 
        location="bottom"
        buttonText="I am cool with that"
        declineButtonText='Nope'
        cookieName="myAwesomeCookie"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "14px" }}
        expires={365}  // in days
        debug   // for development purpose. cookie consent banner pops out in every refresh
        enableDeclineButton
        flipButtons
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            console.log("Accept was triggered by user scrolling");
          } else {
            console.log({cookieConsentvalue: cookies.get('myAwesomeCookie')}); 
            console.log("Accept was triggered by clicking the Accept button");
          }
        }}
        onDecline={() => {
          console.log('not setting any cookies')
          // alert("nope!");
        }}
      >This website uses cookies to enhance the user experience.</CookieConsent>
    </>)
}

export default MyApp
