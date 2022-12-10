import React from 'react'
import { useFormik } from "formik";
// import { message } from "antd";
import axios from 'axios';
const Contact = () => {


     //Handler for submit button
  const ContacUsHandler = async (values) => {
    console.log("SubmitHandler", values);
    try {
        const respone = await axios.post('http://localhost:5000/send',{
          ...values, emailType:'contact'
          })
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






    </div>
  )
}

export default Contact