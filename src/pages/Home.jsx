import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()

    const handleSubmit=()=>{
        navigate('/')
    }
    return (
        <>
            <section className="bg-[#F4F7FF] py-20 lg:py-[100px] h-screen">
                <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                    <div
                        className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
                    >
                        <div class=" overflow-y-auto overflow-x-hidden  justify-center items-center w-full md:inset-0 h-modal md:h-full">
                            <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                                <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                    <button type="button" class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="successModal">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                                        <svg aria-hidden="true" class="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Success</span>
                                    </div>
                                    <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">hi {localStorage.getItem('email')}</p>
                                    <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">You Have Successfully Logged In.</p>
                                    <button onClick={handleSubmit}  class="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4  focus:ring-blue-300">
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                        <span className="absolute top-1 right-1">
                            <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle
                                cx="1.39737"
                                cy="38.6026"
                                r="1.39737"
                                transform="rotate(-90 1.39737 38.6026)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.39737"
                                cy="1.99122"
                                r="1.39737"
                                transform="rotate(-90 1.39737 1.99122)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="13.6943"
                                cy="38.6026"
                                r="1.39737"
                                transform="rotate(-90 13.6943 38.6026)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="13.6943"
                                cy="1.99122"
                                r="1.39737"
                                transform="rotate(-90 13.6943 1.99122)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="25.9911"
                                cy="38.6026"
                                r="1.39737"
                                transform="rotate(-90 25.9911 38.6026)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="25.9911"
                                cy="1.99122"
                                r="1.39737"
                                transform="rotate(-90 25.9911 1.99122)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.288"
                                cy="38.6026"
                                r="1.39737"
                                transform="rotate(-90 38.288 38.6026)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.288"
                                cy="1.99122"
                                r="1.39737"
                                transform="rotate(-90 38.288 1.99122)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.39737"
                                cy="26.3057"
                                r="1.39737"
                                transform="rotate(-90 1.39737 26.3057)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="13.6943"
                                cy="26.3057"
                                r="1.39737"
                                transform="rotate(-90 13.6943 26.3057)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="25.9911"
                                cy="26.3057"
                                r="1.39737"
                                transform="rotate(-90 25.9911 26.3057)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.288"
                                cy="26.3057"
                                r="1.39737"
                                transform="rotate(-90 38.288 26.3057)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.39737"
                                cy="14.0086"
                                r="1.39737"
                                transform="rotate(-90 1.39737 14.0086)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="13.6943"
                                cy="14.0086"
                                r="1.39737"
                                transform="rotate(-90 13.6943 14.0086)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="25.9911"
                                cy="14.0086"
                                r="1.39737"
                                transform="rotate(-90 25.9911 14.0086)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.288"
                                cy="14.0086"
                                r="1.39737"
                                transform="rotate(-90 38.288 14.0086)"
                                fill="#3056D3"
                            />
                            </svg>
                        </span>
                        <span className="absolute left-1 bottom-1">
                            <svg
                            width="29"
                            height="40"
                            viewBox="0 0 29 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle
                                cx="2.288"
                                cy="25.9912"
                                r="1.39737"
                                transform="rotate(-90 2.288 25.9912)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="14.5849"
                                cy="25.9911"
                                r="1.39737"
                                transform="rotate(-90 14.5849 25.9911)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.7216"
                                cy="25.9911"
                                r="1.39737"
                                transform="rotate(-90 26.7216 25.9911)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="2.288"
                                cy="13.6944"
                                r="1.39737"
                                transform="rotate(-90 2.288 13.6944)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="14.5849"
                                cy="13.6943"
                                r="1.39737"
                                transform="rotate(-90 14.5849 13.6943)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.7216"
                                cy="13.6943"
                                r="1.39737"
                                transform="rotate(-90 26.7216 13.6943)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="2.288"
                                cy="38.0087"
                                r="1.39737"
                                transform="rotate(-90 2.288 38.0087)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="2.288"
                                cy="1.39739"
                                r="1.39737"
                                transform="rotate(-90 2.288 1.39739)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="14.5849"
                                cy="38.0089"
                                r="1.39737"
                                transform="rotate(-90 14.5849 38.0089)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.7216"
                                cy="38.0089"
                                r="1.39737"
                                transform="rotate(-90 26.7216 38.0089)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="14.5849"
                                cy="1.39761"
                                r="1.39737"
                                transform="rotate(-90 14.5849 1.39761)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.7216"
                                cy="1.39761"
                                r="1.39737"
                                transform="rotate(-90 26.7216 1.39761)"
                                fill="#3056D3"
                            />
                            </svg>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </section>
        </>
    )
}

export default Home