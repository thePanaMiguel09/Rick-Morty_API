import React from "react";
import "./CustomCard.css";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

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
    <Card>
      <CardActionArea>
        <CardMedia  
          component="img"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button type="button" size="small" color="primary" onClick={()=> toDetails(id)}>
          More
        </Button>
      </CardActions>
    </Card>
  );
};
