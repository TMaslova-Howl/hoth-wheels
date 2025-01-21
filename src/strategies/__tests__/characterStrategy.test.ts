import { fetchCharacters } from "../characterStrategy";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                results: [
                    { name: "Luke Skywalker" },
                    { name: "Darth Vader" },
                ],
            }),
    })
) as jest.Mock;

describe("fetchCharacters", () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mocks before each test
    });

    it("should fetch and transform character data correctly", async () => {
        const result = await fetchCharacters();

        expect(result).toEqual([
            {
                name: "Luke Skywalker",
                image: "https://via.placeholder.com/150?text=Luke%20Skywalker",
            },
            {
                name: "Darth Vader",
                image: "https://via.placeholder.com/150?text=Darth%20Vader",
            },
        ]);

        expect(fetch).toHaveBeenCalledWith("https://swapi.dev/api/people/");
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("should handle an empty response gracefully", async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: () => Promise.resolve({ results: [] }),
        });

        const result = await fetchCharacters();

        expect(result).toEqual([]);
        expect(fetch).toHaveBeenCalledWith("https://swapi.dev/api/people/");
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});