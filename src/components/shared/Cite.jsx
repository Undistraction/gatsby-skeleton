import { api, scope } from 'cssapi'
import styled from 'styled-components'

const Cite = styled.blockquote`
  ::before {
    content: '⸻ ';
  }
  ${api({
    marginTop: scope`-0.5ru`,
    paddingLeft: scope`2.5ru`,
    baseline: scope`s:smallprint`,
  })};
`

export default Cite
