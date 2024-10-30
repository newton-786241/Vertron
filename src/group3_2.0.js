import React from 'react';
import grpbg2 from './Rectangle 6503.png'; // Adjust path as necessary

function Tit() {
    const stylebg = {
        backgroundImage: `url(${grpbg2})`,
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '1px solid red', // For testing visibility
    };

    return <div style={stylebg}>
        <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '20%' }}>Hello world!</h1>
    </div>;
}

export default Tit;
