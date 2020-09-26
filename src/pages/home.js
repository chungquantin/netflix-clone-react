import React from 'react';

function home() {
   return (
      <Jumbotron.Container>
         {jumboData.map(({ id, title, subTitle, image, alt, direction }) => (
            <Jumbotron key={id} direction={direction}>
               <Jumbotron.Pane>
                  <Jumbotron.Title>{title}</Jumbotron.Title>
                  <Jumbotron.SubTitle>{subTitle}</Jumbotron.SubTitle>
               </Jumbotron.Pane>
               <Jumbotron.Pane>
                  <Jumbotron.Image src={image} alt={alt} />
               </Jumbotron.Pane>
            </Jumbotron>
         ))}
      </Jumbotron.Container>
   );
}

export default home;
