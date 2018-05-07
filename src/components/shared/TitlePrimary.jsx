import { scope } from 'cssapi'
import styled from 'styled-components'
import api from '../styles/api'

const TitlePrimary = styled.h1`
  font-weight: bold;
  ${api({
    baseline: scope`s:primaryTitle`,
  })};
`

export default TitlePrimary
