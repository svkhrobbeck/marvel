import { useSearchParams } from "react-router-dom";
import { CharactersList, FilterBar } from "../../components";
import { PAGINATION_LIMIT } from "../../constants";
import { useCharacters } from "./queries";
import { Box, Pagination } from "@mui/material";
import getUrlParams from "../../helpers/getUrlParams";

const Characters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useCharacters({
    limit: PAGINATION_LIMIT,
    nameStartsWith: searchParams.get("nameStartsWith") || null,
    orderBy: searchParams.get("orderBy") || null,
    offset: PAGINATION_LIMIT * (!!searchParams.get("page") ? searchParams.get("page") - 1 : 0),
  });

  return (
    <Box py="30px" maxWidth={{ sm: "98%", lg: "95%" }} mx="auto">
      <FilterBar />
      <CharactersList {...data} />
      {!data.isLoading && (
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          size="medium"
          siblingCount={1}
          count={Math.floor((data?.data?.total || 0) / PAGINATION_LIMIT)}
          variant="outlined"
          shape="rounded"
          onChange={(e, page) => setSearchParams(getUrlParams("page", page, searchParams))}
          page={+searchParams.get("page") || 1}
        />
      )}
    </Box>
  );
};

export default Characters;
