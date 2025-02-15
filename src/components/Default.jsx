import React, { useState } from 'react';

const Default = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>DIPLOMADO FULL STACK - FRONTEND CON REACT JS</h1>
            <h2 >Oscar Herbas Velasco</h2>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
            </div>
        </div>
    );
}

export default Default;
