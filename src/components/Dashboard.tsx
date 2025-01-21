import React, { useEffect, useState } from "react";
import { strategyFactory } from "../strategies/strategyFactory";
import { componentFactory } from "../strategies/componentFactory";

interface DashboardProps {
    role: "customer" | "colleague";
}

interface DataItem {
    name: string;
    image: string;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const strategy = strategyFactory(role);
            const result = await strategy();
            setData(result);
            setLoading(false);
        };

        fetchData();
    }, [role]);

    return (
        <div className="container">
            {loading ? (
                <p className="loading">Loading...</p>
            ) : (
                componentFactory(role, data)
            )}
        </div>
    );
};

export default Dashboard;