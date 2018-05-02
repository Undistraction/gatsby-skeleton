import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Credit from './Credit'
import Copyright from './Copyright'
import blockCenterH from '../../styles/mixins/blockCenterH'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import api from '../../styles/api'
import { currentYear } from '../../helpers/date'

const Layout = styled.footer`
  text-align: center;
  ${blockCenterH};
  ${spaceChildrenV('1ru')};

  ${api({
    padding: '4ru 0 1ru',
    baseline: 's:smallprint',
  })};

  > * {
    ${api({
      margin: ['0 auto 1ru'],
    })};
  }
`

const SiteFooter = ({ owner, startYear, showCredit }) => {
  const endYear = currentYear()
  console.log('END YEAR', endYear)

  const dateRange = endYear === startYear ? endYear : `${startYear}–${endYear}`

  return (
    <Layout>
      <Copyright owner={owner} dateRange={dateRange} />
      {showCredit && <Credit />}
    </Layout>
  )
}

SiteFooter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  owner: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  showCredit: PropTypes.bool.isRequired,
}

export default SiteFooter