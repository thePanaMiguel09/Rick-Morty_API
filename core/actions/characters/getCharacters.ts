import { CharacterRespone } from "../../../infrastructure/interface/Characters";
import { api } from "../../api/api";

export const getAllCharacters = async () => {
  try {
    const { data } = await api.get<CharacterRespone>("/character");

    if (data) {
      return data;
    }

    return null;
  } catch (error) {
    throw new Error(error)
  }
};
