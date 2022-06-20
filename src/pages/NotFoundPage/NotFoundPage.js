import React from 'react';
import PropTypes from 'prop-types';
import './NotFoundPage.css';

const NotFoundPage = () => (
  <div className="not-found-page">
   <h1 className="h1">404</h1>

<div class="frame">
    <div></div>
    <div></div>
    <div></div>
</div>
<div class="caps"><img src="http://ademilter.com/caps.png" alt="" /></div>
<canvas id="canvas"></canvas>
  </div>
);

NotFoundPage.propTypes = {};

NotFoundPage.defaultProps = {};

export default NotFoundPage;
