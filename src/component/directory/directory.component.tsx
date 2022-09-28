import { FC } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import { CategoriesContainer } from './directory.style';

type DirectoryProps = {
  id: number;
  title: string;
  url: string;
  route: string;
  categories: DirectoryProps[];
};

const Directory: FC<DirectoryProps> = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};
export default Directory;
