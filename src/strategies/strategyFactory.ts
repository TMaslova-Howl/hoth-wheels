import { fetchStarships } from "./starshipStrategy";
import {fetchCharacters} from "./characterStrategy.ts";

type Role = "customer" | "colleague";

// Define the type of the strategy function
type StrategyFunction = () => Promise<{ name: string; image: string }[]>;

export const strategyFactory = (role: Role): StrategyFunction => {
    switch (role) {
        case "customer":
            return fetchCharacters;
        case "colleague":
            return fetchStarships;
        default:
            throw new Error(`Invalid role: ${role}`);
    }
};