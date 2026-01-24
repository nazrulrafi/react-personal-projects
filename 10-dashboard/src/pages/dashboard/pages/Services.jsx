import React from "react";
import { services } from "../../../data/serviceData.js";
import ServiceCard from "../../../components/service/ServiceCard.jsx";

export default function Services() {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-xl font-semibold">Services (Admin)</h2>

            {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
    );
}
