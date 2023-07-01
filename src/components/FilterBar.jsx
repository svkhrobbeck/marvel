import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import getUrlParams from "../helpers/getUrlParams";

const FilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Grid container alignItems="stretch" mb="30px" spacing={2}>
      <Grid item xs={12} md={6} xl={4}>
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          value={searchParams.get("nameStartsWith") || ""}
          onChange={e => setSearchParams(getUrlParams("nameStartsWith", e.target.value, searchParams, "page"))}
        />
      </Grid>
      <Grid item xs={12} md={6} xl={2}>
        <FormControl fullWidth>
          <InputLabel id="list-sort">Sort By</InputLabel>
          <Select
            labelId="list-sort"
            value={searchParams.get("orderBy") || "name"}
            label="Sort By"
            onChange={e => setSearchParams(getUrlParams("orderBy", e.target.value, searchParams))}
          >
            <MenuItem value="name">A-Z</MenuItem>
            <MenuItem value="-name">Z-A</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
