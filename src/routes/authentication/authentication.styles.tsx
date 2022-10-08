import styled from 'styled-components';

export const AuthenticationContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    width: auto;
    column-gap: 100px;
  }
`;
//end
