import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import styles from './mainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={ styles.mainLayout }>
     <Header />
     <Outlet />
    </div>
  );
}

export default MainLayout;