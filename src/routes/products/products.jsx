import React, {  } from 'react';
import UseFetchData from '../../hooks/useFetchData';
import { useParams } from 'react-router-dom';

const Products = () => {
    const getSearchProduct = useParams()
    const data = UseFetchData(`/products/${getSearchProduct.id}`);
    console.log(data);

    
    return (
        <div>
            products
        </div>
    );
}

export default Products;
