import '../styles/globals.css'
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

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
        expires={150}
        debug
        enableDeclineButton
        flipButtons
        onAccept={(acceptedByScrolling) => {
          // console.log({acceptedByScrolling})
          // console.log({cookieValue: getCookieConsentValue()})
          if (acceptedByScrolling) {
            alert("Accept was triggered by user scrolling");
          } else {
            alert("Accept was triggered by clicking the Accept button");
          }
        }}
        onDecline={() => {
          alert("nope!");
        }}
      >This website uses cookies to enhance the user experience.</CookieConsent>
    </>)
}

export default MyApp
