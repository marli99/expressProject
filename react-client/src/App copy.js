import React, { useState, useEffect } from 'react';


function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
        };

        async function getData() {
            const response = await fetch('http://localhost:8000/api/classes', requestOptions);
            const result = await response.json();
            setData(result);
        };

        getData();
    }, []);

    console.log(data);

    return (
        <div className="App">
            <p>
                {data.toString()}
            </p>
            Hello
        </div>
    );
}

export default App;
