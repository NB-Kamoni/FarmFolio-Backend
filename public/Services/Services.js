import React, { useEffect, useState } from 'react';
import Veterinarians from './Veterinarians';
import useVeterinarianSearch from './useVeterinarianSearch';

function Services() {
    const [veterinarianData, setVeterinariansData] = useState([]);
    const { filteredData, handleSearchInputChange } = useVeterinarianSearch([]);

    useEffect(() => {
        fetchVeterinarians();
    }, []);

    async function fetchVeterinarians() {
        try {
            const response = await fetch('http://localhost:4000/veterinarians');
            const data = await response.json();
            setVeterinariansData(data);
        } catch (error) {
            console.error('Error fetching veterinarians:', error);
        }
    }

    return (
        <div>
            <h2>Veterinary Services</h2>
            <div>
            <p>Our provided veterinarians are accredited professionals who offer quality services. We recommend them for all your veterinary needs.</p>
           
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Search by specialization..."
                    onChange={(e) => handleSearchInputChange(e.target.value)}
                />
            </div>
            <Veterinarians veterinarians={filteredData} />
        </div>
    );
}

export default Services;
