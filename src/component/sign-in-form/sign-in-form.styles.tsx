import styled from 'styled-components';

export const SignUpContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin-top: 10px 0;
  }
  @media screen and (max-width: 800px) {
    padding: 5px;
  }
`;
//END
export const ButtonsContainerDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
//END
