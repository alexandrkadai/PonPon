import styled from 'styled-components';

export const ProductCartContainerDiv = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 1px solid black;
  padding-bottom: 20px;

  @media screen and (max-width: 800px) {
    padding-bottom: 25px;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;
//END

export const FooterDiv = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
//END

export const NameSpn = styled.span`
  width: 90%;
  margin-bottom: 15px;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
//END

export const PriceSpn = styled.span`
  margin-right: 10px;
  float: right;
  @media screen and (max-width: 800px) {
    margin-right: 5px;
  }
`;
//END
