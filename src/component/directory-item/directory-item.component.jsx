import {DirectoryItemContainer, Body, BackgroundImage} from './directory-item.style';

const DirectoryItem = ( { category }) => {
    const { title, url } = category ;
    return(
        <DirectoryItemContainer >
        <BackgroundImage url={url} />
        
        <Body>
        <h2>{title}</h2>
        <p>shop now</p>
        </Body> 
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;