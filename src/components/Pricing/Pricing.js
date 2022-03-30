import React from 'react';
import Plan from '../Plan/Plan';

const Pricing = () => {
    const options = [
        { id: 1, name: 'Free', price: 0 },
        { id: 2, name: 'Regular', price: 9.99 },
        { id: 3, name: 'Prium', price: 19.99 }
    ]
    return (
        <div className="bg-indigo-300 p-4 mt-8">
            <h1 className="text-6xl font-mono text-white">Best Deals</h1>
            <div className="m-8 grid md:grid-cols-3 gap-8">
                {
                    options.map(plan =>
                        <Plan plan={plan}
                            key={plan.id}></Plan>)
                }
            </div>
        </div>
    );
};

export default Pricing;