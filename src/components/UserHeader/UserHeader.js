import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';



import { HeaderContainer, Header, Image, ViewResumeLink, LinksContainer } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();
  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>Coding in {user.basics.region}</p>
          <p>{user.basics.yearsOfExperience} year of experience as a developer</p>
          <p><strong>{user.basics.headline}</strong></p>
          <LinksContainer>
          <p>
            Email:{' '}
            <a href={'mailto: '+ user.basics.email} target="_blank"rel="noopener noreferrer" >
              {user.basics.email}
            </a>
          </p>
          {user.basics.profiles.map((e, i) =>(
            <p key={i}>{e.network + ': ' }
              <a href={e.url} target='_blank' rel="noopener noreferrer" >
                {e.url}
              </a>
            </p>
          ))}
          </LinksContainer>
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={`https://travisguillory.github.io/Portfolio/assets/Resume%20of%20Travis%20Guillory.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;