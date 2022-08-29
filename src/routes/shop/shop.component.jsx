import { CategoriesContext } from '../../context/categories.context';
import { useContext } from 'react';
import CategoryPreview from '../../component/category-preview/category-preview.component';


import './shop.styles.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className='shop-container'>
            { Object.keys(categoriesMap).map(title =>{
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />
            }
                   
            )}
        </div>
    );
}

export default Shop;