import styled from 'styled-components';
import flexVertical from '../../styles/mixins/flex-vertical';

export const LayoutHeader = styled.div``;
export const LayoutBody = styled.div``;

export default styled.div`
  ${flexVertical};

  ${LayoutHeader} {
    flex: 0 0 auto;
  }

  ${LayoutBody} {
    flex: 1 0 auto;
  }
`;

// ${props => props.theme.qs.aboveMediumWidth`
// background-color: ${props.theme.bg};
// `};
