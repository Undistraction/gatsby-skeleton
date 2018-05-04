import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Logo from '../shared/Logo'
import TextLink from '../shared/TextLink'
import spinOnYAxis from '../styles/animations/spinOnYAxis'
import api from '../styles/api'
import flexHorizontal from '../styles/mixins/flexHorizontal'
import flexVertical from '../styles/mixins/flexVertical'
import spaceChildrenH from '../styles/mixins/spaceChildrenH'
import spaceChildrenV from '../styles/mixins/spaceChildrenV'

const Four = styled.div``
const LogoWrapper = styled.div``
const Layout = styled.div`
  ${flexVertical};
  ${spaceChildrenV(`2ru`)};
  text-align: center;
  ${LogoWrapper} {
    animation: ${spinOnYAxis(3)} 3s cubic-bezier(0.165, 0.84, 0.44, 1);
    ${api({
      width: `200`,
    })};
  }
`

const Header = styled.header`
  ${flexHorizontal};
  ${spaceChildrenH(`-3ru`)};
  align-items: center;
  ${api({
    fontSize: `s:giant`,
    fontFamily: `f:title`,
    marginH: `auto`,
  })};
`

const Body = styled.div``

const NotFoundMessage = ({ path }) => (
  <Layout>
    <Header>
      <Four>4</Four>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Four>4</Four>
    </Header>
    <Body>
      <p>
        There was no page at <i>{path}</i>.
      </p>
      <p>
        Would you like to go to the <TextLink to="/">Home page</TextLink>?
      </p>
    </Body>
  </Layout>
)

NotFoundMessage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default NotFoundMessage
