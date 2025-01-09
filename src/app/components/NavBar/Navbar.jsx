import React from 'react';
import style from './navbar.module.css'
import Image from 'next/image';

export default function Navbar() {
    return (
        <section className={`bg-[#fff] ${style.navBar}`}>
            <div className='w-[160px] h-[150px]'>
                <Image className='w-full h-full' src={'/images/shepherd.png'} alt='logo' width={5000} height={5000} />
            </div>
            <h1 className={`text-[#283aa1] text-[40px] font-[600]`}>— Sustainable Opportunity —</h1>
        </section>
    )
}
