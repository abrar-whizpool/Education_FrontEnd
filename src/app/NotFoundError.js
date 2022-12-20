import React from "react";
import { Link } from "react-router-dom";

const NotFoundError = () => {

  return (
    <>
      {/* <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
        <img class=" " src="../../../assets/svg/illustrations/oc-thinking.svg" height='200vh' alt="Loading..."   />
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3">
            {" "}
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">The page you’re looking for doesn’t exist.</p>
        </div>
      </div> */}
      	<section class="page-404">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<a href="index.html">
						{/* <img src="source/images/logo.png" alt="site logo" /> */}
					</a>
					<h1>404</h1>
					<h2>Page Not Found</h2>
          <Link to="/">
					<a class="btn btn-main"><i class="tf-ion-android-arrow-back"></i> Go Home</a>
          </Link>
				
				</div>
			</div>
		</div>
	</section>
    </>
  );
};

export default NotFoundError;
