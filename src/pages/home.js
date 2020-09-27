import React, { Fragment } from 'react';
import { OptForm, Feature } from '../components';
import { JumbotronContainer, FaqsContainer, HeaderContainer } from '../containers/page__home';
import { FooterContainer } from '../containers';

export default function Home() {
   return (
      <Fragment>
         <HeaderContainer>
            <Feature>
               <Feature.Title>100% giải trí. 90.000₫ cho 30 ngày đầu của bạn.</Feature.Title>
               <Feature.SubTitle>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</Feature.SubTitle>
            </Feature>
            <OptForm>
               <OptForm.Text>
                  Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên
                  của bạn.
               </OptForm.Text>
               <OptForm.Break />
               <OptForm.Input placeholder="Địa chỉ email" />
               <OptForm.Button>Thử ngay với 90.000 đ</OptForm.Button>
               <OptForm.Break />
               <OptForm.Text>
                  Chỉ các thành viên mới mới đủ điều kiện nhận được ưu đãi này.
               </OptForm.Text>
            </OptForm>
         </HeaderContainer>
         <JumbotronContainer />
         <FaqsContainer />
         <FooterContainer />
      </Fragment>
   );
}
