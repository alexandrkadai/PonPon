import styled from 'styled-components';

type BackgtoundImageProps = {
  url: string;
};

export const BodyButton = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 2px solid black;
  padding: 0 25px;
  text-align: center;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    text-transform: uppercase;
    font-weight: lighter;
    font-size: 16px;
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    height: 70px;
    width: 50px;

    h2 {
      font-size: 18px;
      margin-bottom: 0px;
      width: 100px;
    }
    p {
      font-size: 13px;
      width: 100px;
    }
  }
`;
//END

export const BackgroundImage = styled.div<BackgtoundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ url }) => `url(${url})`};
`;
//end

export const DirectoryItemContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: left;
  align-items: left;
  min-width: 30%;
  height: 240px;
  margin: 15px 15px;
  border: 1px solid black;
  background-position: top;
  background-size: cover;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 2s ease;

    & ${BackgroundImage} {
      transform: scale(1.2);
      transition: 2s ease;
    }
    & ${BodyButton} {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
//END
