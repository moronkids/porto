import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './css/style.css';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto', paddingBottom: '12px'}}>


            <div className="banner-text">
              <h1 className='teks'>Web Dev.</h1>
            <hr/>

          <p className='teks'>PHP | Slim | Laravel | JavaScript | React JS | Python | Django | PostGre SQL | MySql </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square ikon"  aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com"  rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square ikon"  aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square ikon"  aria-hidden="true" />
          </a>

        </div>
            </div>
      </div>
    )
  }
}

export default Landing;