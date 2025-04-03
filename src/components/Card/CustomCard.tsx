import React from "react";
import "./CustomCard.css";
import { useNavigate } from "react-router-dom";

interface Props {
  name?: string;
  image?: string;
  id: number;
}

export const CustomCard = ({ image, name, id }: Props) => {
  const navigate = useNavigate();
  const toDetails = (id: number) => {
    navigate("/details/" + id);
  };

  return (
    <div className="card">
      <div className="containerImage">
        <img src={image} alt="Image Character" className="image" />
      </div>
      <div className="info">
        <div>
          <strong>{name}</strong>
        </div>
      </div>
      <button className="button" onClick={() => toDetails(id)}>
        <strong>Ver Más</strong>
      </button>
    </div>
  );
};
