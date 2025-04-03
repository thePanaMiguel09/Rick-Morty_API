import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { CharacterID } from "../../../infrastructure/interface/CharacerID";
import { getCharacterID } from "../../../core/actions/characters/getCharacterByID";

import "./Details.css";

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
        <div className="characterContainer">
          <div className="containerImage">
            <img src={character.image} alt="Character" className="image" />
          </div>
          <div className="containerInfo">
            <div>
              <strong>Name</strong>
              <p>{character.name}</p>
            </div>
            <div>
              <strong>Gender</strong>
              <p>{character.gender}</p>
            </div>
            <div>
            <strong>Origin</strong>
            <p>{character.origin.name}</p>
            </div>

            <div>
              <strong>Status</strong>
              <p>{character.status}</p>
            </div>
            <div>
              <strong>Specie</strong>
              <p>{character.species}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>NO DATA</h1>
        </div>
      )}
    </div>
  );
};
