import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCharacters = async ({ limit, offset, nameStartsWith }) => {
  const { data } = await axios.get("characters", { params: { limit, offset, nameStartsWith } });

  return data?.data;
};

const fetchCharacter = async id => {
  const { data } = await axios.get(`characters/${id}`);

  return data.data.results[0];
};

export const useCharacters = ({ limit, offset, nameStartsWith }) => {
  return useQuery({ queryKey: ["characters"], queryFn: () => fetchCharacters({ limit, offset, nameStartsWith }) });
};

export const useCharacter = id => {
  return useQuery({ queryKey: ["character", id], queryFn: () => fetchCharacter(id) });
};
