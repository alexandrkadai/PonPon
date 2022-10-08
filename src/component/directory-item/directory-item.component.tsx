import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DirectoryItemContainer, BodyButton, BackgroundImage } from './directory-item.style';
import { DirectoryCategory } from '../directory/directory.component';

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, url } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(`shop/` + title);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage url={url} />

      <BodyButton>
        <h2>{title}</h2>
        <p>shop now</p>
      </BodyButton>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
