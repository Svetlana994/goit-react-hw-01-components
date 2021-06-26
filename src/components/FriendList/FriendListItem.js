import PropTypes from 'prop-types';
import { RiEmotionLine, RiEyeOffLine } from 'react-icons/ri';
import defaultImg from './defaultavatar.jpeg';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar = defaultImg, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={s.status}>
        {isOnline ? (
          <RiEmotionLine color="green" />
        ) : (
          <RiEyeOffLine color="red" />
        )}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
