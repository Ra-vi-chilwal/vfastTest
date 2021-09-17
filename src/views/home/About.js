import React from "react";
const About = () => {
  return (
    <div className="verificationStyle">
      <div className="flex justify-center text-3xl section-title font-serif md:text-5xl">
        <h1 className="flex justify-center font" style={{ marginTop: "100px" }}>
          ABOUT US
        </h1>
      </div>
      <div className="block md:grid grid-cols-5 gap-4  ">
        <div className="flex justify-center col-span-2 ">
          {" "}
          <img
            src="/assets/employee1.jpg"
            className="img-responsive"
            alt=""
          />{" "}
        </div>
        <div className="about text-center m-22 col-span-3">
          <div className="about-text">

            <div className="text-center m-4 ">
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul className='aboutLi'>
                    <li className='fontServ'>TRUST</li>
                    <p> We use a combination of human and machine-based resources to build trust among our customers. </p>
                    <li className='fontServ'>TECHNOLOGY</li>
                    <p>Our verification process is totally technology based, we use The latest technologies for the complete process and generate an authentic report</p>
                    <li className='fontServ'>EVIDENCE</li>
                    <p>In our system, you can access all the supporting documents collected during the course of screening as per your requirement and convenience. </p>
                  </ul>
                  <p>Our NAPBS-accredited  team spans over 200 countries and territories. We provide over 150 unique background check services for your specific needs globally.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
