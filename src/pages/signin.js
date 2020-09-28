import React, { Fragment, useState } from 'react';
import { HeaderContainer, FooterContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

function SignIn() {
   const [emailAddress, setEmailAddress] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');

   const isEmpty = password === '' || emailAddress === '';

   const handleSignin = (e) => {
      e.preventDefault();

      //firebase works here
   };

   return (
      <Fragment>
         <HeaderContainer buttonShow={false}>
            <Form>
               <Form.Title>Đăng nhập</Form.Title>
               {error && <Form.Error>{error}</Form.Error>}

               <Form.Base onSubmit={handleSignin} method="POST">
                  <Form.Input
                     placeholder="Email hoặc số điện thoại"
                     type="emailAddress"
                     autoComplete="off"
                     value={emailAddress}
                     onChange={({ target }) => setEmailAddress(target.value)}
                  />
                  <Form.Input
                     placeholder="Mật khẩu"
                     type="password"
                     autoComplete="off"
                     value={password}
                     onChange={({ target }) => setPassword(target.value)}
                  />
                  <Form.Submit>Đăng nhập</Form.Submit>
               </Form.Base>
               <Form.Text>
                  Bạn mới tham gia Netflix? <Form.Link to={ROUTES.HOME}>Đăng ký ngay.</Form.Link>
               </Form.Text>
               <Form.TextSmall>
                  Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot.
               </Form.TextSmall>
            </Form>
         </HeaderContainer>
         <FooterContainer />
      </Fragment>
   );
}

export default SignIn;
