import React from "react";

export default function Contact() {
  return (
    <>
      <iframe 
      className=" container d-flex"

        title="uniqueTitle"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d467278.9441543558!2d90.38641221715409!3d23.796658053567754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1671933130715!5m2!1sen!2sbd"
        width=""
        height="250"
        allowFullScreen=" "
        style={{ border: 10}}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >

      </iframe>
      <form action="https://formspree.io/f/xknawkrn" method="post" className=" container d-flex flex-column ">

        <div className="vh-100 d-flex justify-content-center align-items-center ">
            <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
                <h2 className="text-center mb-4 text-primary">Login Form</h2>
                
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control border border-primary" name="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control border border-primary" name="exampleInputPassword1"/>
                    </div>
                    <p className="small"><a className="text-primary" href="forget-password.html">Forgot password?</a></p>
                    <div className="d-grid">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                
                <div className="mt-3">
                    <p className="mb-0  text-center">Don't have an account? <a href="signup.html"
                            className="text-primary fw-bold">Sign
                            Up</a></p>
                </div>
            </div>
        </div>
      </form>
    </>
  );
}
