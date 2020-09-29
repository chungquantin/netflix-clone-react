import React, { Fragment, useState, useEffect, useContext } from 'react';
import { ProfileContainer } from './index';
import { FirebaseContext } from '../context/firebase';
import { Loading, Header } from '../components';

function BrowseContainer({ slides }) {
   const [searchTerm, setSearchTerm] = useState('');
   const [profile, setProfile] = useState({});
   const [loading, setLoading] = useState(true);
   const { firebase } = useContext(FirebaseContext);
   const user = JSON.parse(localStorage.getItem('authUser')) || {};

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, [profile.displayName]);

   return profile.displayName ? (
      <Fragment>
         {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
         <Header src="joker1" className="browse-header" dontShowOnSmallViewPort="true">
            <Header.Frame>
               <Header.Group>
                  <Header.Logo
                     to={'#'}
                     src="https://fontmeme.com/permalink/200928/ea97e0e8139165beaa10a243a708d312.png"
                     alt="Netflix"
                  />
                  <Header.TextLink>Series</Header.TextLink>
                  <Header.TextLink>Films</Header.TextLink>
               </Header.Group>
               <Header.Group>
                  <Header.Search searchTerm={searchTerm} serSearchTerm={setSearchTerm} />
                  <Header.Profile>
                     <Header.Avatar src={user.photoURL} />
                     <Header.Dropdown>
                        <Header.Group>
                           <Header.Avatar src={user.photoURL} />
                           <Header.TextLink>{user.displayName}</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                           <Header.TextLink onClick={() => firebase.auth().signOut()}>
                              Sign out
                           </Header.TextLink>
                        </Header.Group>
                     </Header.Dropdown>
                  </Header.Profile>
               </Header.Group>
            </Header.Frame>
            <Header.Feature>
               <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
               <Header.Text>
                  In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and
                  mistreated by society. He then embarks on a downward spiral of revolution and
                  bloody crime. This path brings him face-to-face with his alter-ego: the Joker.
               </Header.Text>
            </Header.Feature>
         </Header>
      </Fragment>
   ) : (
      <ProfileContainer user={user} setProfile={setProfile} />
   );
}

export default BrowseContainer;
