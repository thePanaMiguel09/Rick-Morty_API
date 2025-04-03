import { CharacterRespone } from "../../../infrastructure/interface/Characters";
import { api } from "../../api/api";

export const getCharactersByPage = async (page: number) => {
  try {
    const { data } = await api.get<CharacterRespone>("/character/", {
      params: {
        page: page,
      },
    });
    if (data) {
      return data;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};
