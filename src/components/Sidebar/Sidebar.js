import React from 'react';

const Sidebar = ({cart}) => {
    const total = cart.reduce((acc, curr) => acc + curr.salary, 0)

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    return (
        <aside className="sidebar col-md-4 ps-5">
            <h4 className="lead">Players in cart ({cart.length})</h4>
            <p> <strong>Name & Salary</strong></p>
            <ul className="list-group my-4">
                {
                    cart.map((player)=><li 
                    key={player.id} 
                    className="list-group-item"
                    >{player.name} - ${player.salary} million
                    </li>)
                }
            
            </ul>
            <div className="d-grid">
                <button className="btn btn-outline-success">Checkout - ${formatNumber(total)} million </button>
            </div>
        </aside>
    );
};

export default Sidebar;