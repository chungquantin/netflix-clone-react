import React from 'react';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
   return (
      <Accordion>
         <Accordion.Title>Câu hỏi thường gặp</Accordion.Title>
         {faqsData.map(({ id, header, body }) => {
            return (
               <Accordion.Item key={id}>
                  <Accordion.Header>{header}</Accordion.Header>
                  <Accordion.Body>{body}</Accordion.Body>
               </Accordion.Item>
            );
         })}
      </Accordion>
   );
}
