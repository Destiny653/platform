'use client'
import React, { useEffect, useState } from 'react';
import style from './hero.module.css'
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GrTask } from "react-icons/gr";
import { FaFileSignature } from "react-icons/fa";
import { PiBrowsersBold } from "react-icons/pi";

export default function Hero() {
    const heros = [
        {
            title: 'Earn Money Online',
            desc: ' Join millions of people in the world who have already earned thousands of dollars by working online.',
            image: '/images/herobg/hero1.png'
        },
        {
            title: 'Create Your Own Business',
            desc: 'Create your own businesses, sell products, and earn money without needing to hire anyone.',
            image: '/images/herobg/hero2.png'
        },
        {
            title: 'Work and Connect',
            desc: 'Connect with professionals, start small businesses, and grow your business by earning extra money while working.',
            image: '/images/herobg/hero3.png'
        },
        {
            title: 'Learn and Grow',
            desc: 'Learn new skills, gain confidence, and earn extra money while working on your projects.',
            image: '/images/herobg/hero4.png'
        },
        {
            title: 'Stay Up-to-Date',
            desc: 'Stay informed about the latest trends, news, and opportunities to earn money online.',
            image: '/images/herobg/hero5.png'
        },
        {
            title: 'Discover Unlimited Ways to Earn Money Online — Your Journey to Financial Freedom Starts Here!',
            desc: 'Connect with trusted opportunities to work, create, and earn from the comfort of your home.',
            image: '/images/herobg/hero6.png',
        }
    ]

    const [currentHero, setCurrentHero] = useState(0);
    const handleHeroChange = (index) => {
        setCurrentHero(heros[index])
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHero((num) => (num + 1) % heros.length)
        }, 9000)
        return () => clearInterval(interval)
    }, [currentHero])
    console.log("currentHero: ", currentHero);


    return (
        <div className='flex flex-col gap-[50px] my-[40px]'>
            <div className={`box-border flex items-center h-[500px] py-[100px] relative ${style.heroBg}`}>
                <div className={`top-0 z-1 absolute flex justify-center items-center w-full h-[500px] overflow-hidden ${style.heroBgItem}`}>
                    <img className='z-1 w-full' src={heros[currentHero].image} alt={currentHero.title} />
                </div>
                <section className='z-10 absolute flex flex-col gap-[20px] px-[5%] w-[70%] text-[#fff] z'>
                    <h1 className='font-[600] text-[39px]'>{heros[currentHero].title}</h1>
                    <p className='text-[25px]'>{heros[currentHero].desc}</p>
                    <button className='bg-[#9696fa] hover:bg-[blue] px-[30px] py-[10px] rounded-[4px] w-fit text-[#fff] text-[18px]'>Join Now for Free</button>
                </section>
            </div>
            <section>
                <h1 className='py-[50px] font-[600] text-[30px] text-center'>Why Choose Social Shephard?</h1>
                <section className={` ${style.perception}`}>
                    <div>
                        <h1>Flexible and Remote Earning Options</h1>
                        <p>Work from anywhere, anytime, and earn extra money while you do.</p>
                    </div>
                    <div>
                        <h1>Connect with Professionals</h1>
                        <p>Get's you connected with thousands of professionals, including engineers, designers, and more, who are working remotely and earning extra money.</p>
                    </div>
                    <div>
                        <h1>Trusted and Verified Opportunities</h1>
                        <p>A team of experienced professionals, who are always looking for new opportunities to work and earn extra money.</p>
                    </div>
                    <div>
                        <h1>Payment Security and Transparency</h1>
                        <p>Social Shephard uses secure payment methods, and all your transactions are fully transparent, so you can trust that you are earning money safely and fairly.</p>
                    </div>
                </section>
            </section>
            <section>
                <h1 className='py-[50px] font-[600] text-[30px] text-center'>Featured Opportunities</h1>
                <section className={` ${style.featuredOpportunities}`}>
                    <div>
                        <section>
                            <img src='/images/herobg/hero1.png' alt='Featured Opportunity 1' />
                        </section>
                        <div>
                            <h1>Earn Extra Money Working Remotely</h1>
                            <p>Work from anywhere, anytime, and earn extra money while you do.</p>
                            <button className='bg-[#9696fa] hover:bg-[blue] px-[20px] py-[10px] rounded-[4px] w-fit text-[#fff] text-[14px]'>Learn More</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Connect with Professionals</h1>
                            <p>Get's you connected with thousands of professionals, including engineers, designers, and more, who are working remotely and earning extra money.</p>
                            <button className='bg-[#9696fa] hover:bg-[blue] px-[20px] py-[10px] rounded-[4px] w-fit text-[#fff] text-[14px]'>Learn More</button>
                        </div>
                        <section>
                            <img src='/images/herobg/hero2.png' alt='Featured Opportunity 2' />
                        </section>
                    </div>
                    <div>
                        <section>
                            <img src='/images/herobg/hero3.png' alt='Featured Opportunity 3' />
                        </section>
                        <div>
                            <h1>Trusted and Verified Opportunities</h1>
                            <p>A team of experienced professionals, who are always looking for new opportunities to work and earn extra money.</p>
                            <button className='bg-[#9696fa] hover:bg-[blue] px-[20px] py-[10px] rounded-[4px] w-fit text-[#fff] text-[14px]'>Learn More</button>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className='py-[50px] font-[600] text-[30px] text-center'>How It Works</h1>
                    <section className={` ${style.howItWorks}`}>
                        <div>
                            <FaFileSignature size={50} className='mx-auto text-center' />
                            <h1>Sign Up</h1>
                            <p>Create an account, sign in, and choose your preferred earning options.</p>
                        </div>
                        <div>
                            <PiBrowsersBold size={50} className='mx-auto' />
                            <h1>Browse Jobs</h1>
                            <p>Find opportunities to work and earn extra money by browsing through job listings.</p>
                        </div>
                        <div>
                            <GrTask size={50} className='mx-auto' />
                            <h1>Complete Tasks</h1>
                            <p>Get Full time or Part time Job.</p>
                        </div>
                        <div>
                            <FaMoneyCheckDollar size={50} className='mx-auto' />
                            <h1>Get Paid</h1>
                            <p>Receive your payment, and you're ready to start earning money.</p>
                        </div>
                    </section>
                    <section >
                        <h1 className='py-[50px] font-[600] text-[30px] text-center'>Testimonials</h1>
                        <div className={`${style.testimonial}`}>
                            <div>
                                <section>
                                    <img src='/images/testimonial/test2.png' alt='Testimonial 1' />
                                </section>
                                <div>
                                    <h1>Wilfred Tompson</h1>
                                    <p>Social Shephard has helped me find new opportunities to work and earn extra money. I'm so grateful for their support and guidance.</p>
                                </div>
                            </div>
                            <div>
                                <section>
                                    <img src='/images/testimonial/test1.png' alt='Testimonial 2' />
                                </section>
                                <div>
                                    <h1>Annita Belamy</h1>
                                    <p>Social Shephard has been a great resource for me to find new opportunities to work and earn extra money. I've been working remotely for the past year and I'm so grateful for their help.</p>
                                </div>
                            </div>
                            <div>
                                <section>
                                    <img src='/images/testimonial/test3.png' alt='Testimonial 3' />
                                </section>
                                <div>
                                    <h1>Alfred Wilson</h1>
                                    <p>With Social Shephard providing remote job opportunities i've been able to earn my deaily income from the comfort of my home. </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className='flex flex-col justify-center items-center'>
                    <h1 className='py-[50px] font-[600] text-[30px] text-center'>Ready To Start Earning?</h1>
                    <button className='bg-[#9696fa] hover:bg-[blue] px-[20px] py-[10px] rounded-[4px] w-fit font-[600] text-[#fff] text-[16px]'>Join Now and Explore Opportunities</button>
                </section>
            </section>
        </div>
    )
}
