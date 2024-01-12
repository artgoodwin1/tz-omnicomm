import React, { useEffect, useState, useDeferredValue } from "react";
import { useDebounce } from "../utility/debounce";
import { getUniversities } from "../service/getUniversities";
import Table from "./Table";
import Pagination from "./Pagination";



const App = () => {

    const [value, setValue] = useState("Russian Federation");
    const [universities, setUniversities] = useState([]);
    const debouncedSearch = useDebounce(value, 500);
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 10;


    useEffect(
        () => {
            if (debouncedSearch) {
                getUniversities(debouncedSearch).then((results) => {
                    setUniversities(results);
                });
            } else {
                setUniversities([]);
            }
        },
        [debouncedSearch]
    );

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const start = itemsPerPage * (activePage - 1);
    const end = start + itemsPerPage;
    const visibleUniversities = universities.slice(start, end);

    return (
        <main>
            <label htmlFor="#search">Поиск</label>
            <br />
            <input
                id="search"
                onChange={(e) => setValue(e.target.value)}
                type="string"
                value={value}
            />
            <Table universities={visibleUniversities} />
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={universities.length}
                onPageChange={handlePageChange}
            />
        </main>
    );
};

export default App;
