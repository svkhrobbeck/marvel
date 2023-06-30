import { Alert, Button, Card, CardActions, CardContent, CardMedia, Container, LinearProgress, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useCharacter } from "./queries";

const Character = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: character, error, isError, isLoading } = useCharacter(id);

  if (isLoading) return <LinearProgress />;

  if (isError) return <Alert severity="error">{error}</Alert>;

  return (
    <Container maxWidth="xl" sx={{ py: "30px" }}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia component="img" alt={character.name} height="540" image={character.thumbnail.path + "/landscape_incredible.jpg"} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {character.name}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {character.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate("/characters")}>
            Back To Home
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Character;
