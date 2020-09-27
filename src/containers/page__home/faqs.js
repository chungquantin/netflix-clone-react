import React from 'react';
import { Accordion, OptForm } from '../../components';
import faqsData from '../../fixtures/faqs.json';

export default function FaqsContainer() {
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
         <OptForm.Break />
         <OptForm>
            <OptForm.Text>
               Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của
               bạn.
            </OptForm.Text>
            <OptForm.Input placeholder="Địa chỉ email" />
            <OptForm.Button>Bắt đầu</OptForm.Button>
         </OptForm>
         <OptForm.Break />
      </Accordion>
   );
}
