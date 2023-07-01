import { Alert, Grid, LinearProgress } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { CharacterCard } from ".";

const CardsList = ({ data, isLoading, isError, error }) => {
  const [searchParams] = useSearchParams();

  if (isLoading) return <LinearProgress />;

  if (isError) return <Alert severity="error">{error.toString()}</Alert>;

  return (
    <>
      <Grid container mb={"30px"} alignItems="stretch" spacing={2}>
        {data?.results?.map(result => (
          <Grid key={result.id} item display="flex" xs={12} md={6} lg={4} xl={3}>
            <CharacterCard {...result} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardsList;
