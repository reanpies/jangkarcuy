'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useState, useEffect } from 'react';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        console.log("Sending request to /api/menu");

        const res = await fetch('/api/menu');
        const data = await res.json();

        console.log("Menu API Response:", data);
        setMenu(Array.isArray(data) ? data : []); //setMenu(data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };
    fetchMenu();
  }, []);

  return (
    <section className='relative py-12 xl:py-24 bg-menu' id='menu'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn('left', 0.15)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='max-w-[570px] mx-auto text-center xl:text-right'
        >
          <h2 className='mb-3'>Favorite Menu</h2>
          <Link
            href='/'
            className='text-green flex justify-center xl:justify-end items-center mb-16'
          >
            View all
            <IoIosArrowRoundForward className='text-3xl' />
          </Link>
        </motion.div>
        {/* menu grid */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='flex gap-5 overflow-x-auto py-4'
        >
          {menu.map((item, index) => (
            <div
              key={index}
              className='min-w-[270px] bg-white shadow-primary flex-shrink-0 group'
            >
              {/* img */}
              <div className='overflow-hidden'>
                <Image
                  src={item.img}
                  width={270}
                  height={270}
                  alt={item.title}
                  className='group-hover:scale-110 transition-all duration-300'
                />
              </div>
              {/* title & price */}
              <div className='pt-[20px] pb-[28px] px-[30px]'>
                <Link href='/'>
                  <h3 className='font-poppins text-black mb-[14px]'>{item.title}</h3>
                </Link>
                <div className='text-xl font-poppins font-semibold text-orange'>
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
