import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
//END
export const ImageContainer = styled.div`
  width: 20%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
//END
export const Name = styled.span`
  font-size: 15px;
  font-weight: bold;
  width: 23%;
`;
//END

export const Quantity = styled.div`
  display: flex;
  width: 23%;
`;
//END

export const Price = styled.span`
  display: flex;
  width: 23%;
`;
//END

export const Arrow = styled.span`
  position: relative;
  cursor: pointer;
  bottom: 2px;
`;
//END

export const Value = styled.span`
  margin: 0 10px;
`;
//END

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
//END
