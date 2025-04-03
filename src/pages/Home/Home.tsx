import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../../../core/actions/characters/getCharacters";
import { CharacterRespone } from "../../../infrastructure/interface/Characters";
import { CustomCard } from "../../components/Card/CustomCard";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./Home.css";
import { getCharactersByPage } from "../../../core/actions/characters/getCharactersByPage";

export default function Home() {
  const [data, setData] = useState<CharacterRespone>();
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCharacters();
        if (data) {
          setData(data);
          setPages(data.info.pages);
          console.log(data);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);

  const handlePagination = async(event,page) => {
    console.log(page);
    try {
      const dataPage = await getCharactersByPage(page);
      if(dataPage) {
        setData(dataPage);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <div className="container">
      {data ? (
        data?.results.map((item) => (
          <CustomCard
            key={item.id}
            image={item.image}
            name={item.name}
            id={item.id}
          />
        ))
      ) : (
        <div>Cargando Datos</div>
      )}
      <Stack className="stackContainer">
        <Pagination count={pages} variant="outlined" color="primary" onChange={handlePagination}/>
      </Stack>
    </div>
  );
}
