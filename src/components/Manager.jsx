import React, { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


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

    const copyText = (text) => {
        toast('Copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }

    const savePassword = () => {
        toast.success('Added Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        setForm({ site: '', username: '', password: '' })
    }

    const deletePassword = (id) => {
        console.log("Deleting password with id:", id);
        let c = confirm("Are you sure you want to delete this password?")
        if (c) {
            toast.error('Deleted Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setPasswordArray(passwordArray.filter((item) => item.id !== id))
            localStorage.setItem('passwords', JSON.stringify(passwordArray.filter((item) => item.id !== id)))
        }
    }

    const editPassword = (id) => {
        setForm(passwordArray.find((item) => item.id === id))
        setPasswordArray(passwordArray.filter((item) => item.id !== id))

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#4ade80_100%)]"></div>
            <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>


            <ToastContainer />


            <div className="myContainer mt-10 md:w-[60vw] sm:w-[80vw] w-[90vw] flex flex-col mx-auto pb-4 min-h-[80vh]">

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
                    <div className="line2 flex justify-between items-center w-full gap-2">
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
                    <button className='text-xs py-1 px-4 rounded-full bg-[#229627] hover:bg-[#1b7520] text-black flex items-center gap-3' onClick={savePassword}>
                        <lord-icon src="https://cdn.lordicon.com/ftndcppj.json" trigger="morph" style={{ width: "25px", height: "25px" }}></lord-icon>
                        <span className='text-white font-semibold'>Add Password</span>
                    </button>
                </div>

                <div className="yourPasswords text-green-800 font-bold text-lg">Your Passwords :-</div>
                {passwordArray.length === 0 ? <div className="noPassword py-3 pl-1 text-xs">No Passwords Found</div> :
                    <div className='w-full'>
                    <table className="table-auto  mt-3 rounded-md overflow-hidden">
                        <thead className='bg-green-700 text-white'>
                            <tr className='cursor-default'>
                                <th className='py-1'>Site</th>
                                <th className='py-1'>Username</th>
                                <th className='py-1'>Password</th>
                                <th className='py-1'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#b4facc4f]  '>
                            {passwordArray.map((item, index) => {
                                return <tr key={index} className='text-sm'>
                                    <td className='py-2 text-center '>
                                        <div className="flex justify-center items-center gap-2">
                                            <a href={item.site} target='_blank' className='overflow-hidden' >{item.site}</a>
                                            <div className="copyGif bg-[url('/copy.png')] bg-cover w-4 h-4 hover:bg-[url('/copy.gif')] cursor-pointer" onClick={() => { copyText(item.site) }}> </div>
                                        </div>
                                    </td>
                                    <td className='py-2 text-center '>
                                        <div className="flex justify-center items-center gap-2">
                                            <span className='cursor-default'>{item.username}</span>
                                            <div className="copyGif bg-[url('/copy.png')] bg-cover w-4 h-4 hover:bg-[url('/copy.gif')] cursor-pointer" onClick={() => { copyText(item.username) }}> </div>
                                        </div>
                                    </td>
                                    <td className='py-2 text-center '>
                                        <div className="flex justify-center items-center gap-2">
                                            <span className='blur-[2px] cursor-default'>{item.password}</span>
                                            <div className="copyGif bg-[url('/copy.png')] bg-cover w-4 h-4 hover:bg-[url('/copy.gif')] cursor-pointer" onClick={() => { copyText(item.password) }}> </div>
                                        </div>
                                    </td>
                                    <td className='py-2 text-center '>
                                        <div className="flex justify-center items-center gap-2">
                                            <span className="editGif bg-[url('/edit.png')] bg-cover w-5 h-5 hover:bg-[url('/edit.gif')] cursor-pointer" onClick={() => { editPassword(item.id) }}></span>
                                            <span className="deleteGif bg-[url('/delete.png')] bg-cover w-5 h-5 hover:bg-[url('/delete.gif')] cursor-pointer" onClick={() => { deletePassword(item.id) }} ></span>
                                        </div>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                    </div>
                    
                }
            </div>

        </>
    )
}

export default Manager