import { Link } from 'react-router-dom';
import styles from './confirmation.module.scss';

const Confirmation = () => {
  return (
    <div className={ styles.confirmation }>
      <h2>Falta pouco!</h2>
      <h3>Por favor confirme as informações abaixo sobre a aposta:</h3>
      <div className={ styles.info }>
        <p><strong>Jogo: </strong>Vasco x Grêmio</p>
        <p><strong>Ocasião: </strong> 10° rodada da série B do Campeonato Brasileiro de 2022.</p>
        <p><strong>Local do jogo: </strong>Estádio Vasco da Gama.</p>
        <p><strong>Data do jogo: </strong> dia 02 de junho de 2022.</p>
        <p><strong>Horário do jogo: </strong> 20:00 (horário de Brasília).</p>
        <p><strong>Placar do jogo: </strong> 1 (um) para o Vasco e 0 (zero) para o Grêmio.</p>
      </div>
      <div className={ styles.acceptTermsAndConfirm }>
        <input type="checkbox" id='confirmCheck' />
        <label 
          htmlFor="confirmCheck">
            Confirmo as informações acima e aceito os temros de uso do aplicativo <strong>Bolão - Brasileirão</strong>.
        </label>
      </div>
      <p className={ styles.terms }>
        <Link to={"/"}>Ler termos de uso.</Link>
      </p>
      <button type="button">Confirmar e apostar!</button>
    </div>
  );
}

export default Confirmation;