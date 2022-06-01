import styles from './home.module.scss';
import cru from '../../images/teams/cruzeiro.png';
import crb from '../../images/teams/crb.png';
import vas from '../../images/teams/vasco.png';
import gre from '../../images/teams/gremio.png';

const Home = () => {
  return (
    <div className={ styles.home }>
      <h2>Campeonato Brasileiro <br />Série B</h2>
      <h3>Escolha a partida</h3>

      <h4>Amanhã - 02/06</h4>
      <div className={ styles.matches }>
        <ul>
          <a href="/">
            <li>
              <img src={ vas } alt="Vasco" /> Vasco x Grêmio <img src={ gre } alt="Grêmio" />
            </li>
          </a>
        </ul>
      </div>
      <h4>Sexta - 03/06</h4>
      <div className={ styles.matches }>
        <ul>
          <a href="/">
            <li>
              <img src={ crb } alt="CRB" /> CRB x Cruzeiro <img src={ cru } alt="Cruzeiro" />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Home;