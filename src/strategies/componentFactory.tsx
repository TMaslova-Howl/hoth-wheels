import React from "react";

interface DataItem {
    name: string;
    image: string;
}

interface ComponentFactoryProps {
    data: DataItem[];
}

const CustomerComponent: React.FC<ComponentFactoryProps> = ({ data }) => (
    <div>
        <h1>Characters</h1>
        <div className="card-grid">
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
);

const ColleagueComponent: React.FC<ComponentFactoryProps> = ({ data }) => (
    <div>
        <h1>Starships</h1>
        <div className="card-grid">
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
);

export const componentFactory = (
    role: "customer" | "colleague",
    data: DataItem[]
): React.ReactElement => {
    switch (role) {
        case "customer":
            return <CustomerComponent data={data} />;
        case "colleague":
            return <ColleagueComponent data={data} />;
        default:
            throw new Error(`No component found for role: ${role}`);
    }
};