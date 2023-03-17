import { API_URL } from "@env";

export async function getPokemonsApi() {
  try {
    const response = await fetch(`${API_URL}/pokemon?limit=20&offset=0`);
    const result = await response.json();
    return result.results;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getPokemonByUrlApi(url: string) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
