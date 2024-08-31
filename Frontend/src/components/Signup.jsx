// import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle signup logic here
  };

  return (
    <>
      <div id="my_modal_3" className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">Signup!</h3>
              
              <div className="mt-4 space-y-2">
                <span>Name</span><br />
                <input 
                  type="text" 
                  placeholder="Enter your Name" 
                  className="w-80 px-3 py-1 bordered-md outline-none"
                  {...register("name", { required: true })}
                />
                {errors.name && <span className="text-sm text-red-500">This field is required</span>}
              </div>

              <div className="mt-4 space-y-2">
                <span>Email</span><br />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-80 px-3 py-1 bordered-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>

              <div className="mt-4 space-y-2">
                <span>Password</span><br />
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="w-80 px-3 py-1 bordered-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>

              <button className="mt-4 btn btn-primary">Signup</button>
              <Link to={"/"} className="px-20 py-1">
                <p className="text-xl">Have an Account? Login</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
