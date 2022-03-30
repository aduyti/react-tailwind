import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Plan = ({ plan }) => {
    const { name, price } = plan;
    return (
        <div className="bg-white p-4 rounded-lg">
            <h2 className="text-2xl bg-slate-400 rounded font-bold py-4">
                {name}
            </h2>
            <p className="text-4xl font-bold py-2">${price}<span className="text-xl text-gray-400 font-bold">/mo</span></p>
            <div className="p-2">
                <h3 className="text-xl text-left font-semibold">Benefits:</h3>
                <p className="bg-lime-300 text-gray-700 p-1 rounded text-left flex items-center"><CheckCircleIcon className="w-4 h-4 text-emerald-500 mr-2"></CheckCircleIcon>Awesome</p>
                <p className="bg-lime-300 text-gray-700 p-1 rounded text-left flex items-center"><CheckCircleIcon className="w-4 h-4 text-emerald-500 mr-2"></CheckCircleIcon>Awesome</p>
                <p className="bg-lime-300 text-gray-700 p-1 rounded text-left flex items-center"><CheckCircleIcon className="w-4 h-4 text-emerald-500 mr-2"></CheckCircleIcon>Awesome</p>
                <p className="bg-lime-300 text-gray-700 p-1 rounded text-left flex items-center"><CheckCircleIcon className="w-4 h-4 text-emerald-500 mr-2"></CheckCircleIcon>Awesome</p>
            </div>
        </div>
    );
};

export default Plan;