import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCharacters = async params => {
  const { data } = await axios.get("characters", { params });

  return data?.data;
};

const fetchCharacter = async id => {
  const { data } = await axios.get(`characters/${id}`);

  return data.data.results[0];
};

export const useCharacters = params => {
  return useQuery({ queryKey: ["characters", params], queryFn: () => fetchCharacters(params) });
};

export const useCharacter = id => {
  return useQuery({ queryKey: ["character", id], queryFn: () => fetchCharacter(id) });
};
