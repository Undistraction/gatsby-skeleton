import { api } from 'cssapi'
import styled from 'styled-components'
import linkProps from '../../styles/mixins/linkProps'
import BaseLink from '../links/BaseLink'

const FootnoteRef = styled(BaseLink)`
  ${linkProps(`c:text`, `c:highlight`)};
  ${api({
    baseline: `s:smallprint`,
  })};
`

FootnoteRef.displayName = `FootnoteRef`

export default FootnoteRef
