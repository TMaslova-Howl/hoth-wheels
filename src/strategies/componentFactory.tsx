
import React from "react";

interface DataItem {
    name: string;
    image: string;
}

interface GridProps {
    data: DataItem[];
}

const CharacterGrid: React.FC<GridProps> = ({ data }) => (
    <div className="card-grid">
        {data.map((item, index) => (
            <div className="card" key={index}>
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
            </div>
        ))}
    </div>
);

const StarshipGrid: React.FC<GridProps> = ({ data }) => (
    <div className="card-grid">
        {data.map((item, index) => (
            <div className="card" key={index}>
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
            </div>
        ))}
    </div>
);

export const componentFactory = (role: "customer" | "colleague", data: DataItem[]) => {
    switch (role) {
        case "customer":
            return <CharacterGrid data={data} />;
        case "colleague":
            return <StarshipGrid data={data} />;
        default:
            throw new Error(`No component found for role: ${role}`);
    }
};