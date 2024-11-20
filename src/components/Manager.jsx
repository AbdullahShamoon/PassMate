import React, { useRef, useState, useEffect } from 'react'

const Manager = () => {
    const [form, setForm] = useState({ site: '', username: '', password: '' })
    const [passwordArray, setPasswordArray] = useState([])
    const ref = useRef();
    const ref1 = useRef();

    useEffect(() => {
        let pass = localStorage.getItem('passwords')
        if (pass) {
            setPasswordArray(JSON.parse(pass))
        }
    }, [])

    const showPassword = () => {

        if (ref.current.src.includes("/eye.png")) {
            ref.current.src = "/hidden.png",
            ref.current.className = 'w-4'
            ref1.current.type = 'text'
        }
        else {
            ref.current.src = "/eye.png",
            ref.current.className = 'w-4 hue-rotate-90'
            ref1.current.type = 'password'
        }
    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem('passwords', JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <><div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="myContainer mt-10 w-[60vw]  flex flex-col mx-auto">

                <div className="logo flex flex-col justify-center items-center">
                    <div className="passmate text-2xl font-bold">
                        <span className='text-green-700'>&lt;</span>
                        <span>Pass</span>
                        <span className='text-green-700'>Mate/&gt;</span>
                    </div>
                    <div className="subtitle text-sm">Your Trusted Password Keeper</div>
                </div>

                <div className="labels flex flex-col justify-center items-center w-full mt-4 gap-5">
                    <div className="line1 flex justify-center items-center w-full">
                        <input name='site' value={form.site} onChange={handleChange} type="text" className='text-xs py-1 px-2 rounded-full border border-green-500 w-full' placeholder='Enter website URL' />
                    </div>
                    <div className="line2 flex justify-between items-center w-full">
                        <input name='username' value={form.username} onChange={handleChange} type="text" className='text-xs py-1 px-2 rounded-full border border-green-500 w-[78%]' placeholder='Enter username' />
                        <div className="passWithIcon relative">
                            <input ref={ref1} name='password' value={form.password} onChange={handleChange} type="password" className='text-xs py-1 px-2 rounded-full border border-green-500' placeholder='Enter password' />
                            <span className='absolute right-2 top-[0.3rem]'>
                                <img ref={ref} src="/eye.png" alt="eye" onClick={showPassword} className='w-4 hue-rotate-90	 ' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="addButton flex justify-center items-center mt-4 ">
                    <button className='text-xs py-1 px-4 rounded-full bg-green-500 hover:bg-[#25b95b] text-black flex items-center gap-3' onClick={savePassword}>
                        <lord-icon src="https://cdn.lordicon.com/ftndcppj.json" trigger="morph" style={{ width: "25px", height: "25px" }}></lord-icon>
                        <span className='text-white font-semibold'>Add Password</span>
                    </button>
                </div>

                <div className="yourPasswords text-green-800 font-bold text-lg">Your Passwords :-</div>
                {passwordArray.length === 0 ? <div className="noPassword py-3 pl-1 text-xs">No Passwords Found</div> :
                    <table className="table-auto mt-3 rounded-md overflow-hidden ">
                        <thead className='bg-green-700 text-white'>
                            <tr>
                                <th className='py-1'>Site</th>
                                <th className='py-1'>Username</th>
                                <th className='py-1'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#b4facc4f]'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-1 text-center w-32'><a href={item.site}  target='_blank'>{item.site}</a></td>
                                    <td className='py-1 text-center w-32'>{item.username}</td>
                                    <td className='py-1 text-center w-32'>{item.password}</td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                }
            </div>

        </>
    )
}

export default Manager