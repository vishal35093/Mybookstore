// import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle login logic here
    };

    const closeModal = () => {
        document.getElementById('my_modal_3').close();
    };

    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button 
                            type="button" 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        
                        <h3 className="font-bold text-lg">Login!</h3>
                        <div className="mt-4 space-y-2">
                            <span>Email</span><br />
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-80 px-3 py-1 bordered-md outline-none"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className="mt-4 space-y-2">
                            <span>Password</span><br />
                            <input 
                                type="password" 
                                placeholder="Enter your password" 
                                className="w-80 px-3 py-1 bordered-md outline-none"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <button className="mt-4 btn btn-primary">Login</button>
                    </form>
                    <Link to={"/signup"} className="px-20 py-1">Not registered? Signup</Link>
                </div>
            </dialog>
        </>
    )
}

export default Login;
        