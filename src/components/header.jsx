

export const Header = () => {
    return (
        <>
            <div className="flex items-center justify-between w-full h-[90px] bg-[#151621] pl-[20px] pr-[27px]">
                <div>
                    <a href="https://mee6.xyz/en" target="_blank">
                        <div className="flex items-center gap-4">
                            <div>
                                <img src="/assets/images/logo.svg" alt="Logo" />
                            </div>
                            <div>
                                <img src="/assets/images/logo-2.svg" alt="Logo" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex items-center gap-5">
                    <div className="rounded-lg bg-yellow-400 text-yellow-400 bg-opacity-[0.14] hover:bg-opacity-[0.25] active:bg-opacity-[0.08] w-[145px] h-[40px] px-4 py-2 overflow-hidden ">
                        <a className="flex items-center justify-center gap-[8px] cursor-pointer">
                            <div className="">
                                <img src="/assets/images/logo-premium.svg" alt="Premium logo" className="w-[25px] h-[25px] " />
                            </div>
                            <div>
                                <h1> Premium</h1>
                            </div>
                        </a>
                    </div>
                    <div>
                        <button>
                            <img src="/assets/icons/icon-menu.svg" alt="menu" />
                        </button>
                    </div>
                    <div>
                        <button className="w-[145px] h-[40px] bg-[#3994FF] active:bg-opacity-40 bg-opacity-70 w-[145px] h-[40px] rounded-lg text-white">
                            Login with Discord
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
