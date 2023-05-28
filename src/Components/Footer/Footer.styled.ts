import styled from 'styled-components';
import { FooterProps } from '../../types/props';

export const FooterContainerDiv = styled.div<FooterProps>`
  height: 7%; // MainSelect에서 사용되는 나머지 요소들의 높이가 총합 93%이므로 나머지 영역 사용
  // border-top: 1px solid gray;
  box-shadow: inset 0 0.2px 0 0 #000; // 보다 더 얇은 border를 위쪽에만 적용
  display: ${(props) => (props.scrollPoint !== undefined && props.scrollPoint >= 0.59 ? 'flex' : 'none')};
  justify-content: space-around;
  align-items: center;
`;

export const CopyrightsDiv = styled.div`
  font-size: 1rem;
  color: gray;
`;

export const ContactAndGitHubDiv = styled.div`
  display: flex;
`;
export const ContactDiv = styled.div`
  padding-right: 15%;
  font-size: 1rem;
  color: gray;
`;

export const GitHubDiv = styled.div`
  padding-left: 15%;
  font-size: 1rem;
  color: gray;
`;