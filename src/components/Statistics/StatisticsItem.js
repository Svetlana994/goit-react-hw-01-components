import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={s.item} style={{ backgroundColor: `${randomBgColor()}` }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

function randomBgColor() {
  return `rgb(${Math.floor(Math.random() * (255 - 0) + 0)},
    ${Math.floor(Math.random() * (255 - 0) + 0)},
   ${Math.floor(Math.random() * (255 - 0) + 0)})`;
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
