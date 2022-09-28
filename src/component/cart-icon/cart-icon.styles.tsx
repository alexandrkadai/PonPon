import styled from 'styled-components';

export const CartIconContainer = styled.div`
  bottom: 5px;
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  cursor: pointer;
  ShoppingIcon {
    width: 24px;
    height: 24px;
  }
`;
//END

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 13px;
`;
//END
