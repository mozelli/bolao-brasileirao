import styles from './splash.module.scss';
import image from '../../images/splash-no-bg.png';
import googleLogo from '../../images/google-logo.svg';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className={ styles.splash }>
      <img src={ image } alt="Bolão Brasileirão!" />
      <div className={ styles.formLogin }>
        <form>
          <input type="text" className="form-control" placeholder='E-mail' />
          <input type="password" className='form-control' placeholder='Senha' />
          <Link to={"home"}>
            <button type="submit">Entrar!</button>
          </Link>
          <p><a href="/">Esqueci minha senha</a></p>
          <p>Não tem cadastro ainda? <a href='/'><strong>Clique aqui!</strong></a></p>

        </form>
      </div>
      <hr />
      <div className={ styles.socialMediaButton }>
        <a className={ styles.button }>
          Entrar com Facebook
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4123c7" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
        </a>
      </div>
      <div className={ styles.socialMediaButton }>
        <a className={ styles.button }>
          Entrar com Google
          <img src={ googleLogo } alt="Google" />
        </a>
      </div> 
    </div>
  );
}

export default Splash;