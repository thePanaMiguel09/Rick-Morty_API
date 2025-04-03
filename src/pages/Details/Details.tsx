import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { CharacterID } from "../../../infrastructure/interface/CharacerID";
import { getCharacterID } from "../../../core/actions/characters/getCharacterByID";

import "./Details.css";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

export const Details = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterID>();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await getCharacterID(`${id}`);
        if (data) {
          setCharacter(data);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchCharacter();
  }, []);

  return (
    <div className="details">
      {character ? (
         <Card sx={{ maxWidth: 345 }}>
         <CardActionArea>
           <CardMedia
             component="img"
             image={character.image}
             alt="green iguana"
           />
           <CardContent>
            <Typography gutterBottom variant="h6">Name</Typography>
             <Typography gutterBottom variant="caption" component="div">
               {character.name}
             </Typography>
             <Typography gutterBottom variant="h6">Gender</Typography>
             <Typography gutterBottom variant="caption" component="div">
               {character.gender}
             </Typography>
             <Typography gutterBottom variant="h6">Origin</Typography>
             <Typography gutterBottom variant="caption" component="div">
               {character.origin.name}
             </Typography>
             <Typography gutterBottom variant="h6">Specie</Typography>
             <Typography gutterBottom variant="caption" component="div">
               {character.species}
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
         </CardActions>
       </Card>
      ) : (
        <div>
          <h1>NO DATA</h1>
        </div>
      )}
    </div>
  );
};
