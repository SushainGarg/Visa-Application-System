import { useState } from "react";
import { Link , useNavigate } from "react-router-dom"
import { SignInStart , SignInSuccess , SignInFailure } from "../redux/applicant/applicantSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

export default function Signin() {
  const [formData , setFormData] = useState({})
  const {loading , error} = useSelector(state => state.applicant);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({...formData , [e.target.id] : e.target.value});
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        dispatch(SignInStart());
        const res = await fetch('/api/auth/signin' , {
        method : 'POST' , 
        headers : {
          'Content-Type' : 'application/json',
      }, 
      body : JSON.stringify(formData)
    });
      const data = await res.json();
      console.log(data);
      if(data.success === false) {
        dispatch(SignInFailure(data));
        return;
      }
      dispatch(SignInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(SignInFailure(error));
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div className="mt-12 flex flex-col items-center">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">LOGIN</span></h1>
                    <div className="w-full flex-1 mt-8">
                        <div className="flex flex-col items-center">
                            <OAuth/>

                        </div>

                        <div className="my-12 border-b text-center">
                            <div
                                className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                Or Login with VFS E-mail
                            </div>
                        </div>

                        <div className="mx-auto max-w-xs">
                          <form onSubmit={handleSubmit}>
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="email" placeholder="Email" onChange={handleChange} id="email"/>
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="password" placeholder="Password" onChange={handleChange} id="password"/>
                            <button disabled={loading}
                                className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <path d="M20 8v6M23 11h-6" />
                                </svg>
                                <span className="ml-">
                                    {loading ? 'Loading...' : 'Login'}
                                </span>
                            </button>
                          </form>
                          <div className='flex gap-2'>
                              <p>Dont Have an Account?</p>
                              <Link to='/sign-up'>
                                <span className='text-green-500 hover:text-green-700 transition-all duration-300 ease-in-out'>Register</span>
                              </Link>
                          </div>
                          <p className="text-red-700 mt-5">
                            {error ? error.message || 'Something went wrong!' : ''}
                            </p>
                            <p className="mt-6 text-xs text-gray-600 text-center">
                                I agree to abide by AFS's
                                <a href="#" className="border-b border-gray-500 border-dotted">
                                    Terms of Service
                                </a>
                                and its
                                <a href="#" className="border-b border-gray-500 border-dotted">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-green-100 text-center hidden lg:flex">
                <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                    style={{backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz)'}}>
                </div>
            </div>
        </div>
    </div>
  )
}
