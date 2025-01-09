import Link from 'next/link'
import React from 'react';
import style from './footer.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className='box-border bg-[#204fb3c9] px-[10px] py-[30px] text-[#fff]'>
            <div className='flex justify-between'>
                <ul className={`flex gap-[13px] ${style.info}`}>
                    <Link href={'/contact'}>
                        <li>Contact Us</li>
                    </Link>
                    <Link href={'/about'}>
                        <li>About Us</li>
                    </Link>
                    <Link href={'/terms'}>
                        <li>Terms and Conditions</li>
                    </Link>
                    <Link href={'/privacy'}>
                        <li>Privacy Policy</li>
                    </Link>
                </ul>
                {/* <ul className={`flex gap-[13px] ${style.mediaIcon}`}> 
                    <Link href={"https://www.facebook.com"}>
                    <li><FaFacebookF/> Facebook</li>
                    </Link>
                    <Link href={'https://www.twitter.com'}>
                    <li><FaXTwitter/> Twitter</li>
                    </Link> 
                    <Link href={'https://www.youtube.com'}>
                    <li><FaYoutube/> YouTube</li>
                    </Link>
                </ul> */}
            </div>
            <p>�� 2023 My Website. All rights reserved.</p>
        </div>
    )
}
