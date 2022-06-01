import { cleanTeamImageName } from '../../libs/sanitizer';
import styles from './match.module.scss';

const Team = (props) => {
  const hostImageNameSanitized = cleanTeamImageName(props.host);
  const visitorImageNameSanitized = cleanTeamImageName(props.visitor);

  return (
    <div className={ styles.team }>
      <ul>
        <a href={`/${props.id}`}>
          <li>
            <img 
              src={ `/src/images/teams/${hostImageNameSanitized}.png` } 
              alt={ props.host } 
            /> 
            { props.host } x { props.visitor } 
            <img src={ `/src/images/teams/${visitorImageNameSanitized}.png` } alt={ props.visitor } />
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Team;