import React from 'react';
import style from './AssociationFunctions.module.css';

const AssociationFunctions = () => {
  const functions = [
    'Oferecer suporte psicológico às famílias.',
    'Promover inclusão social e educacional.',
    'Realizar palestras e workshops sobre TEA.',
    'Apoiar o desenvolvimento de habilidades dos indivíduos com TEA.',
  ];

  return (
    <section className={style.functions}>
        <h2>O que fazemos</h2>
        <ul className={style.functionsList}>
        {functions.map((func, index) => (
            <li key={index}>{func}</li>
        ))}
        </ul>
    </section>
  );
};

export default AssociationFunctions;