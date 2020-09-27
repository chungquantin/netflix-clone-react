import styled from 'styled-components/macro';

const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

const Title = styled.div`
   color: white;
   max-width: 640px;
   font-size: 70px;
   font-weight: bold;
   margin: auto;
   @media (max-width: 600px) {
      font-size: 35px;
   }
`;

const SubTitle = styled.div`
   color: white;
   max-width: 640px;
   font-size: 26px;
   font-weight: normal;
   margin: 16px auto;
   @media (max-width: 600px) {
      font-size: 35px;
   }
`;

export { Title, SubTitle, Container };
