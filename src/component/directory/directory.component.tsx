import { Key } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import { CategoriesContainer } from './directory.style';

export type DirectoryCategory = {
  id: Key;
  title: string;
  url: string;
  route: string;
};

const categoriesArray: DirectoryCategory[] = [
  {
    id: 1,
    title: 'hats',
    url: 'https://images.unsplash.com/photo-1463701700197-69d4180d3ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1687&q=80',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    url: 'https://images.unsplash.com/photo-1616633471671-7c540aa09536?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    url: 'https://images.unsplash.com/photo-1660866838287-d2239bb99976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    url: 'https://images.pexels.com/photos/8987046/pexels-photo-8987046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    url: 'https://images.unsplash.com/photo-1626847152272-c64724db41c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <CategoriesContainer>
      {categoriesArray.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};
export default Directory;
