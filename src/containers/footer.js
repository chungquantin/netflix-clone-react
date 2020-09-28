import React from 'react';
import { Footer } from '../components';

export default function FooterContainer() {
   return (
      <Footer>
         <Footer.Title>Bạn có câu hỏi? Liên hệ với chúng tôi.</Footer.Title>
         <Footer.Break />
         <Footer.Row>
            <Footer.Column>
               <Footer.Link href="https://help.netflix.com/vi/node/412">
                  <span>Câu hỏi thường gặp </span>
               </Footer.Link>
               <Footer.Link href="https://www.netflixinvestor.com/ir-overview/profile/default.aspx">
                  <span>Quan hệ với nhà đầu tư </span>
               </Footer.Link>
               <Footer.Link href="https://help.netflix.com/legal/privacy">
                  <span>Quyền riêng tư</span>
               </Footer.Link>
               <Footer.Link href="https://fast.com/">
                  <span>Kiểm tra tốc độ</span>
               </Footer.Link>
            </Footer.Column>
            <Footer.Column>
               <Footer.Link href="https://help.netflix.com/vi/">
                  <span> Trung tâm trợ giúp</span>
               </Footer.Link>
               <Footer.Link href="https://jobs.netflix.com/">
                  <span> Việc làm</span>
               </Footer.Link>
               <Footer.Link href="https://help.netflix.com/legal/privacy#cookies">
                  <span> Tùy chọn cookie</span>
               </Footer.Link>
               <Footer.Link href="https://help.netflix.com/legal/notices">
                  <span>Thông báo pháp lý</span>
               </Footer.Link>
            </Footer.Column>
            <Footer.Column>
               <Footer.Link href="https://www.netflix.com/vn/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">
                  <span> Tài khoản</span>
               </Footer.Link>
               <Footer.Link href="https://devices.netflix.com/en/">
                  <span>Các cách xem</span>
               </Footer.Link>
               <Footer.Link href="https://help.netflix.com/vi/node/2101">
                  <span> Thông tin doanh nghiệp</span>
               </Footer.Link>
               <Footer.Link href="https://www.netflix.com/vn/browse/genre/839338">
                  <span>Tác phẩm của Netflix</span>
               </Footer.Link>
            </Footer.Column>
            <Footer.Column>
               <Footer.Link href="https://media.netflix.com/">
                  <span> Trung tâm đa phương tiện</span>
               </Footer.Link>
               <Footer.Link href="https://help.netflix.com/legal/termsofuse">
                  <span> Điều khoản sử dụng</span>
               </Footer.Link>
               <Footer.Link href="https://help.netflix.com/vi/contactus">
                  <span> Liên hệ với chúng tôi</span>
               </Footer.Link>
            </Footer.Column>
         </Footer.Row>
         <Footer.Break />
         <Footer.Text>Netflix Việt Nam</Footer.Text>
      </Footer>
   );
}
