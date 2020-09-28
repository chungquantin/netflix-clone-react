import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

const Container = styled.div`
   max-width: 1600px;
   width: 100%;
   margin: 0px auto;
   align-items: center;
   justify-content: space-between;
   padding: 30px 0px;
   padding-bottom: 80px;
   display: flex;
`;

const Logo = styled.img`
   width: 190px;
   padding: 0px 30px;
   @media (max-width: 1440px) {
      width: 157px;
   }
   @media (max-width: 900px) {
      width: 131px;
   }
   @media (max-width: 550px) {
      width: 113px;
   }
`;

const Background = styled.div`
   display: flex;
   flex-direction: column;
   background: url(${({ src }) =>
         src ? `../assets/images/misc/${src}.jpg` : '../assets/images/misc/home-bg.jpg'})
      top left / cover no-repeat;
   border-bottom: 8px solid #222;
`;

const Button = styled(ReactRouterLink)`
   display: block;
   margin: 0px 20px;
   background-color: #e50914;
   width: fit-content;
   height: fit-content;
   color: white;
   border: 0;
   font-size: 15px;
   border-radius: 3px;
   padding: 9px 17px;
   cursor: pointer;
   text-decoration: none;
   box-sizing: border-box;

   &:hover {
      background-color: #f40612;
   }
`;

export { Container, Logo, Background, Button };
