import './category-item.style.scss';

const CategoryItem = ( { category }) =>{
    const { title, url} = category ;
    return(
        <div className="category__container"  style={{background: `url(${url})`}}>
        <div className="category__container-body">
        <h2>{title}</h2>
        <p>shop now</p>
        </div> 
        </div>
    )
}

export default CategoryItem;