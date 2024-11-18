import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#0e4411] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-9">
                    <div className="flex items-center">
                        <a href="#" className="text-xl font-bold">&lt;PassMate/&gt;</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="hover:bg-[#1b7520] px-3 py-3 rounded-md text-sm font-medium">Home</a>
                            <a href="#" className="hover:bg-[#1b7520] px-3 py-3 rounded-md text-sm font-medium">About</a>
                            <a href="#" className="hover:bg-[#1b7520] px-3 py-3 rounded-md text-sm font-medium">Services</a>
                            <a href="#" className="hover:bg-[#1b7520] px-3 py-3 rounded-md text-sm font-medium">Contact</a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-[#229627] inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#1b7520] focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1b7520]">Home</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1b7520]">About</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1b7520]">Services</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1b7520]">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
