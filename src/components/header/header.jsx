import React, { useState } from 'react';
import { Link, Links } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { CiLocationOn } from "react-icons/ci";
import { HiShoppingCart } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import instance from '../../api/instance';
import { CiSearch } from "react-icons/ci";


const Header = () => {
    const [serachResult, setSerachResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setOpen] = useState(false)

    // console.log(searchValue); // input.value
    // console.log(serachResult); // result.response



    const giveSearchInfo = (e) => {
        setSearchValue(e.target.value)
        instance
            .get(`/products/?title=${e.target.value}&offset=10&limit=10`)
            .then((response) => setSerachResult(response.data))
            .catch((err) => console.log(err));
    }
    const handleRefresh = (e) => {
        console.log(e.target.value);
        
        window.location.reload(); // Sahifani to'liq yangilaydi
    };

    const giveMoreResult = (e) => {
        e.preventDefault()

        if (searchValue) {
            window.location.pathname = `/search/${searchValue}`;
        }
    }
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
                    <form className='w-3/5' onSubmit={giveMoreResult}>
                        <div className=''>
                            <label className="relative block ">
                                <span className="sr-only">Search</span>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg className="h-5 w-5 text-black" viewBox="0 0 20 20"></svg>
                                </span>
                                <input
                                    className=" text-xl text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-3 pl-5 pr-2 shadow-sm focus:outline-none"
                                    placeholder="Найти на Wildberries"
                                    type="text"
                                    name="search"
                                    onChange={giveSearchInfo}
                                />
                            </label>
                            {/* {serachResult?.length > 0 && searchValue ? (
                                <div className='w-3/5 my-1 rounded-xl p-2 min-h-60 absolute z-10 bg-white'>
                                    {serachResult.map((search) => (
                                        <Link
                                            onClick={(e)=>handleRefresh}

                                            key={search.id}
                                            className=""
                                            to={`/product/${search.id}`}
                                        >
                                            <span
                                                className='flex items-center gap-4 h-10 text-black text-lg w-full hover:bg-slate-300'>
                                                <CiSearch />
                                                {search.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>) : (<></>)
                            } */}
                        </div>

                    </form>

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
        </header >
    );
}

export default Header;
