import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'
import Francogments from '../assets/smolfrancogments.svg'

const ListLink = props => (
  <li
    style={{
      textDecoration: 'none',
      marginLeft: 20,
      marginBottom: 0,
    }}
  >
    <Link
      style={{
        color: 'black',
        textDecoration: 'none',
        margin: 0,
        fontFamily: 'Chivo-regular',
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      maxWidth: '100%',
      margin: '0',
      marginTop: '20px',
      marginBottom: '20px',
      padding: '1.45rem 1.0875rem',
      display: 'flex',
      flexDirection: 'row',
      flexFlow: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <Link
      to="/"
      style={{
        color: 'Black',
        textDecoration: 'none',
        margin: 0,
      }}
    >
      <img
        id="home"
        css={css`
          width: 50px;
          margin-left: 40px;
        `}
        src={Francogments}
        alt="Francogments SVG Animated Logo"
      />
    </Link>
    <ul
      css={css`
        list-style-type: none;
        display: flex;
        margin: 0;
        margin-right: 40px;
      `}
    >
      <ListLink to="/">work</ListLink>
      <ListLink to="/projects">projects</ListLink>
      <ListLink to="/blog">writing</ListLink>
      <ListLink to="/about">about me</ListLink>
    </ul>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
