import styles from './splash.module.scss';
import image from '../../images/splash-no-bg.png';

const Splash = () => {
  return (
    <div className={ styles.splash }>
      <img src={ image } alt="Bolão Brasileirão!" />
      <div className={ styles.formLogin }>
        <form>
          <input type="text" className="form-control" placeholder='E-mail' />
          <input type="password" className='form-control' placeholder='Senha' />
          <button type="submit">Entrar!</button>
          <p><a href="/">Esqueci minha senha</a></p>
          <p>Não tem cadastro ainda? <a href='/'><strong>Clique aqui!</strong></a></p>

        </form>
        <hr />
        <button type='button'>Entrar com Facebook</button>
        <button type='button'>Entrar com Google</button>
      </div>
    </div>
  );
}

export default Splash;