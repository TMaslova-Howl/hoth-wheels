import {SwapiResponse} from "../types/responseTypes.ts";

interface Character {
    name: string;
    image: string;
}

export const fetchCharacters = async (): Promise<Character[]> => {
    const response = await fetch("https://swapi.dev/api/people/");
    const result: SwapiResponse<{ name: string }> = await response.json();

    return result.results.map((character) => ({
        name: character.name,
        image: `https://via.placeholder.com/150?text=${character.name}`,
    }));
};