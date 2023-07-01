import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import getUrlParams from "../helpers/getUrlParams";
import { useRef, useState } from "react";

const FilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let timeoutId = useRef();

  const handleChange = e => {
    timeoutId.current = setTimeout(async () => {
      clearTimeout(timeoutId.current);
      const value = e.target.value;
      setSearchParams(getUrlParams("nameStartsWith", value, searchParams, "page"));
    }, 500);
  };

  return (
    <Grid container alignItems="stretch" mb="30px" spacing={2}>
      <Grid item xs={12} md={6} xl={4}>
        <TextField fullWidth label="Search" variant="outlined" onChange={handleChange} />
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
