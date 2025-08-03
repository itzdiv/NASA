import { useState, useEffect } from 'react';
import './css/Apod.css';

function Apod() {
    const [nasa_data, set_nasa_data] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3002/apod')
            .then(response => response.json())
            .then(data => set_nasa_data(data))
            .catch(error => console.log('Error: ', error));
    }, []);

    if (!nasa_data) {
    return <div className="loading">Loading NASA APOD</div>;
}
return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div id="stars" />
        <div id="main-container" style={{ flex: 1 }}>
            <div id="title">{nasa_data.title}</div>
            <div
                id="image-container"
                style={{
                    backgroundImage: `url(${nasa_data.hdurl})`,
                    minHeight: '700px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>
            <div id="explanation">{nasa_data.explanation}</div>
        </div>
        <footer>
            <hr />
            <i className="fa fa-copyright" aria-hidden="true">{nasa_data.copyright}</i>
            Date Captured: {nasa_data.date}
        </footer>
    </div>
);
}

export default Apod;