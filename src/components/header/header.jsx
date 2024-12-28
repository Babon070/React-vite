import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { CiLocationOn } from "react-icons/ci";
import { HiShoppingCart } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className='bg-main font-sans text-headerTop'>
            <div className='container h-28 flex flex-col justify-around'>
                <div className='header__top flex justify-between'>
                    <ul className='flex gap-10 text-sm'>
                        <li className='w-56 flex items-center gap-1 hover:text-white'>
                            <CiLocationOn />
                            Ташкент
                        </li>
                        <li className='hover:text-white'>Продавайте на Wildberries</li>
                        <li className='hover:text-white'>Работа в Wildberries</li>
                    </ul>
                    <div className='text-white flex items-center justify-center gap-1 bg-gray-500 w-16 rounded-lg'>
                        <img className='w-4 h-4 rounded-lg' src="https://cdn-icons-png.flaticon.com/512/299/299758.png" alt="flag" />
                        UZS
                    </div>
                </div>
                <div className='header__bottom flex items-center justify-between gap-4'>
                    <div className='flex items-center gap-5'>
                        <Link to='/'>
                            <img className='w-52' src="https://static-basket-01.wbbasket.ru/vol2/site/i/v3/header/logoWb.svg" alt="" />
                        </Link>
                        <button className='hover:text-white'>
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </button>
                    </div>
                    <div className='w-3/4'>
                        <label className="relative block ">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 text-black" viewBox="0 0 20 20"></svg>
                            </span>
                            <input className="placeholder:italic text-xl text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-3 pl-5 pr-2 shadow-sm focus:outline-none" placeholder="Найти на Wildberries" type="text" name="search" />
                        </label>
                    </div>
                    <nav className='text-sm flex gap-5'>
                        <Link className='flex flex-col items-center h-12 justify-between' to='/'>
                            <FaLocationDot className='text-white text-xl' />
                            Адреса
                        </Link>
                        <Link className='flex flex-col items-center h-12 justify-between' to='/auth'>
                            <FaUser className='text-white w-5 h-5' />
                            Войти
                        </Link>
                        <Link className='flex flex-col items-center h-12 justify-between' to='/login'>
                            <HiShoppingCart className='text-white w-5 h-5' />
                            Корзина
                        </Link>
                    </nav>
                </div>

            </div>
        </header>
    );
}

export default Header;
