import * as React from 'react';
import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

const CheersList = () => {
    const [cheers, setCheers] = useState([]);
    const cheerUrl = 'http://localhost:3000/api/v1/cheers';


   const fetchCheers = () => {
        fetch(cheerUrl)
            .then((response) => response.json())
            .then((data) => setCheers(data))
            console.log(cheers);
    };

    useEffect(() => {
        fetchCheers();
    }, []);

return (
    <div className='row'>
        <div className='col-lg-10 mx-auto'>
            {cheers.map((cheer) => <h1 key={cheer.id} cheer={cheer} />
            )}
        </div>
    </div>
)
}

export default CheersList
