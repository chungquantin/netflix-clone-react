import React from 'react';
import { Inner, Container, Pane, SubTitle, Image, Title, Item } from './styles/jumbotron';

function Jumbotron({ children, direction = 'row' }) {
   return (
      <Item>
         <Inner direction={direction}>{children}</Inner>
      </Item>
   );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
   return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
   return <Image {...restProps} />;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
   return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
   return <Title {...restProps}>{children}</Title>;
};

export default Jumbotron;
