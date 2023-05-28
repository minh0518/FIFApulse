import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavBarProps } from '../../types/props';

export const Nav = styled.nav<NavBarProps>`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  //position: fixed;
  //z-index: 600;
  position: ${(props) => (props.page === 'MainSelect' ? 'fixed' : '')};
  z-index: ${(props) => (props.page === 'MainSelect' ? 600 : '')};
  background-color: ${(props) => (props.scrollPoint !== undefined && props.scrollPoint < 0.25 ? '' : 'white')};
  color: ${(props) => (props.scrollPoint !== undefined && props.scrollPoint < 0.25 ? 'white' : 'black')};
  box-shadow: ${(props) => (props.scrollPoint !== undefined && props.scrollPoint < 0.25 ? '' : '0px 5px 15px rgba(0,0,0,0.2)')};
  // props.scrollPoint && 으로 해버리면 scrollPoint가 0일때 최상단을 의미하므로 이대로 작동해야 하는데
  // JS에서는 falsy로 작동하므로 적용이 안 돼버림. 그러므로 !==undefined 조건으로 사용
`;

export const NavbarLogo = styled.div`
  font-size: 24px;
  background-color: transparent;
`;
export const LogoButton = styled.button`
  font-size: inherit;
  padding: 8px 12px;
  text-decoration: none;
  border: none;
  background-color: transparent; /* 직접 지정해 줘야 부모컴포넌트의 NavbarLogo->Nav 색상을 따라감 */
  color: inherit; /* 직접 지정해 줘야 부모컴포넌트의 NavbarLogo->Nav 색상을 따라감 */
  cursor: pointer;
`;

export const NavMenuUl = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

export const NavMenuList = styled.li`
  &:hover {
    background-color: forestgreen;
    border-radius: 4px;
    transform: translateY(-5px);
  }

  transition: background-color 0.3s ease, transform 0.3s ease;
  padding: 0 2em;
`;

export const LogoutButton = styled.button`
  padding: 8px 12px;
  text-decoration: none;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
export const NavMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* Link컴포넌트 안에 텍스트 중앙정렬 */

  padding: 8px 12px;
  text-decoration: none;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 600;
  color: inherit; /* Nav 컴포넌트의 글씨 색상을 사용 */
  cursor: pointer;
`;

export const NavIconsUl = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

export const NavIconsList = styled.li`
  padding: 8px 12px;
`;