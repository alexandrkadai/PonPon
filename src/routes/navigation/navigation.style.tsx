import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    padding: 10px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  .logo {
    position: relative;
    bottom: 25px;
  }
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;

    .logo {
      top: 5px;
    }
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 70%;

    &:last-child {
      margin-right: 30px;
    }
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
`;
