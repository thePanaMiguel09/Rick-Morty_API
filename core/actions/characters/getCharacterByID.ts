import { CharacterID } from "../../../infrastructure/interface/CharacerID";
import { api } from "../../api/api";

export const getCharacterID = async (id) => {
  try {
    const { data } = await api.get<CharacterID>(`/character/${id}`);
    if (data) {
      return data;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};
