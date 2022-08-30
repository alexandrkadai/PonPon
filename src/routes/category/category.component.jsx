import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../context/categories.context';
import './category.styles.scss';

const Category = () =>{
const {category } = useParams();
};

export default Category;