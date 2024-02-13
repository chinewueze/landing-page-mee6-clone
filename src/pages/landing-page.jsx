export const LandingPage = () => {
    return (
        <>
            <div>
                <div className="w-full relative text-white min-h-[calc(100vh-20%)] flex  bg-gradient-to-b from-custom-gray-900 via-custom-gray-800 to-custom-gray-600">
                    <div className="absolute w-full h-full  pointer-events-none overflow-hidden -z-0">
                        <img src="/assets/images/sm_trees.svg" alt="Forest dark" className="w-full absolute bottom-0" />
                    </div>
                    <div className="min-h-full w-full flex items-center justify-start ">
                        <div className=" mx-auto w-full max-w-[1240px] px-6 lg:px-10 py-6 lg:py-10 pt-10 lg:pt-24 lg:py-36 z-50">
                            <div className=" w-full text-center z-1 md:w-3/5 md:mx-auto lg:mx-0 lg:text-left  lg:w-2/5">
                                <h1 className=" min-h-[127px] font-bold text-sm lg:text-[2rem]">The best <span className="whitespace-nowrap">all-in-one</span> bot<br /> for Discord</h1>
                                <p className="text-[#9195AB] text-base mt-7 mb-10 whitespace-pre-line">Mee6 is a complete Discord bot, easy-to-use, that millions of Discord servers worldwide trust to manage, entertain, and grow their community.</p>
                                <div className="flex flex-col md:flex-row justify-center lg:justify-start items-stretch gap-4 max-w-[168px] lg:max-w-none m-auto">
                                    <button className="relative flex overflow-hidden shrink-0 rounded-lg transition-all duration-200 items-center  gap-1.5 bg-[#3994FF] text-dark-100 hover:bg-brand-hover active:bg-brand-default active:bg-opacity-40 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-brand-default undefined text-base px-6 py-3">
                                        <div className="flex flex grow justify-center max-w-full">
                                            <span className="transition-all duration-200 whitespace-nowrap text-ellipsis overflow-hidden block w-full shrink-0 text-center">
                                                <div className="flex items-center gap-2 justify-center">
                                                    <svg width="24" height="24" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-dark-100 w-5"><path d="M15.248 1.089A15.431 15.431 0 0011.534 0a9.533 9.533 0 00-.476.921 14.505 14.505 0 00-4.12 0A9.582 9.582 0 006.461 0a15.54 15.54 0 00-3.717 1.091C.395 4.405-.242 7.636.076 10.821A15.269 15.269 0 004.631 13c.369-.473.695-.974.975-1.499a9.896 9.896 0 01-1.536-.699c.13-.089.255-.18.377-.27 1.424.639 2.979.97 4.553.97 1.574 0 3.129-.331 4.553-.97.123.096.25.188.377.27a9.94 9.94 0 01-1.54.7c.28.525.607 1.026.976 1.498a15.2 15.2 0 004.558-2.178c.373-3.693-.639-6.895-2.676-9.733zM6.01 8.862c-.888 0-1.621-.767-1.621-1.712 0-.944.708-1.718 1.618-1.718.91 0 1.638.774 1.623 1.718-.016.945-.715 1.712-1.62 1.712zm5.98 0c-.889 0-1.62-.767-1.62-1.712 0-.944.708-1.718 1.62-1.718.912 0 1.634.774 1.618 1.718-.015.945-.713 1.712-1.618 1.712z" fill="currentColor"></path>
                                                    </svg>
                                                    Add to Discord
                                                </div>
                                            </span>
                                        </div>
                                    </button>
                                    <button className="relative flex overflow-hidden shrink-0 rounded-lg transition-all duration-200 items-center  gap-1.5 bg-white bg-opacity-10 text-white hover:bg-opacity-20 active:bg-opacity-5 active:text-opacity-60 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-opacity-10 undefined text-base px-6 py-3">
                                        <div className="flex flex grow justify-center max-w-full">
                                            <span className="transition-all duration-200 whitespace-nowrap text-ellipsis overflow-hidden block w-full shrink-0 text-center">See features</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className=" absolute  bottom-0 right-0 h-full md:w-1/2 translate-x-6 translate-y-6 md:translate-y-0 md:translate-x-0 md:absolute ltr:right-0 rtl:left-0 rtl:-scale-x-[1] bottom-0 flex items-end ltr:justify-end rtl:justify-start pointer-events-none z-0">
                                <img src="/assets/images/right-186ccbcd.svg" alt="MEE6's on mountain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





