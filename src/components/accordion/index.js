import React, { createContext, useState, userContext } from 'react';
import { Title, Frame, Item, Header, Body } from './styles/accordion.js';

const ToggleContext = createContext();

function Accordion({ children, ...restProps }) {
   return (
      <Container {...restProps}>
         <Inner>{children}</Inner>
      </Container>
   );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
   return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
   return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
   useState[(toggleShow, setToggleShow)] = true;

   return (
      <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
         <Item {...restProps}>{children}</Item>
      </ToggleContext.Provider>
   );
};

Accordion.Header = function AccordionItem({ children, ...restProps }) {
   const { toggleShow, setToggleShow } = userContext(ToggleContext);
   return (
      <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
         {children}
      </Header>
   );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
   const { toggleShow } = useContext(ToggleContext);

   return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
