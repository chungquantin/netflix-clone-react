import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container, Logo, Button } from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
   return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
   return <Button {...restProps}>{children}</Button>;
};

Header.Logo = function HeaderLogo({ des, children, ...restProps }) {
   return (
      <ReactRouterLink to={des}>
         <Logo {...restProps} />
      </ReactRouterLink>
   );
};
