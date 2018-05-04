import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { isHomePage } from '../../../../helpers/paths'
import Button from '../../../../shared/Button'
import api from '../../../../styles/api'
import linkProps from '../../../../styles/mixins/linkProps'
import underlineHover from '../../../../styles/mixins/underlineHover'

const Link = styled(Button).attrs({
  activeClassName: `isActive`,
})`
  ${linkProps(`c:white`, `c:highlight`)};
  background: transparent;
  letter-spacing: 0.5px;
  ${underlineHover(`c:grey`)};

  &.isActive {
    ${api({
      color: `c:highlight`,
    })};
  }
`

const SiteNavLink = ({ page }) => (
  <Link exact={isHomePage(page.path)} to={page.path}>
    {page.title}
  </Link>
)

SiteNavLink.propTypes = {
  page: PropTypes.object.isRequired,
}

export default SiteNavLink
