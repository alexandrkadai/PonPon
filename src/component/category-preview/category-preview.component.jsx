import { Link } from 'react-router-dom';

import ProductCart from '../product-cart/product-cart.component';
import { CategoryPreviewContainer, Preview } from './category-preview.style';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <Preview>
        {
          //preview of 4 first items
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCart key={product.id} product={product} />
            ))
        }
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
