import {SwapiResponse} from "../types/responseTypes.ts";

interface Starship {
    name: string;
    image: string;
}

export const fetchStarships = async (): Promise<Starship[]> => {
    const response = await fetch("https://swapi.dev/api/starships/");
    const result: SwapiResponse<{ name: string }> = await response.json();

    return result.results.map((starship) => ({
        name: starship.name,
        image: `https://via.placeholder.com/150?text=${starship.name}`,
    }));
};