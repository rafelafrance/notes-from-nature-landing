import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import HeaderAuth from 'header/header-auth';

const Header = ({ inactiveWorkflows }) =>
  <div className="header">
    <Link className="first wide" to="/">Get Started</Link>
    <a target="_blank"
      href="https://www.zooniverse.org/projects/zooniverse/notes-from-nature/about/research"
    >
      About
    </a>
    <a target="_blank"
      href="https://www.zooniverse.org/projects/zooniverse/notes-from-nature/talk"
    >
      Talk
    </a>
    <a className="remove" target="_blank" href="https://blog.notesfromnature.org/">Blog</a>
    <a className="remove" target="_blank"
      href="https://www.zooniverse.org/projects/zooniverse/notes-from-nature/stats"
    >
      Statistics
    </a>
    {inactiveWorkflows.length
      ? <Link className="remove wide" to="/completed-expeditions">Completed Expeditions</Link>
      : ''
    }
    <a href="https://field-book.notesfromnature.org/" className="wide">Field Book</a>
    <div className="last">&nbsp;</div>
    <HeaderAuth />
  </div>;

Header.propTypes = {
  dispatch: PropTypes.func,
  bgClass: PropTypes.string,
  user: PropTypes.object,
  initialized: PropTypes.bool,
  inactiveWorkflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    initialized: state.login.initialized,
    inactiveWorkflows: state.workflows.inactiveWorkflows,
  };
}
export default connect(mapStateToProps)(Header);
