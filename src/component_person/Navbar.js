import React, { Component } from 'react';
import './css/animate.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/navbar.css';
// import './css/owl.carousel.min.css';
import './css/responsive.css';
// import './css/style.css';
import onClickOutside from "react-onclickoutside";
import { Navbar, Collapse} from 'reactstrap';
class Nvb extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false }; 
        this.handleScroll = this.handleScroll.bind(this);      
      }
      
      toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
      }
      handleClickOutside = () => {
        const collapse = this.state.collapse;
        if(collapse){
          this.setState(state => ({ collapse: !state.collapse }));
        }
      }

      handleScroll() {
          this.setState({scroll: window.scrollY});
      }
    
      componentDidMount() {
          const el = document.querySelector('nav');
          this.setState({top: el.offsetTop, height: el.offsetHeight});
          window.addEventListener('scroll', this.handleScroll);
      }
    
      componentDidUpdate() {
          this.state.scroll > this.state.top ? 
              document.body.style.paddingTop = 0 :
              document.body.style.paddingTop = 0;
      }
      render() {
        return (
          <div>
                        {/* <Navbar className="navbar navbar-yeis navbar-custom bootstrap-iso navbar navbar-default navbar-absolute navbar-expand-lg align-items-center">
                        <Navbar className="navbar navbar-yeis navbar-custom bootstrap-iso navbar navbar-default navbar-absolute navbar-expand-lg align-items-center"> */}
                        <nav className={this.state.scroll > this.state.top ? "navbar navbar-yeis navbar-custom bootstrap-iso navbar navbar-default navbar-absolute navbar-expand-lg " : "navbar navbar-yeis navbar-custom bootstrap-iso navbar navbar-default navbar-absolute navbar-expand-lg align-items-center"}>
                            <button onClick={this.toggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mosh-navbar" aria-controls="mosh-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                            <Collapse isOpen={this.state.collapse} className="collapse navbar-collapse justify-content-end" id="mosh-navbar">
                                <ul className="navbar-nav animated" id="nav">
                                    <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="moshDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <div className="dropdown-menu" aria-labelledby="moshDropdown">
                                            <a className="dropdown-item" href="index.html">Home</a>
                                            <a className="dropdown-item" href="about.html">About Us</a>
                                            <a className="dropdown-item" href="services.html">Services</a>
                                            <a className="dropdown-item" href="portfolio.html">Portfolio</a>
                                            <a className="dropdown-item" href="blog.html">Blog</a>
                                            <a className="dropdown-item" href="contact.html">Contact</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="elements.html">Elements</a>
                                        </div>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                                    <li className="nav-item"><a className="nav-link" href="services.html">Services</a></li>
                                    <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
                                    <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                </ul>
        
                            </Collapse>
                        </nav>
                    </div>


        );
      }
}

export default onClickOutside(Nvb);
