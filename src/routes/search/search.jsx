import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UseFetchData from '../../hooks/useFetchData';

const Search = () => {
    const getProducts = useParams()
    const data = UseFetchData(`/products/?title=${getProducts.productName}`)
    console.log(data);

    return (
        <section>
            {data.map(item =>
                <div key={item.id}>
                    <div className='grid lg:grid-cols-6 gap-4'>
                        <div className='bg-slate-300'>
                            <img src={item.images} alt="" />
                            <h1>{item.title}</h1>
                            <h1>sdjksdas</h1>
                        </div>
                    </div>
                </div>
            )
            }
        </section>
    );
}

export default Search;
