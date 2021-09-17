import React from "react";
import {Link} from 'react-router-dom'
const Services = () => {
  return (
    <div className="text-center styleService">
      <div className="flex justify-center section-title font-serif  ">
        <h1 className="flex justify-center  font" style={{ marginTop: "30px" }}>
          OUR SERVICES
        </h1>
      </div>
      {/* <p className=" font-sans">
        We provide the best and fastest online services.
      </p> */}
      <div className="verification md:grid grid-cols-2 gap-4 m-4">
        <div className="styleImg text-center md:col-span-1">
        <Link to = "services/company"> <i className="fa fa-graduation-cap fa-5x  circle"></i></Link>
          <h3 className="fontColor font-serif">COMPANY VERIFICATION</h3>     
          <p className=" fontServ">
            Company verification refers to that types of verifications in which verifier will verify or check that the company is exist or not on given location.
          </p>
        </div>
        <div className="styleImg text-center block md:col-span-1">
        <Link to = "services/employee"><i className="fa fa-check  fa-5x  circle"></i> </Link>
          <h3 className="fontColor font-serif">EMPLOYEE VERIFICATION</h3>
          <p className=" fontServ">
            Employees represent a company and thus are an integral part of it. If you will hire the right employees, your company will move in the right direction.

          </p>
        </div>





      </div>
    </div>
  );
};

export default Services;
