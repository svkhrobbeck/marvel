import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function RecipeReviewCard({ id, name, thumbnail }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: { sm: "800px", md: "600px", xl: "400px" }, width: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia sx={{ height: { sm: "350px", md: "300px" } }} image={thumbnail.path + "/landscape_incredible.jpg"} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/characters/${id}`)}>
          Back To Home
        </Button>
      </CardActions>
    </Card>
  );
}
