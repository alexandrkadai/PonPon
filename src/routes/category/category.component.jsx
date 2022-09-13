import {  useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Spinner from '../../component/spinner/spinner.component';
import {selectCategoriesMap, selectCategoriesIsLoading} from '../../store/categories/category.selector';
import ProductCart from '../../component/product-cart/product-cart.component';
import './category.styles.scss';

const Category = () =>{
    const {category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [ products, setProducts] = useState(categoriesMap[category]);

    useEffect(() =>{
        setProducts(categoriesMap[category]);
    },[category, categoriesMap]);
    
    return(
        <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        {
            isLoading ? <Spinner/> :
            <div className='category-container'>
            {
                products && products.map((product) => <ProductCart key={product.id} product={product}/>)
            }
            </div>
        }
      
    </Fragment>
    )
};

export default Category;