import { useState, useEffect } from 'react';

function useVeterinarianSearch(initialData) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(initialData);

    useEffect(() => {
        filterData();
    }, [searchQuery, initialData]);

    function filterData() {
        const filtered = initialData.filter(vet => {
            return vet.specializations.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));
        });
        setFilteredData(filtered);
    }

    function handleSearchInputChange(query) {
        setSearchQuery(query);
    }

    return { filteredData, handleSearchInputChange };
}

export default useVeterinarianSearch;
