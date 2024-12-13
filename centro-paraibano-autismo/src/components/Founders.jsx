import React from 'react'
import Alline from '../assets/Alline.jpeg'
import Assucena from '../assets/Assucena.jpeg'
import Emille from '../assets/Emille.jpeg'
import Isabel from '../assets/Isabel.jpeg'
import Larissa from '../assets/Larissa.jpeg'
import Lilian from '../assets/Lilian.jpeg'
import Myllene from '../assets/Myllene.jpeg'
import Patricia from '../assets/Patricia.jpeg'
import Rayanna from '../assets/Rayanna.jpeg'
import FounderCard from './FounderCard'
import style from './Founders.module.css'

const Founders = () => {

    const colaboradores = [
        {nome: 'Alline Sobral Silva da Costa', foto: Alline, description: 'Fonoaudióloga'},
        {nome: 'Assucena Macedo', foto: Assucena, description: `Fisioterapeuta neurofuncional`},
        {nome: 'Emille Thais Rodrigues da Silva', foto: Emille, description: 'Terapeuta Aba'},
        {nome: 'Isabel Medeiros da Silva Andrade', foto: Isabel, description: 'Psicopedagoga'},
        {nome: 'Larissa Cinthya', foto: Larissa, description: 'Psicoterapeuta TCC; Terapeuta ABA '},
        {nome: 'Lilian Ribeiro Alexandre', foto: Lilian, description: 'Terapeuta Ocupacional'},
        {nome: 'Myllene Martins Santos', foto: Myllene, description: 'Terapeuta ABA'},
        {nome: 'Patrícia  Ladislau', foto: Patricia, description: 'Pedagogia com especialização Psicopedagoga  e análise do comportamento  ABA'},
        {nome: 'Rayanna Luanna Ataide Lemos', foto: Rayanna, description: 'Terapeuta ABA'}
    ]

  return (
      <section className={style.founders}>
        <h2>Colaboradores</h2>
        <div className={style.foundersContainer}>
            {colaboradores.map(({ nome, description, foto }) => (
                <FounderCard
                    key={nome}
                    name={nome} 
                    description={description} 
                    image={foto} 
                />
            ))}
        </div>
      </section>
  )
}

export default Founders