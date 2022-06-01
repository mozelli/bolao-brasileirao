import { useState } from 'react';
import styles from './header.module.scss';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuStyle, setMenuStyle] = useState(`${styles.menu}`);

  function showHiddenMenu() {
    if(!showMenu) {
      setMenuStyle(`${styles.menu} ${styles.show}`);
    } else {
      setMenuStyle(`${styles.menu}`);
    }
    setShowMenu(!showMenu);
  }

  return (
    <header className={ styles.header }>
      <div className={ styles.brand }>
        <div className={ styles.menuButton }>
          <button type='button' onClick={ () => showHiddenMenu() }>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
          </button>
        </div>
        <h1>Bolão</h1>
      </div>
      <div className={ menuStyle }>
        <ul>
          <li className={ styles.close }>
            <button type="button" onClick={() => showHiddenMenu()}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z"/></svg>
            </button>
          </li>
          <li>Página inicial</li>
          <li>Minha conta</li>
          <li>Sair</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;