import React from 'react'
import PropTypes from 'prop-types'
import Link, { push } from 'gatsby-link'
import userIcon from '../../assets/user.png'
import styled from 'styled-components'
import { Flex, ButtonTransparent, Badge } from 'rebass'
import NotificationIcon from '../../assets/shopping-list.svg'
import AnalyticsIcon from '../../assets/bar-chart.svg'
import Button from '../Elements/Button'

const Nav = styled.div`
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: 7;
`
const Notification = styled(Badge)`
  position: absolute;
  padding: 1px 4px;
  border-radius: 8px;
  right: 7px;
  top: 3px;
`

const NotificationButton = styled(ButtonTransparent)`
  position: relative;
`

const BottomNavBar = props => {
  return (
    <Nav>
      <Flex justifyContent="space-between" alignItems="center">
        <NotificationButton>
          <Link to="/notifications">
            <Notification bg="red"> 2 </Notification>
            <img width={25} src={NotificationIcon} alt="" />
          </Link>
        </NotificationButton>

        <Button>Approved</Button>

        <ButtonTransparent>
          <img width={25} src={AnalyticsIcon} alt="" />
        </ButtonTransparent>
      </Flex>
    </Nav>
  )
}

BottomNavBar.defaultProps = {
  src: userIcon,
}
BottomNavBar.propTypes = {
  src: PropTypes.string,
}

export default BottomNavBar
