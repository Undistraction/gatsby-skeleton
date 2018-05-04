import styled from 'styled-components'
import api from '../styles/api'
import arrow from '../styles/mixins/arrow'

const DisabledArrowButtonLink = styled.div`
  z-index: 1;
  position: relative;
  display: block;
  cursor: default;
  color: transparent;
  user-select: none;
  ${p => arrow(p.direction, `0.6ru`, `c:disabled`)};
  ${api({
    padding: `0.4ru 1ru`,
    backgroundColor: `c:disabled`,
  })};
`

export default DisabledArrowButtonLink
