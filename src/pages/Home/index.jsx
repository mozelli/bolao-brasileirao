import Match from '../../components/Match';

import styles from './home.module.scss';

const Home = () => {
  const matches = [
    {id: 1, host: "Vasco", visitor: "Grêmio"},
    {id: 2, host: "CRB", visitor: "Cruzeiro"}
  ]
  return (
    <div className={ styles.home }>
      <h2>Campeonato Brasileiro <br />Série B</h2>
      <h3>Escolha a partida</h3>

      <h4>Amanhã - 02/06</h4>
      <div className={ styles.matches }>
        {
          matches.map((match, index) => {
            return (
              <Match key={index} host={ match.host } visitor={ match.visitor } id={ match.id }  />    
            )
          })
        }
      </div>
    </div>
  );
}

export default Home;