import React from 'react';
import style from './FounderCard.module.css';

const FounderCard = ({ name, description, image }) => {
  return (
    <div className={style.founderCard}>
      <img src={image} alt={name} className={style.founderImage} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FounderCard;