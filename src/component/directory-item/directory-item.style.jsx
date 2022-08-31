import styled from 'styled-components';

export const Body = styled.div`
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
       
        h2{
            font-size: 22px;
            font-weight: bold;
            text-transform: uppercase;
        }

        p{
            text-transform: capitalize;
            font-weight: lighter;
            font-size: 16px;
        }

`;
//END

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({url}) => `url(${url})`};
`;
//end

export const DirectoryItemContainer = styled.div`
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    min-width: 30%;
    height: 240px;
    margin: 15px 15px;
    border: 1px solid black;
    background-position:center;
    background-size:cover;
    overflow: hidden;
    
    &:hover{
        cursor:pointer;
        opacity: 0.7;
        transition: 2s ease;
       

         & ${BackgroundImage}{
            transform: scale(1.2);
            transition: 2s ease;
            
        }
        & ${Body}{
            opacity: 0.9;
        }
        }
        &:first-child{
            margin-right: 7.5px;
        }
        
        &:last-child{
            margin-left: 7.5px;
        }

`;
//END

