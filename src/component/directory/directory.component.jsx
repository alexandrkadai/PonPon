import DirectoryItem from '../directory-item/directory-item.component';
import { CategoriesContainer } from './directory.style';

const Directory = ({categories}) => {
    
return (
    <CategoriesContainer>
      {categories.map((category) =>(
       < DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>


)

}
export default Directory;