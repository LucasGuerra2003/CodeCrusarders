import React from 'react';
import styles from './Carregando.module.css';
import CarregandoSVG from '../../img/icocarregando.svg'; // Corrija o caminho conforme necessário

function Carregando() {
  return (
    <div className={styles.Carregando_container}>
      <img className={styles.Carregando} src={CarregandoSVG} alt="Carregando" />
    </div>
  );
}

export default Carregando;
