import { Link } from 'react-router-dom';

import { cleanTeamImageName } from '../../libs/sanitizer';
import styles from './bet.module.scss';

const Bet = () => {
  const match = {
    id: 1, 
    host: "Vasco", 
    visitor: "Grêmio",
    date: "02/06/2022",
    time: "20:00 (horário de Brasília)",
    stadium: "Estádio Vasco da Gama"
  }

  const hostImageNameSanitized = cleanTeamImageName(match.host);
  const visitorImageNameSanitized = cleanTeamImageName(match.visitor);

  return (
    <div className={ styles.bet }>
      <div className={ styles.match }>
        <img 
          src={ `/src/images/teams/${hostImageNameSanitized}.png` } 
          alt={ match.host } 
        /> 
        { match.host } x { match.visitor } 
        <img 
          src={ `/src/images/teams/${visitorImageNameSanitized}.png` } 
          alt={ match.visitor } 
        />
      </div>
      <div className={ styles.info }>
        <p className={ styles.description }>
          Jogo pela 10° rodada do Campeonato Brasileiro da série B.
        </p>
        <p><strong>Estádio:</strong> { match.stadium }</p>
        <p><strong>Data:</strong> { match.date }</p>
        <p><strong>Horário:</strong> { match.time }</p>
      </div>
      <div className={ styles.guess }>
        <h2>Qual o seu placar?</h2>
        <div className={ styles.match }>
          <img 
            src={ `/src/images/teams/${hostImageNameSanitized}.png` } 
            alt={ match.host } 
          /> 
          <span className={ styles.teamName }>{ match.host }</span>
          <input type="number" /> 
          <span className={ styles.teamName }> x </span> 
          <input type="number" /> 
          <span className={ styles.teamName }>{ match.visitor } </span>
          <img 
            src={ `/src/images/teams/${visitorImageNameSanitized}.png` } 
            alt={ match.visitor } 
          />
        </div>
      </div>
      <Link to={"/bet/confirmation"}>
        <button type='button'>Apostar!</button>
      </Link>
    </div>
  );
}

export default Bet;