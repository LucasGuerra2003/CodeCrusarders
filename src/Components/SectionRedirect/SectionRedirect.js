import React, { useEffect } from 'react';
import styles from './SectionRedirect.module.scss';
import './Splash.css';
import logo from '../../img/diamond.png';

function SectionRedirect() {

 useEffect(() => {
    const logoSpans = document.querySelectorAll('.marca');
    const marcaHeader = document.querySelector('.marcaheader');
    const intro = document.querySelector('.intro');

    setTimeout(() => {
      logoSpans.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add('active');
        }, (idx + 1) * 400);
      });
    });

    setTimeout(() => {
      logoSpans.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = '-100vh';
    }, 2300);
 }, []);

 const state = {
   signupPath: '/signup',
   signinPath: '/signin',
 };

 const handleSignupClick = () => {
    window.location.href = state.signupPath;
 };

 const handleSigninClick = () => {
    window.location.href = state.signinPath;
 };

 return (
    <section className={styles.sectionRedirect}>   
      <div className={styles.baseContainer}>
        <div className={styles.contentContainer}>
          <h2>O que deseja?</h2>
          <button className={styles.buttonSignup} onClick={handleSignupClick}>Criar Conta</button>
          <button className={styles.buttonSignin} onClick={handleSigninClick}>Entrar</button>
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt='Logo' className={styles.logo}/>
          <p>Sua Marca</p>
        </div>
      </div>

      <div className="intro">
        
        <h1 className="marcaheader">
            <img src={logo} alt='Logo' className="marca intrologo"/> 
          <span className="marca">Sua</span><span className="marca">Marca</span>
        </h1>
      </div>                  
    </section>       
 );
}
 
export default SectionRedirect;