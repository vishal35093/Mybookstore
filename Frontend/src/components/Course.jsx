// import React from 'react';
import Card from '../components/Card'; // Ensure the Card component is correctly imported
import { Link } from 'react-router-dom'

export default function Course() {
  const list = [
    { id: 1, title: 'Course 1', description: 'This is the first course.' },
    { id: 2, title: 'Course 2', description: 'This is the second course.' },
    // Add more items as needed
  ];

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            We are delighted to have you{" "}
            <span className='text-pink-500'>Here! :</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur odit vitae aliquid ad ipsum eum dolore suscipit modi, dolorem quidem nostrum, itaque molestiae amet aspernatur est expedita delectus? Esse ullam at minima exercitationem eveniet.
          </p>
          <Link to="/">
            <button className='bg-pink-500 text-white py-2 px-4 mt-12 rounded-md hover:bg-pink-600 duration-300'>Back</button>
          </Link>

        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {
            list.map((item) => (
              <Card key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}
