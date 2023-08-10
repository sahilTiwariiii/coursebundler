import React from 'react' 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import a from './images/a.png';
import register from './assets/img/illustrations/register.svg'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const SignUp = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top navbar-shrink py-3 navbar-light" id="mainNav">
        <img style={{ height: '40px', width: '150px' }} src={a} href="/courses.html" alt="Shiksha Logo" />
        {/* Rest of the navigation code */}
      </nav>

      <section className="py-4 py-md-5 my-5">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-md-6 text-center"><img className="img-fluid w-100" src={register} alt="Register" /></div>
            <div className="col-md-5 col-xl-4 text-center text-md-start">
              <h2 className="display-6 fw-bold mb-5"><span className="underline pb-1"><strong>Sign up</strong></span></h2>
              <form method="post" data-bs-theme="light">
              <div className="mb-3"><input className="shadow-sm form-control" type="text" name="username" id="Username"placeholder="Username" /></div>
                <div className="mb-3"><input className="shadow-sm form-control" type="email" name="email" id="Email" placeholder="Email" /></div>
                <div className="mb-3"><input className="shadow-sm form-control" type="password" name="password_repeat" id="Password"placeholder="Password" /></div>
                <div className="mb-5"><button className="btn btn-primary shadow" type="submit">Create account</button></div>
              </form>
              <p className="text-muted">Have an account? <a href="SignIn">Log in&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right">
                {/* SVG path */}
              </svg></a>&nbsp;</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container py-4 py-lg-5">
          <div className="row row-cols-2 row-cols-md-4">
            {/* Footer content */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SignUp;

  