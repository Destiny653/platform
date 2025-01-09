'use client'
import React, { useEffect, useState } from 'react';
import style from './dashboard.module.css';
import { FaUser } from "react-icons/fa6";

export default function Page() {

    const [data, setData] = useState(null)

    useEffect(() => {
        getData()
        const admin = localStorage.getItem('admin')
        if (!admin) {
            window.location.href = '/'
        }
    }, [])

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/clients')
            const info = await response.json()
            if (!response.ok) {
                alert(info.message)
                return
            }
            setData(info)
        } catch (error) {
            console.error('Error:', error);
            alert("Error: " + error)
        }
    }
    console.log(data);


    const handledelete = async (id) => {
        getData()
        try {
            const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
                method: 'DELETE',
            })
            const json = await response.json()
            if(response.ok){
                alert("User deleted successfully")
                getData()
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Error: " + error)
        }
    }

    return (
        <div className={` ${style.tableParent}`}>
            <h1 className='py-[30px] font-[600] text-[27px] text-center'>Review and Mange Users</h1>
            <section className='border rounded-[4px] overflow-hidden'>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Phone</th>
                            <th>Date / Time</th>
                            <th>Subject</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, i) => (
                                <tr key={i}>
                                    <td className='flex items-center gap-[7px] jc'>
                                        <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                                            <FaUser className='text-[#91abafbb] text-[24px]' />
                                        </div>
                                        <div>
                                            <h1>{item.name}</h1>
                                            <p className='text-[#294cc0]'>{item?.email}</p>
                                        </div>
                                    </td>
                                    <td><span className={`${style.specialColor}`}>{item?.phone}</span></td>
                                    <td>{item?.createdAt?.toLocaleString().split('T')[0]} <br /> {item?.createdAt?.toLocaleString().split('T')[1]}</td>
                                    <td>{item?.subject}</td>
                                    <td><span className={`${style.specialColor}`}>{item?.country}</span></td>
                                    <td className='client-btn' onClick={() => handledelete(item._id)} ><span className={`${style.delete}`}>Delete</span></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td className='flex items-center gap-[7px] jc'>
                                <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                                    <FaUser className='text-[#91abafbb] text-[24px]' />
                                </div>
                                <div>
                                    <h1>Megalone Mata</h1>
                                    <p className='text-[#294cc0]'>megalone@gamil.com</p>
                                </div>
                            </td>
                            <td><span className={`${style.specialColor}`}>0789876543</span></td>
                            <td>2022-03-20 / <br /> 12:09:00</td>
                            <td>This is a sample comment</td>
                            <td><span className={`${style.specialColor}`}>England</span></td>
                            <td className='client-btn' onClick={() => handledelete()} ><span className={`${style.delete}`}>Delete</span></td>
                        </tr>
                        <tr>
                            <td className='flex items-center gap-[7px] jc'>
                                <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                                    <FaUser className='text-[#91abafbb] text-[24px]' />
                                </div>
                                <div>
                                    <h1>Megalone Mata</h1>
                                    <p className='text-[#294cc0]'>megalone@gamil.com</p>
                                </div>
                            </td>
                            <td><span className={`${style.specialColor}`}>0789876543</span></td>
                            <td>2022-03-20 / <br /> 12:09:00</td>
                            <td>This is a sample comment</td>
                            <td><span className={`${style.specialColor}`}>England</span></td>
                            <td className='client-btn' ><span className={`${style.delete}`}>Delete</span></td>
                        </tr>
                        <tr>
                            <td className='flex items-center gap-[7px] jc'>
                                <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                                    <FaUser className='text-[#91abafbb] text-[24px]' />
                                </div>
                                <div>
                                    <h1>Megalone Mata</h1>
                                    <p className='text-[#294cc0]'>megalone@gamil.com</p>
                                </div>
                            </td>
                            <td><span className={`${style.specialColor}`}>0789876543</span></td>
                            <td>2022-03-20 / <br /> 12:09:00</td>
                            <td>This is a sample comment</td>
                            <td><span className={`${style.specialColor}`}>England</span></td>
                            <td className='client-btn' onClick={() => handledelete()}><span className={`${style.delete}`}>Delete</span></td>
                        </tr>
                        <tr>
                            <td className='flex items-center gap-[7px] jc'>
                                <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                                    <FaUser className='text-[#91abafbb] text-[24px]' />
                                </div>
                                <div>
                                    <h1>Megalone Mata</h1>
                                    <p className='text-[#294cc0]'>megalone@gamil.com</p>
                                </div>
                            </td>
                            <td><span className={`${style.specialColor}`}>0789876543</span></td>
                            <td>2022-03-20 / <br /> 12:09:00</td>
                            <td>This is a sample comment</td>
                            <td><span className={`${style.specialColor}`}>England</span></td>
                            <td className='client-btn' ><span className={`${style.delete}`}>Delete</span></td>
                        </tr>
                        <tr>
                            <td className='flex items-center gap-[7px] jc'>
                                <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                                    <FaUser className='text-[#91abafbb] text-[24px]' />
                                </div>
                                <div>
                                    <h1>Megalone Mata</h1>
                                    <p className='text-[#294cc0]'>megalone@gamil.com</p>
                                </div>
                            </td>
                            <td><span className={`${style.specialColor}`}>0789876543</span></td>
                            <td>2022-03-20 / <br /> 12:09:00</td>
                            <td>This is a sample comment</td>
                            <td><span className={`${style.specialColor}`}>England</span></td>
                            <td className='client-btn' ><span className={`${style.delete}`}>Delete</span></td>
                        </tr>
                        <tr>
                            <td className='flex items-center gap-[7px] jc'>
                                <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                                    <FaUser className='text-[#91abafbb] text-[24px]' />
                                </div>
                                <div>
                                    <h1>Megalone Mata</h1>
                                    <p className='text-[#294cc0]'>megalone@gamil.com</p>
                                </div>
                            </td>
                            <td><span className={`${style.specialColor}`}>0789876543</span></td>
                            <td>2022-03-20 / <br /> 12:09:00</td>
                            <td>This is a sample comment</td>
                            <td><span className={`${style.specialColor}`}>England</span></td>
                            <td className='client-btn' ><span className={`${style.delete}`}>Delete</span></td>
                        </tr>
                        <tr>
                            <td className='flex items-center gap-[7px] jc'>
                                <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                                    <FaUser className='text-[#91abafbb] text-[24px]' />
                                </div>
                                <div>
                                    <h1>Megalone Mata</h1>
                                    <p className='text-[#294cc0]'>megalone@gamil.com</p>
                                </div>
                            </td>
                            <td><span className={`${style.specialColor}`}>0789876543</span></td>
                            <td>2022-03-20 / <br /> 12:09:00</td>
                            <td>This is a sample comment</td>
                            <td><span className={`${style.specialColor}`}>England</span></td>
                            <td className='client-btn' ><span className={`${style.delete}`}>Delete</span></td>
                        </tr>
                        <tr>
                            <td className='flex items-center gap-[7px] jc'>
                                <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                                    <FaUser className='text-[#91abafbb] text-[24px]' />
                                </div>
                                <div>
                                    <h1>Megalone Mata</h1>
                                    <p className='text-[#294cc0]'>megalone@gamil.com</p>
                                </div>
                            </td>
                            <td><span className={`${style.specialColor}`}>0789876543</span></td>
                            <td>2022-03-20 / <br /> 12:09:00</td>
                            <td>This is a sample comment</td>
                            <td><span className={`${style.specialColor}`}>England</span></td>
                            <td className='client-btn' ><span className={`${style.delete}`}>Delete</span></td>
                        </tr>
                        <tr>
                            <td className='flex items-center gap-[7px] jc'>
                                <div className='flex justify-center items-center bg-[#fff] rounded-full w-[33px] h-[33px]'>
                                    <FaUser className='text-[#91abafbb] text-[24px]' />
                                </div>
                                <div>
                                    <h1>Megalone Mata</h1>
                                    <p className='text-[#294cc0]'>megalone@gamil.com</p>
                                </div>
                            </td>
                            <td><span className={`${style.specialColor}`}>0789876543</span></td>
                            <td>2022-03-20 / <br /> 12:09:00</td>
                            <td>This is a sample comment</td>
                            <td><span className={`${style.specialColor}`}>England</span></td>
                            <td className='client-btn' ><span className={`${style.delete}`}>Delete</span></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}
