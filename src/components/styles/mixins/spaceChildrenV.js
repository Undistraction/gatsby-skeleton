import { css } from 'styled-components'
import mixin from '../../helpers/mixin'

const spaceChildrenV = api => values => css`
  & > * + * {
    ${api({ marginTop: values })};
  }
`

export default mixin(spaceChildrenV)
