import { CharacterCard } from "../../components";
import { useCharacters } from "./queries";
import { LinearProgress, Alert, Grid } from "@mui/material";

const Characters = () => {
  const { isError, isLoading, error, data } = useCharacters({ limit: 20, offset: 0 });

  if (isLoading) return <LinearProgress />;

  if (isError) return <Alert severity="error">{error.toString()}</Alert>;

  return (
    <Grid container py={"30px"} maxWidth={{ sm: "98%", lg: "95%" }} mx={"auto"} alignItems={"stretch"} spacing={2}>
      {data?.results.map(result => (
        <Grid key={result.id} item display={"flex"} xs={12} md={6} lg={4} xl={3}>
          <CharacterCard {...result} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Characters;
