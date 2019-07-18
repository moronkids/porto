import React, {Component} from 'react';
// import './css/footer/demo.css';
// import './css/footer/footer-basic-centered.css';
import './css/footer/footer-distributed-with-address-and-phones.css';
// import './css/footer/footer-distributed-with-contact-form.css';
// import './css/footer/footer-distributed-with-search.css';
// import './css/footer/footer-distributed.css';
class Footer extends Component {
    render() {
        return(
            <footer class="footer-distributed">

			<div class="footer-left">

				<h3>Company<span>logo</span></h3>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>21 Revolution Street</span> Paris, France</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1 555 123456</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					{/* <a href="#"><i class="fa fa-twitter"></i></a> */}
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
        )
    }
}
export default Footer;