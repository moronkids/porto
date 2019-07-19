import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './css/style.css';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto', paddingBottom:"30px"}}>


            <div className="banner-text">
              <h1 className='teks'>Web Dev.</h1>
            <hr/>

          <p className='teks'>PHP | Slim | Laravel | JavaScript | React JS | Python | Django | PostGre SQL | MySql </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sulistyo-ardani-a30059179/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square ikon"  aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com/moronkids"  rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square ikon"  aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/SulistyoArdani" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-facebook-square ikon" aria-hidden="true"></i>
          </a>

        </div>
            </div>
      </div>
    )
  }
}

export default Landing;