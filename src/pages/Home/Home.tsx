import React, { useEffect, useState } from 'react'
import { getAllCharacters } from '../../../core/actions/characters/getCharacters';
import { CharacterRespone } from '../../../infrastructure/interface/Characters';
import { CustomCard } from '../../components/Card/CustomCard';

import './Home.css'

export default function Home() {
    const [data, setData] = useState<CharacterRespone>();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllCharacters();
          if (data) {
            setData(data);
            console.log(data)
          }
        } catch (error) {}
      };
      fetchData();
    }, []);
  
    return (
      <div className="container">
        {data ? (
          data?.results.map((item) => (
            <CustomCard
              key={item.id}
              image={item.image}
              gender={item.gender}
              name={item.name}
              spacie={item.species}
              id={item.id}
            />
          ))
        ) : (
          <div>Cargando Datos</div>
        )}
      </div>
    );
}
