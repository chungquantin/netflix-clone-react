import React from 'react';
import { Header } from '../../components';
import * as ROUTES from '../../constants/routes';

export default function WallpaperContainer({ children }) {
   return (
      <Header>
         <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src="/assets/images/logo/netflix.png" alt="Netflix" />
            <Header.Button to={ROUTES.SIGN_IN}>Đăng nhập</Header.Button>
         </Header.Frame>
         {children}
      </Header>
   );
}
