import React from 'react'
import { useFormik } from "formik";
import { message } from "antd";
import axios from 'axios';
const Contact = () => {


     //Handler for submit button
  const ContacUsHandler = async (values) => {
    console.log("SubmitHandler", values);
    try {
        const respone = await axios.post('http://localhost:5000/send',values)
        console.log("respone",respone)
    } catch (error) {
            console.log("error",error)
    }
    
  };

    //formMik Handler
    const formMik = useFormik({
        initialValues: { name:"",email: "", subject: "",message: "" },
        // validationSchema: LoginSchema,
        onSubmit: ContacUsHandler,
      });

  return (
    <div>

  {/*<!-- preloader start -->*/}
  <div class="preloader">
    <img src="/source/images/preloader.gif" alt="preloader"/>
  </div>
  {/*<!-- preloader end -->*/}

{/*<!-- header -->*/}
<header class="fixed-top header">
  {/*<!-- top header -->*/}
  <div class="top-header py-2 bg-white">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-lg-4 text-center text-lg-left">
          <a class="text-color mr-3" href="tel:+443003030266"><strong>CALL</strong> +44 300 303 0266</a>
          <ul class="list-inline d-inline">
            <li class="list-inline-item mx-0"><a class="d-inline-block p-2 text-color" href="#!"><i class="ti-facebook"></i></a></li>
            <li class="list-inline-item mx-0"><a class="d-inline-block p-2 text-color" href="#!"><i class="ti-twitter-alt"></i></a></li>
            <li class="list-inline-item mx-0"><a class="d-inline-block p-2 text-color" href="#!"><i class="ti-github"></i></a></li>
            <li class="list-inline-item mx-0"><a class="d-inline-block p-2 text-color" href="#!"><i class="ti-instagram"></i></a></li>
          </ul>
        </div>
        <div class="col-lg-8 text-center text-lg-right">
          <ul class="list-inline">
            <li class="list-inline-item"><a class="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="#!">notice</a></li>
            <li class="list-inline-item"><a class="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="#!">research</a></li>
            <li class="list-inline-item"><a class="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="#!">SCHOLARSHIP</a></li>
            <li class="list-inline-item"><a class="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="#!" data-toggle="modal" data-target="#loginModal">login</a></li>
            <li class="list-inline-item"><a class="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="#!" data-toggle="modal" data-target="#signupModal">register</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*<!-- navbar -->*/}
  <div class="navigation w-100">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark p-0">
        <a class="navbar-brand" href="#!"><img src="/source/images/logo.png" alt="logo"/></a>
        <button class="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation"
          aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navigation">
          <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item @@home">
              <a class="nav-link" href="#!">Home</a>
            </li>
            <li class="nav-item @@about">
              <a class="nav-link" href="#!">About</a>
            </li>
            <li class="nav-item @@courses">
              <a class="nav-link" href="#!">COURSES</a>
            </li>
            <li class="nav-item @@events">
              <a class="nav-link" href="#!">EVENTS</a>
            </li>
            <li class="nav-item @@blog">
              <a class="nav-link" href="#!">BLOG</a>
            </li>
            <li class="nav-item dropdown view">
              <a class="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pages
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#!">Teacher</a></li>
                <li><a class="dropdown-item" href="#!">Teacher Single</a></li>
                <li><a class="dropdown-item" href="#!">Notice</a></li>
                <li><a class="dropdown-item" href="#!">Notice Details</a></li>
                <li><a class="dropdown-item" href="#!">Research</a></li>
                <li><a class="dropdown-item" href="#!">Scholarship</a></li>
                <li><a class="dropdown-item" href="#!">Course Details</a></li>
                <li><a class="dropdown-item" href="#!">Event Details</a></li>
                <li><a class="dropdown-item" href="#!">Blog Details</a></li>
                
                <li class="dropdown-item dropdown dropleft">
                  <a class="dropdown-toggle" href="#" id="navbarDropdownSubmenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sub Menu
                  </a>
                  <ul class="dropdown-menu dropdown-submenu" aria-labelledby="navbarDropdownSubmenu">
                    <li><a class="dropdown-item" href="#!">Sub Menu 01</a></li>
                    <li><a class="dropdown-item" href="#!">Sub Menu 02</a></li>
                    <li><a class="dropdown-item" href="#!">Sub Menu 03</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#!">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</header>
{/*<!-- /header -->*/}
{/*<!-- Modal -->*/}
<div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content rounded-0 border-0 p-4">
            <div class="modal-header border-0">
                <h3>Register</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="login">
                    <form action="#" class="row">
                        <div class="col-12">
                            <input type="text" class="form-control mb-3" id="signupPhone" name="signupPhone" placeholder="Phone"/>
                        </div>
                        <div class="col-12">
                            <input type="text" class="form-control mb-3" id="signupName" name="signupName" placeholder="Name"/>
                        </div>
                        <div class="col-12">
                            <input type="email" class="form-control mb-3" id="signupEmail" name="signupEmail" placeholder="Email"/>
                        </div>
                        <div class="col-12">
                            <input type="password" class="form-control mb-3" id="signupPassword" name="signupPassword" placeholder="Password"/>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">SIGN UP</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
{/*<!-- Modal -->*/}
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content rounded-0 border-0 p-4">
            <div class="modal-header border-0">
                <h3>Login</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="#" class="row">
                    <div class="col-12">
                        <input type="text" class="form-control mb-3" id="loginPhone" name="loginPhone" placeholder="Phone"/>
                    </div>
                    <div class="col-12">
                        <input type="text" class="form-control mb-3" id="loginName" name="loginName" placeholder="Name"/>
                    </div>
                    <div class="col-12">
                        <input type="password" class="form-control mb-3" id="loginPassword" name="loginPassword" placeholder="Password"/>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

{/*<!-- page title -->*/}
<section class="page-title-section overlay" data-background="images/backgrounds/page-title.jpg">
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <ul class="list-inline custom-breadcrumb mb-2">
          <li class="list-inline-item"><a class="h2 text-primary font-secondary" href="#!">Home</a></li>
          <li class="list-inline-item text-white h3 font-secondary nasted">Contact Us</li>
        </ul>
        <p class="text-lighten mb-0">Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.</p>
      </div>
    </div>
  </div>
</section>
{/*<!-- /page title -->*/}

{/*<!-- contact -->*/}
<section class="section bg-gray">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="section-title">Contact Us</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7 mb-4 mb-lg-0">
        <form  onSubmit={formMik.handleSubmit} >
          <input type="text" class="form-control mb-3" 
           onChange={formMik.handleChange}
           onBlur={formMik.handleBlur}
           value={formMik.values.name}
           id="name" name="name" placeholder="Your Name" required/>

          <input type="email" class="form-control mb-3" id="mail"
             onChange={formMik.handleChange}
             onBlur={formMik.handleBlur}
             value={formMik.values.email}
           name="email" placeholder="Your Email" required/>

          <input type="text" class="form-control mb-3" id="subject" 
             onChange={formMik.handleChange}
             onBlur={formMik.handleBlur}
             value={formMik.values.subject}
          name="subject" placeholder="Subject" required/>


          <textarea name="message" id="message" class="form-control mb-3" 
             onChange={formMik.handleChange}
             onBlur={formMik.handleBlur}
             value={formMik.values.message}

          placeholder="Your Message" required></textarea>
          <button type="submit" value="send" class="btn btn-primary">SEND MESSAGE</button>
        </form>
      </div>


      <div class="col-lg-5">
        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt. Dolore, labore. Accusamus nulla sed cum aliquid exercitationem debitis error harum porro maxime quo iusto aliquam dicta modi earum fugiat, vel possimus commodi, deleniti et veniam, fuga ipsum praesentium. Odit unde optio nulla ipsum quae obcaecati! Quod esse natus quibusdam asperiores quam vel, tempore itaque architecto ducimus expedita</p>
        <a href="tel:+8802057843248" class="text-color h5 d-block">+880 20 5784 3248</a>
        <a href="mailto:yourmail@email.com" class="mb-5 text-color h5 d-block">yourmail@email.com</a>
        <p>71 Shelton Street<br/>London WC2H 9JQ England</p>
      </div>
    </div>
  </div>
</section>
{/*<!-- /contact -->*/}


{/*<!-- footer -->*/}
<footer>
  {/*<!-- newsletter -->*/}
  <div class="newsletter">
    <div class="container">
      <div class="row">
        <div class="col-md-9 ml-auto bg-primary py-5 newsletter-block">
          <h3 class="text-white">Subscribe Now</h3>
          <form action="#">
            <div class="input-wrapper">
              <input type="email" class="form-control border-0" id="newsletter" name="newsletter" placeholder="Enter Your Email..."/>
              <button type="submit" value="send" class="btn btn-primary">Join</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/*<!-- footer content -->*/}
  <div class="footer bg-footer section border-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-8 mb-5 mb-lg-0">
          {/*<!-- logo -->*/}
          <a class="logo-footer" href="#!"><img class="img-fluid mb-4" src="/source/images/logo.png" alt="logo"/></a>
          <ul class="list-unstyled">
            <li class="mb-2">23621 15 Mile Rd #C104, Clinton MI, 48035, New York, USA</li>
            <li class="mb-2">+1 (2) 345 6789</li>
            <li class="mb-2">+1 (2) 345 6789</li>
            <li class="mb-2">contact@yourdomain.com</li>
          </ul>
        </div>
        {/*<!-- company -->*/}
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
          <h4 class="text-white mb-5">COMPANY</h4>
          <ul class="list-unstyled">
            <li class="mb-3"><a class="text-color" href="#!">About Us</a></li>
            <li class="mb-3"><a class="text-color" href="#!">Our Teacher</a></li>
            <li class="mb-3"><a class="text-color" href="#!">Contact</a></li>
            <li class="mb-3"><a class="text-color" href="#!">Blog</a></li>
          </ul>
        </div>
        {/*<!-- links -->*/}
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
          <h4 class="text-white mb-5">LINKS</h4>
          <ul class="list-unstyled">
            <li class="mb-3"><a class="text-color" href="#!">Courses</a></li>
            <li class="mb-3"><a class="text-color" href="#!">Events</a></li>
            <li class="mb-3"><a class="text-color" href="#!">Notice</a></li>
            <li class="mb-3"><a class="text-color" href="#!">Scholarship</a></li>
          </ul>
        </div>
        {/*<!-- support -->*/}
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
          <h4 class="text-white mb-5">SUPPORT</h4>
          <ul class="list-unstyled">
            <li class="mb-3"><a class="text-color" href="https://themefisher.com/blog">Forums</a></li>
            <li class="mb-3"><a class="text-color" href="https://docs.themefisher.com/">Documentation</a></li>
            <li class="mb-3"><a class="text-color" href="#!">Language</a></li>
            <li class="mb-3"><a class="text-color" href="#!">Release Status</a></li>
          </ul>
        </div>
        {/*<!-- support -->*/}
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
          <h4 class="text-white mb-5">RECOMMEND</h4>
          <ul class="list-unstyled">
            <li class="mb-3"><a class="text-color" href="https://themefisher.com/">WordPress</a></li>
            <li class="mb-3"><a class="text-color" href="https://themefisher.com/">LearnPress</a></li>
            <li class="mb-3"><a class="text-color" href="https://themefisher.com/">WooCommerce</a></li>
            <li class="mb-3"><a class="text-color" href="https://themefisher.com/">bbPress</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*<!-- copyright -->*/}
  <div class="copyright py-4 bg-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-7 text-sm-left text-center">
          <p class="mb-0">Copyright &copy;
            <script>
              var CurrentYear = new Date().getFullYear()
              document.write(CurrentYear)
            </script> 
            , designed & developed by <a href="https://themefisher.com/" class="text-muted">Themefisher</a>
          </p>
        </div>
        <div class="col-sm-5 text-sm-right text-center">
          <ul class="list-inline">
            <li class="list-inline-item"><a class="d-inline-block p-2" href="https://facebook.com/themefisher/"><i class="ti-facebook text-primary"></i></a></li>
            <li class="list-inline-item"><a class="d-inline-block p-2" href="https://twitter.com/themefisher"><i class="ti-twitter-alt text-primary"></i></a></li>
            <li class="list-inline-item"><a class="d-inline-block p-2" href="https://github.com/themefisher"><i class="ti-github text-primary"></i></a></li>
            <li class="list-inline-item"><a class="d-inline-block p-2" href="https://instagram.com/themefisher/"><i class="ti-instagram text-primary"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>



    </div>
  )
}

export default Contact