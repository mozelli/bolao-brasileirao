import { Outlet } from 'react-router-dom';
import styles from './mainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={ styles.mainLayout }>
     <h2>Header</h2>
     <Outlet />
    </div>
  );
}

export default MainLayout;