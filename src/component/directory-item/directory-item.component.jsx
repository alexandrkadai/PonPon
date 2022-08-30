import './directory-item.style.scss';

const DirectoryItem = ( { category }) => {
    const { title, url } = category ;
    return(
        <div className="directory-item-container"  style={{background: `url(${url})`}}>
        <div className="body">
        <h2>{title}</h2>
        <p>shop now</p>
        </div> 
        </div>
    )
}

export default DirectoryItem;