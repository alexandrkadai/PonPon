import CategoryItem from '../category-item/category-item.component';
import './categories-container.style.scss';

const CategoriesContainer = ({categories}) => {
    const {id} = categories;
return (
    <div className="categories-container">
      {categories.map((category) =>(
       < CategoryItem key={id} category={category} />
      ))}
    </div>


)

}
export default CategoriesContainer;