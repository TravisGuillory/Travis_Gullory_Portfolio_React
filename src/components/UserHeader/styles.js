import styled from 'styled-components';
import { black, blue, coolGray } from '@carbon/colors';


export const HeaderContainer = styled.div`
    display:flex;
    justify-content: space-betweem;
    @meda(max-width: 640px){
        display: $(({ isHome}) =>(!isHome ? 'none' :  'flex' ));
    }
`

export const Header = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const LinksContainer = styled.span`
display: inline-block;
margin-top: 0.5rem;

margin-bottom: 0.75rem;
padding: 0.5rem 0.5rem;
background-color: ${coolGray[50]};
color: ${blue[90]};
border: 3px solid ${blue[60]};S
border-radius: 10px;
font-weight: bold;
`; 

export const Image = styled.img`
  width: 200px;
  margin-right: 1rem;
  border-radius: 2px;
`; 

export const ViewResumeLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;
  &:hover {
    background-color: ${coolGray[10]};
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;