import React from 'react'

const Footer = () => {
    return (
        <footer className=' w-full py-2 bg-[#0e4411]' >
            <div className="text-center">
                <a className="flex items-center justify-center mb-3 text-2xl font-semibold text-gray-900">
                    <img src="https://www.svgrepo.com/show/474372/code.svg" className="h-12 mr-3 sm:h-9 " alt="Landwind Logo " />
                    <div className="logo flex flex-col justify-center items-center cursor-context-menu">
                        <div className="passmate text-2xl font-bold">
                            <span className='text-green-700'>&lt;</span>
                            <span className='text-white'>Pass</span>
                            <span className='text-green-700'>Mate/&gt;</span>
                        </div>
                    </div>

                </a>

                <span className="block text-sm text-center text-gray-500">© 2024 PassMate™. All Rights Reserved.

                </span>

                <div className="flex justify-center space-x-5 mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" width={25} className="hover:contrast-200" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" width={25} className="hover:contrast-200" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" width={25} className="hover:contrast-200" />
                    </a>
                    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" width={25} className="hover:contrast-200" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" width={25} className="hover:contrast-200" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

