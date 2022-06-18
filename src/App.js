import CategoriesContainer from './component/category-container/categories-container';

import './categories.style.scss';

const App = () => {

  const categories =[
    {
      id : 1,
      title: 'hats',
      url: 'https://images.freeimages.com/images/large-previews/2d8/spring-1397821.jpg'
    },
    {
      id : 2,
      title: 'jackets',
      url: 'https://images.freeimages.com/images/large-previews/2d8/spring-1397821.jpg'
    },
    {
      id : 3,
      title: 'shoes',
      url: 'https://images.freeimages.com/images/large-previews/2d8/spring-1397821.jpg'
    },
    {
      id : 4,
      title: 'women',
      url: 'https://images.freeimages.com/images/large-previews/2d8/spring-1397821.jpg'
    },
    {
      id : 5,
      title: 'men',
      url: 'https://images.freeimages.com/images/large-previews/2d8/spring-1397821.jpg'
    },
  ];
  return (
    < CategoriesContainer categories={categories}/>
  );
}

export default App;
