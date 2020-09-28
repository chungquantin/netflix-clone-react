import React from 'react';
import { Footer } from '../components';

export default function FooterContainer() {
   return (
      <Footer>
         <Footer.Title>Bạn có câu hỏi? Liên hệ với chúng tôi.</Footer.Title>
         <Footer.Break />
         <Footer.Row>
            <Footer.Column>
               <Footer.Link href="#">
                  <span>Câu hỏi thường gặp </span>
               </Footer.Link>
               <Footer.Link href="#">
                  <span>Quan hệ với nhà đầu tư </span>
               </Footer.Link>
               <Footer.Link href="#">
                  <span>Quyền riêng tư</span>
               </Footer.Link>
               <Footer.Link href="#">
                  <span>Kiểm tra tốc độ</span>
               </Footer.Link>
            </Footer.Column>
            <Footer.Column>
               <Footer.Link href="#">
                  <span> Trung tâm trợ giúp</span>
               </Footer.Link>
               <Footer.Link href="#">
                  <span> Việc làm</span>
               </Footer.Link>
               <Footer.Link href="#">
                  <span> Tùy chọn cookie</span>
               </Footer.Link>
               <Footer.Link href="#">
                  <span>Thông báo pháp lý</span>
               </Footer.Link>
            </Footer.Column>
            <Footer.Column>
               <Footer.Link href="#">
                  <span> Tài khoản</span>
               </Footer.Link>
               <Footer.Link href="#">
                  <span>Các cách xem</span>
               </Footer.Link>
               <Footer.Link href="#">
                  <span> Thông tin doanh nghiệp</span>
               </Footer.Link>
               <Footer.Link href="#">
                  <span>Tác phẩm của Netflix</span>
               </Footer.Link>
            </Footer.Column>
            <Footer.Column>
               <Footer.Link href="#">
                  <span> Trung tâm đa phương tiện</span>
               </Footer.Link>
               <Footer.Link href="#">
                  <span> Điều khoản sử dụng</span>
               </Footer.Link>
               <Footer.Link href="#">
                  <span> Liên hệ với chúng tôi</span>
               </Footer.Link>
            </Footer.Column>
         </Footer.Row>
         <Footer.Break />
         <Footer.Text>Netflix Việt Nam</Footer.Text>
      </Footer>
   );
}
