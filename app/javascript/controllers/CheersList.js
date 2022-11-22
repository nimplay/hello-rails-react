import * as React from 'react';
import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

const CheersList = () => {
    const [cheers, setCheers] = useState([]);
    const cheerUrl = 'http://localhost:3000/api/v1/cheers';


   const fetchCheers = async () => {
        const response = await fetch(cheerUrl);
        const data = await response.json();
        console.log(data);
        setCheers(data);
    }

    useEffect(() => {
        fetchCheers();
        console.log(cheers);
    }, []);

return (
    <div className='row'>
        <div className='col-lg-10 mx-auto'>
            {cheers.map((cheer) => <h1 key={cheer.id}>{cheer.greeting}</h1>
            )}
        </div>
    </div>
)
}

export default CheersList
