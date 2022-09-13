import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .title {
      font-size: 28px;
      margin-bottom: 25px;
      cursor: pointer;
      text-decoration: none ;
      color: black;
  
    }
    h2{
      text-align: center ;
    }
   
  `;
  //END

export const Preview = styled.div`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
`;
//END