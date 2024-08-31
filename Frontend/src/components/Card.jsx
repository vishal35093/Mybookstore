// import React from 'react';
import PropTypes from 'prop-types';

function Card({ item }) {
    return (
        <div className='mt-4 my-3 p-3 '>
            <div className='card w-92 bg-base-100 shadow-xl hover:scale-105 duration-300 dark:bg-slate-800 dark:text-white dark:border-slate-700'>
                <figure>
                    <img
                        src={item.image}
                        alt={item.name} // Descriptive alt text is good
                        className='w-full h-auto' // Ensure the image scales well
                    />
                </figure>
                <div className='card-body'>
                    <h2 className='card-title'>
                        {item.name}
                        <div className='badge badge-secondary'>{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className='card-actions justify-between'>
                        <div className='badge badge-outline'>${item.price}</div>
                        <div className='cursor-pointer badge badge-outline hover:bg-pink-500 px-2 py-1 rounded-full border-4 duration-300'>
                            Buy Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
Card.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Card;
