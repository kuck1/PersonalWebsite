
import React from 'react';

export default Body;

  var Body = React.createClass({
  render: function() {
    return (
      <div> 
        <div className="slider-wrap">
          <section className="home-slider owl-carousel">
            <div className="slider-item" style={{backgroundImage: 'url("img/hero_1.jpg")'}}>
              <div className="container">
                <div className="row slider-text align-items-center justify-content-center">
                  <div className="col-md-8 text-center col-sm-12 ">
                    <h1 data-aos="fade-up mb-5">Eat, Drinks at Gourmet</h1>
                    <p data-aos="fade-up" data-aos-delay={200}><a href="#" className="btn btn-white btn-outline-white">Get Started</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item" style={{backgroundImage: 'url("img/hero_2.jpg")'}}>
              <div className="container">
                <div className="row slider-text align-items-center justify-content-center">
                  <div className="col-md-8 text-center col-sm-12 ">
                    <h1 data-aos="fade-up mb-5">Enjoy delicious food at Gourmet</h1>
                    <p data-aos="fade-up" data-aos-delay={200}><a href="#" className="btn btn-white btn-outline-white">Get Started</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* END slider */}
        </div> 
        <section className="section bg-light py-5  bottom-slant-gray">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src="img/hero_1.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="col-lg-5 ml-auto">
                <div className="text-left heading-wrap">
                  <h2 data-aos="fade-up">The Restaurant</h2>
                </div>
                {/* <h3 class="mb-4">Welcome To Our Restaurant</h3> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam illum amet.</p>
                <p>Obcaecati nisi ipsum possimus necessitatibus tempore, illo id facere magni quisquam quam quaerat accusamus dolores?</p>
                <p><img src="img/signature.png" alt="Image" className="img-fluid w-25" /></p>
              </div>
            </div>
          </div>
        </section>
        <section className="section pb-0">
          <div className="container">
            <div className="row mb-5 justify-content-center" data-aos="fade">
              <div className="col-md-7 text-center heading-wrap">
                <h2 data-aos="fade-up">Best &amp; Good</h2>
                <p data-aos="fade-up" data-aos-delay={100}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-4">
                <img src="img/dishes_1.jpg" alt="Image" className="img-fluid about_img_1" data-aos="fade" data-aos-delay={200} />
              </div>
              <div className="col-lg-4">
                <img src="img/about_1.jpg" alt="Image" className="img-fluid about_img_1" data-aos="fade" data-aos-delay={200} />
              </div>
              <div className="col-lg-4">
                <img src="img/dishes_3.jpg" alt="Image" className="img-fluid about_img_1" data-aos="fade" data-aos-delay={500} />
              </div>
            </div>
          </div>
        </section>
        <section className="section ">
          <div className="clearfix mb-5 pb-5">
            <div className="container-fluid mb-5">
              <div className="row" data-aos="fade">
                <div className="col-md-12 text-center heading-wrap">
                  <h2>Special Menu</h2>
                </div>
              </div>
            </div>
            <div className="owl-carousel centernonloop">
              <a href="#" className="item-dishes" data-aos="fade-right" data-aos-delay={100}>
                <div className="text">
                  <p className="dishes-price">$11.50</p>
                  <h2 className="dishes-heading">Organic tomato salad, gorgonzola cheese, capers</h2>
                </div>
                <img src="img/dishes_1.jpg" alt="" className="img-fluid" />
              </a>
              <a href="#" className="item-dishes" data-aos="fade-right" data-aos-delay={200}>
                <div className="text">
                  <p className="dishes-price">$12.00</p>
                  <h2 className="dishes-heading">Baked broccoli</h2>
                </div>
                <img src="img/dishes_2.jpg" alt="" className="img-fluid" />
              </a>
              <a href="#" className="item-dishes" data-aos="fade-right" data-aos-delay={300}>
                <div className="text">
                  <p className="dishes-price">$11.00</p>
                  <h2 className="dishes-heading">Spicy meatballs</h2>
                </div>
                <img src="img/dishes_3.jpg" alt="" className="img-fluid" />
              </a>
              <a href="#" className="item-dishes" data-aos="fade-right" data-aos-delay={400}>
                <div className="text">
                  <p className="dishes-price">$12.00</p>
                  <h2 className="dishes-heading">Eggplant parmigiana</h2>
                </div>
                <img src="img/dishes_4.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </section> {/* .section */}
        <section className="section bg-light  top-slant-white bottom-slant-gray">
          <div className="clearfix mb-5 pb-5">
            <div className="container-fluid">
              <div className="row" data-aos="fade">
                <div className="col-md-12 text-center heading-wrap">
                  <h2>Our Menu</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="sched d-block d-lg-flex">
                  <div className="bg-image order-2" style={{backgroundImage: 'url("img/dishes_4.jpg")'}} data-aos="fade" />
                  <div className="text order-1">
                    <h3>Baked new Zealand mussels </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
                    <p className="text-primary h3">$12.00</p>
                  </div>
                </div>
                <div className="sched d-block d-lg-flex">
                  <div className="bg-image" style={{backgroundImage: 'url("img/dishes_1.jpg")'}} data-aos="fade" />
                  <div className="text">
                    <h3>Spicy Calamari and beans</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
                    <p className="text-primary h3">$12.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sched d-block d-lg-flex">
                  <div className="bg-image order-2" style={{backgroundImage: 'url("img/dishes_2.jpg")'}} data-aos="fade" />
                  <div className="text order-1">
                    <h3>Bacon wrapped wild gulf prawns</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
                    <p className="text-primary h3">$18.00</p>
                  </div>
                </div>
                <div className="sched d-block d-lg-flex">
                  <div className="bg-image" style={{backgroundImage: 'url("img/dishes_3.jpg")'}} data-aos="fade" />
                  <div className="text">
                    <h3>Seared ahi tuna fillet*, honey-ginger sauce</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
                    <p className="text-primary h3">$16.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="sched d-block d-lg-flex">
                  <div className="bg-image order-2" style={{backgroundImage: 'url("img/dishes_4.jpg")'}} data-aos="fade" />
                  <div className="text order-1">
                    <h3>Baked new Zealand mussels </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
                    <p className="text-primary h3">$12.00</p>
                  </div>
                </div>
                <div className="sched d-block d-lg-flex">
                  <div className="bg-image" style={{backgroundImage: 'url("img/dishes_1.jpg")'}} data-aos="fade" />
                  <div className="text">
                    <h3>Spicy Calamari and beans</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
                    <p className="text-primary h3">$12.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sched d-block d-lg-flex">
                  <div className="bg-image order-2" style={{backgroundImage: 'url("img/dishes_2.jpg")'}} data-aos="fade" />
                  <div className="text order-1">
                    <h3>Bacon wrapped wild gulf prawns</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
                    <p className="text-primary h3">$18.00</p>
                  </div>
                </div>
                <div className="sched d-block d-lg-flex">
                  <div className="bg-image" style={{backgroundImage: 'url("img/dishes_3.jpg")'}} data-aos="fade" />
                  <div className="text">
                    <h3>Seared ahi tuna fillet*, honey-ginger sauce</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
                    <p className="text-primary h3">$16.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> {/* .section */}
        <section className="section relative-higher">
          <div className="clearfix mb-5 pb-5">
            <div className="container-fluid">
              <div className="row" data-aos="fade">
                <div className="col-md-12 text-center heading-wrap">
                  <h2>Testimonial</h2>
                  {/* <span class="back-text">Testimonial</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="owl-carousel centernonloop2">
                  <div className="slide" data-aos="fade-left" data-aos-delay={100}>
                    <blockquote className="testimonial">
                      <p>“ Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ”</p>
                      <div className="d-flex author">
                        <img src="img/person_1.jpg" alt="" className="mr-4" />
                        <div className="author-info">
                          <h4>Mellisa Howard</h4>
                          <p>CEO, XYZ Company</p>
                        </div>
                      </div>  
                    </blockquote>
                  </div>
                  <div className="slide" data-aos="fade-left" data-aos-delay={200}>
                    <blockquote className="testimonial">
                      <p>“ Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ”</p>
                      <div className="d-flex author">
                        <img src="img/person_2.jpg" alt="" className="mr-4" />
                        <div className="author-info">
                          <h4>Mike Richardson</h4>
                          <p>CEO, XYZ Company</p>
                        </div>
                      </div>  
                    </blockquote>
                  </div>
                  <div className="slide" data-aos="fade-left" data-aos-delay={300}>
                    <blockquote className="testimonial">
                      <p>“ Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ”</p>
                      <div className="d-flex author">
                        <img src="img/person_3.jpg" alt="" className="mr-4" />
                        <div className="author-info">
                          <h4>Charles White</h4>
                          <p>CEO, XYZ Company</p>
                        </div>
                      </div>  
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> {/* .section */}
        <section className="section  bg-light top-slant-white">
          <div className="clearfix mb-5 pb-5">
            <div className="container-fluid">
              <div className="row" data-aos="fade">
                <div className="col-md-12 text-center heading-wrap">
                  <h2>Blog</h2>
                  <span className="back-text">Our Blog</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="blog d-block">
                  <a className="bg-image d-block" href="single.html" style={{backgroundImage: 'url("img/dishes_1.jpg")'}} />
                  <div className="text">
                    <h3><a href="single.html">How To Bake A Good Taste Food</a></h3>
                    <p className="sched-time">
                      <span> April 22, 2018</span> <br />
                    </p>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p><a href="#" className="btn btn-primary btn-sm">Read More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="blog d-block">
                  <a className="bg-image d-block" href="single.html" style={{backgroundImage: 'url("img/dishes_2.jpg")'}} />
                  <div className="text">
                    <h3><a href="single.html">How To Bake A Good Taste Food</a></h3>
                    <p className="sched-time">
                      <span> April 22, 2018</span> <br />
                    </p>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p><a href="#" className="btn btn-primary btn-sm">Read More</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> {/* .section */}
        <footer className="site-footer" role="contentinfo">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-4 mb-5">
                <h3>About Us</h3>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde minima expedita.</p>
                <ul className="list-unstyled footer-link d-flex footer-social">
                  <li><a href="#" className="p-2"><span className="fa fa-twitter" /></a></li>
                  <li><a href="#" className="p-2"><span className="fa fa-facebook" /></a></li>
                  <li><a href="#" className="p-2"><span className="fa fa-linkedin" /></a></li>
                  <li><a href="#" className="p-2"><span className="fa fa-instagram" /></a></li>
                </ul>
              </div>
              <div className="col-md-5 mb-5">
                <div className="mb-5">
                  <h3>Opening Hours</h3>
                  <p><strong className="d-block font-weight-normal text-black">Sunday-Thursday</strong> 5AM - 10PM</p>
                </div>
                <div>
                  <h3>Contact Info</h3>
                  <ul className="list-unstyled footer-link">
                    <li className="d-block">
                      <span className="d-block text-black">Address:</span>
                      <span>34 Street Name, City Name Here, United States</span></li>
                    <li className="d-block"><span className="d-block text-black">Phone:</span><span>+1 242 4942 290</span></li>
                    <li className="d-block"><span className="d-block text-black">Email:</span><span>info@yourdomain.com</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 mb-5">
                <h3>Quick Links</h3>
                <ul className="list-unstyled footer-link">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Disclaimers</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="col-md-3">
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-md-center text-left">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* END footer */}
        {/* loader */}
        <div id="loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#cf1d16" /></svg></div>
      </div>
    );
  }
});