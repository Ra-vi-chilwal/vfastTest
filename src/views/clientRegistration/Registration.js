import React, { lazy, useState, useRef, useEffect } from "react";
import { withRouter } from "react-router";
// import $ from "jquery";
// import axios from "axios";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Image,
  Tabs,
  message,
  Col,
} from "antd";
import 'antd/dist/antd.css';
import { CCard, CCardBody, CCardHeader,CFormGroup, CRow } from "@coreui/react";

const Registration = () => {
  // const componentRef = useRef();
  const [Disctricts, setDisctricts] = useState([]);
  const [States, setStates] = useState([]);
  const [Positions, setPositions] = useState([]);
  const [Genders, setGenders] = useState([]);
  const [Countries, setCountries] = useState([]);
  const [Cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabName, setTabName] = useState("1");
  const [componentSize, setComponentSize] = useState("default");

  const [position, setPosition] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [name, setName] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [place, setPlace] = useState("");
  const [expInField, setExpInField] = useState(0);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [experience, setExperience] = useState("");
  const [cityPersonal, setCityPersonal] = useState("");
  const [districtPersonal, setDistrictPersonal] = useState("");
  const [statePersonal, setStatePersonal] = useState("");
  const [countryPersonal, setCountryPersonal] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [district1, setDistrict1] = useState("");
  const [district2, setDistrict2] = useState("");
  const [district3, setDistrict3] = useState("");

  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");

  const { TabPane } = Tabs;

  function callback(key) {
    setTabName(key + "");
  }

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  useEffect(() => {

  }, []);

  const handlePosition = (data) => {
    console.log("FORM DATA ", data);
    setPosition(data);
  };

  const submitApplication = () => {
    var params = {
      id: 0,
      name: name,
      email: email,
      fatherName: fathersName,
      dob: dob,
      phone: phone,
      address: address1,
      street1: address1,
      street2: address2,
      pincode: zipCode,
      image: "string",
      cityId: cityPersonal.id,
      // city: {
      //   id: 0,
      //   name: "string",
      //   cityCode: "string",
      // },
      countryId: countryPersonal.id,
      // country: countryPersonal,
      registrationNo: registrationNo,
      yearofIssue: "2021-09-08T14:43:41.503Z",
      nameofIssueCouncil: "string",
      place: place,
      stateId: statePersonal.id,
      // states: statePersonal,
      districtId: districtPersonal.id,
      // districtCategories: districtPersonal,
      statePref1: state1,
      statePref2: state2,
      statePref3: state3,
      districPref1: district1,
      districPref2: district2,
      districPref3: district3,
      categoryofPostId: position.id,
      // catgoryofPosition: position,
      positionId: position.id,
      // position: position,
      genderId: gender,
      experience: experience,
      additionalQualification: "string",
    };

    console.log("PARAMS ", params);

//     axios
//       .post(`${process.env.REACT_APP_API_URL}Applications`, params)
//       .then((response) => {
//         console.log("RESPONSE ", response);
//         message.success("Application Submitted.");
//         window.location.reload();
//       })
//       .catch((err) => console.log(err));
  };

  return (
    <>
      {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
        <div>
          <h2>Client Registration</h2>
          <Tabs
            type="card"
            activeKey={tabName}
            onChange={(e) => {
              callback(e.toString());
            }}
          >
            <TabPane tab="Company Profile" key="1">
              {/* Home */}
             </TabPane>
            <TabPane tab="Contact Details" key="2">
              {/* Profile */}
            </TabPane>
            {/* <TabPane tab="List" key="3">
              {/* Education Qualification */}
            {/* </TabPane> */}
            {/* <TabPane tab="Modify" key="4"> */}
              {/* Experience */}
             {/* </TabPane> */}
            {/* <TabPane tab="ADDITIONAL INFO" key="5"> */}
              {/* Additional Info */}
             {/* </TabPane> */}
          </Tabs>

          {tabName == "1" && (
            <>
            <CCard>
                <CCardHeader>
              <h4 style={{ marginTop: "20px" }}>
               <h1> Company Profile</h1>
                <small>Client Information</small>
              </h4>
              </CCardHeader>
               <CCardBody>
              <Form
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  padding: 10,
                }}
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
                initialValues={{
                  size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
              >
                <Form.Item label="Name of the Entity">
                  <Input
                    placeholder="Enter  Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Legal Name of Entity">
                  <Input
                    placeholder="Complete Legal Name of the Parent Entity"
                    onChange={(e) => setFathersName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Type of Entity">
                <Select
                    placeholder="Select Type of Entity"
                    onChange={(e) => {
                      setCityPersonal(Cities[e]);
                    }}
                  >
                    <Select.Option>Limited</Select.Option>
                    <Select.Option>Private Limited</Select.Option>
                    <Select.Option>Partnership</Select.Option>
                    <Select.Option>Proprietorship</Select.Option>
                    {/* {Cities.map((item, index) => {
                      return (
                        <Select.Option key={index} value={index}>
                          {item.name}
                        </Select.Option>
                      ); */}
                    {/* })} */}
                  </Select>
                </Form.Item>
                <Form.Item label="Date of Establishment">
                  <Input
                  type="date"
                    placeholder=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Complete Address of office">
                  <Input
                    placeholder="Complete Address of corporate office"
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Other office location/branch">
                <Select
                    placeholder="Is there any other office location/branch location"
                    onChange={(e) => {
                      setCityPersonal(Cities[e]);
                    }}
                  >
                    <Select.Option>Yes</Select.Option>
                    <Select.Option>No</Select.Option>

                    {/* {Cities.map((item, index) => {
                      return (
                        <Select.Option key={index} value={index}>
                          {item.name}
                        </Select.Option>
                      ); */}
                    {/* })} */}
                  </Select>
                </Form.Item>
                <Form.Item label="CITY">
                  <Select
                    placeholder="Select City"
                    onChange={(e) => {
                      setCityPersonal(Cities[e]);
                    }}
                  >
                    <Select.Option>New Delhi</Select.Option>
                    <Select.Option>Noida</Select.Option>
                    <Select.Option>Lucknow</Select.Option>
                    <Select.Option>Gorakhpur</Select.Option>
                    {/* {Cities.map((item, index) => {
                      return (
                        <Select.Option key={index} value={index}>
                          {item.name}
                        </Select.Option>
                      ); */}
                    {/* })} */}
                  </Select>
                </Form.Item>
                <Form.Item label="DISTRICT">
                  <Select
                    placeholder="Select District"
                    onChange={(e) => {
                      setDistrictPersonal(Disctricts[e]);
                    }}
                  >
                    <Select.Option>Laxminager</Select.Option>
                    <Select.Option>Noida</Select.Option>
                    <Select.Option>Lucknow</Select.Option>
                    <Select.Option>Gorakhpur</Select.Option>
                    {/* {Disctricts.map((item, index) => {
                      return (
                        <Select.Option key={index} value={index}>
                          {item.name}
                        </Select.Option>
                      );
                    })} */}
                  </Select>
                </Form.Item>
                <Form.Item label="STATE">
                  <Select
                    placeholder="Select State"
                    onChange={(e) => {
                      setStatePersonal(States[e]);
                    }}
                  >
                    {States.map((item, index) => {
                      return (
                        <Select.Option key={index} value={index}>
                          {item.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item label="ZIP CODE">
                  {/* <Select
                    placeholder="Select Zip Code"
                    onChange={(e) => setZipCode(e)}
                  >
                    <Select.Option value="select">Select</Select.Option>
                  </Select> */}
                  <Input
                    placeholder="Enter Zip Code"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>

                <Form.Item label="COUNTRY">
                  <Select
                    placeholder="Select Country"
                    onChange={(e) => {
                      setCountryPersonal(Countries[e]);
                    }}
                  >
                    {Countries.map((item, index) => {
                      return (
                        <Select.Option key={index} value={index}>
                          {item.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item label="Website">
                  {/* <Select
                    placeholder="Select Zip Code"
                    onChange={(e) => setZipCode(e)}
                  >
                    <Select.Option value="select">Select</Select.Option>
                  </Select> */}
                  <Input
                  type="email"
                    placeholder="Enter Website"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Email ID">
                  {/* <Select
                    placeholder="Select Zip Code"
                    onChange={(e) => setZipCode(e)}
                  >
                    <Select.Option value="select">Select</Select.Option>
                  </Select> */}
                  <Input
                  type="email"
                    placeholder="Enter Email ID"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>

                <Form.Item label="Firm Contact Number">
                  {/* <Select
                    placeholder="Select Zip Code"
                    onChange={(e) => setZipCode(e)}
                  >
                    <Select.Option value="select">Select</Select.Option>
                  </Select> */}
                  <Input
                  type="number"
                    placeholder="Enter contact Number "
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <CCardHeader>
                <p><b>Bank Details</b></p>
                </CCardHeader>

                <Form.Item label="Account No">
                  <Input
                    placeholder="Enter Account No."
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="IFSC Code">
                  <Input
                    placeholder="Enter IFSC Code"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Name of bank">
                  <Input
                    placeholder="Enter Name of bank"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Branck">
                  <Input
                    placeholder="Enter Branch Name"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <CCardHeader><p><b>Firm Details</b></p></CCardHeader>
                <Form.Item label="Roc registration Number">
                  <Input
                    placeholder="RoC Registration Number"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Partnership deed">
                  <Input
                    placeholder="Enter Partnership"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Udyog Aadhaar registration">
                  <Input
                    placeholder="Enter udyog aadhaar registration"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="PAN Number">
                  <Input
                    placeholder="Enter Pan Number"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="GSTIN">
                  <Input
                    placeholder="Enter GSTIN"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="PF Registration Number">
                  <Input
                    placeholder="Enter PF registration Number"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Shop/Establishment certificates">
                  <Input
                    placeholder="Shop and Establishment Certificates"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Address Proof">
                  <Input
                    placeholder="Enter Address Proof"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Item>
                <button
                  className="prevtab btn btn-danger"
                  id="prevtab"
                  onClick={() => callback(1)}
                >
                  Prev
                </button>
                <button
                  className="nexttab btn btn-success"
                  id="nexttab"
                  onClick={() => callback(2)}
                  style={{ marginLeft: "10px" }}
                >
                  Next
                </button>
              </Form>
              </CCardBody>
              </CCard>
            </>
          )}

          {tabName == "2" && (
            <>
            <CCard>
                <CCardHeader>
              <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
                <h1>Contact Details</h1>
                <small>Authorized Promoter/Director</small>
              </h4>
              </CCardHeader>
              <CCardBody>
              <Form
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  padding: 10,
                }}
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
                initialValues={{
                  size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
              >
              {/* form */}
              <Form.Item label="Person Name">
                  <Input
                    placeholder="Enter  Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Designation">
                  <Input
                    placeholder="Complete Designation"
                    onChange={(e) => setFathersName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Father's Name">
                  <Input
                    placeholder="Enter Father's Name "
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Date of Birth">
                  <Input
                  type="date"
                    placeholder="Date of Birth"
                    onChange={(e) => setFathersName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Mobile Number">
                  <Input
                  type="number"
                    placeholder="Enter Mobile Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Land Line Number">
                  <Input
                  type="number"
                    placeholder="Enter Land Line Number"
                    onChange={(e) => setFathersName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Email Address">
                  <Input
                  type="email"
                    placeholder="Enter Email Address"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
               <CCardHeader><p><b>Current Address</b></p></CCardHeader>
               <Form.Item label="City Name">
                  <Input
                    placeholder="Enter  City"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="State">
                  <Input
                    placeholder="Enter State"
                    onChange={(e) => setFathersName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Pin Code">
                  <Input
                    placeholder="Enter  PinCode"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Nearest Landmark">
                  <Input
                    placeholder="Enter Landmark"
                    onChange={(e) => setFathersName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Type of Ownership">
                  <Input
                    placeholder="Type of ownership"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <CCardHeader><p><b>Permanent Address</b></p></CCardHeader>
                <Form.Item label="Pin Code">
                  <Input
                    placeholder="Enter Pincode"
                    onChange={(e) => setFathersName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="State">
                  <Input
                    placeholder="Enter State"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Nearest Landmark">
                  <Input
                    placeholder="Enter Landmark"
                    onChange={(e) => setFathersName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Services to VFAST">
                  <Input
                    placeholder="Have you received any kind of services ot VFAST Before?"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="VFAST Partner/Director">
                  <Input
                    placeholder="have you been associated with any VFast partner/director etc.?"
                    onChange={(e) => setFathersName(e.target.value)}
                  />
                </Form.Item>









                <button
                  className="prevtab btn btn-danger"
                  id="prevtab"
                  onClick={() => callback(1)}
                >
                  Prev
                </button>
                <button
                  className="nexttab btn btn-success"
                  id="nexttab"
                  onClick={() => callback(3)}
                  style={{ marginLeft: "10px" }}
                >
                  Next
                </button>
              </Form>
              </CCardBody>
              </CCard>
            </>
          )}

          {tabName == "3" && (
            <>
            <CCard>
                <CCardHeader>
              <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
                Registration Modify
              </h4>
              </CCardHeader>
              <CCardBody>
              <Form
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  padding: 10,
                }}
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
                initialValues={{
                  size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
              >
                <Form.Item label="EXPERIENCE">
                  <Input
                    placeholder="Enter Experience"
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </Form.Item>
                <table
                  id="dtBasicExample"
                  cellSpacing="0"
                  width="100%"
                  className="table table-striped table-bordered table-sm"
                >
                  <thead className="thead-light">
                    <tr>
                      <th>From Date</th>
                      <th>To Date</th>
                      <th>Organization</th>
                      <th> Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>12/06/2010</div>
                      </td>
                      <td>
                        <span>22/06/2015</span>
                      </td>
                      <td>
                        <div className="clearfix">
                          <span>HITM Lucknow</span>
                        </div>
                      </td>
                      <td>
                        <span>React Js</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>12/06/2010</div>
                      </td>
                      <td>
                        <span>22/06/2015</span>
                      </td>
                      <td>
                        <div className="clearfix">
                          <span>HITM Lucknow</span>
                        </div>
                      </td>
                      <td>
                        <span>React Js</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>12/06/2010</div>
                      </td>
                      <td>
                        <span>22/06/2015</span>
                      </td>
                      <td>
                        <div className="clearfix">
                          <span>HITM Lucknow</span>
                        </div>
                      </td>
                      <td>
                        <span>React Js</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>12/06/2010</div>
                      </td>
                      <td>
                        <span>22/06/2015</span>
                      </td>
                      <td>
                        <div className="clearfix">
                          <span>HITM Lucknow</span>
                        </div>
                      </td>
                      <td>
                        <span>React Js</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="prevtab btn btn-danger"
                  id="prevtab"
                  onClick={() => callback(2)}
                >
                  Prev
                </button>
                {/* <button
                  className="nexttab btn btn-success"
                  id="nexttab"
                  onClick={() => callback(5)}
                  style={{ marginLeft: "10px" }}
                >
                  Next
                </button> */}
              </Form>
              </CCardBody>
              </CCard>
            </>
          )}

          {tabName == "4" && (
            <>
              <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
                Additional Info<small>...</small>
              </h4>

              <Form
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  padding: 10,
                }}
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
                initialValues={{
                  size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
              >
                <Form.Item label="DISTRICT 1">
                  <Select
                    placeholder="Select District 1"
                    onChange={(event) => {
                      setDistrict1(event);
                    }}
                  >
                    {Disctricts.map((item, index) => {
                      return (
                        <Select.Option key={index} value={item.id}>
                          {item.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item label="DISTRICT 2">
                  <Select
                    placeholder="Select District 2"
                    onChange={(event) => setDistrict2(event)}
                  >
                    {Disctricts.map((item, index) => {
                      return (
                        <Select.Option key={index} value={item.id}>
                          {item.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item label="DISTRICT 3">
                  <Select
                    placeholder="Select District 3"
                    onChange={(event) => setDistrict3(event)}
                  >
                    {Disctricts.map((item, index) => {
                      return (
                        <Select.Option key={index} value={item.id}>
                          {item.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item label="STATE 1">
                  <Select
                    placeholder="Select State 1"
                    onChange={(event) => setState1(event)}
                  >
                    {States.map((item, index) => {
                      return (
                        <Select.Option key={index} value={item.id}>
                          {item.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item label="STATE 2">
                  <Select
                    placeholder="Select State 2"
                    onChange={(event) => setState2(event)}
                  >
                    {States.map((item, index) => {
                      return (
                        <Select.Option key={index} value={item.id}>
                          {item.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item label="STATE 3">
                  <Select
                    onChange={(event) => setState3(event)}
                    placeholder="Select State 3"
                  >
                    {States.map((item, index) => {
                      return (
                        <Select.Option key={index} value={item.id}>
                          {item.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item label="ZIP CODE">
                  <Select placeholder="Select Zip Code">
                    <Select.Option value="select">Select</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label="COUNTRY">
                  <Select
                    placeholder="Select Country"
                    onChange={(event) => setCountry(event)}
                  >
                    {Countries.map((item, index) => {
                      return (
                        <Select.Option key={index} value={item.name}>
                          {item.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <button
                  className="prevtab btn btn-danger"
                  id="prevtab"
                  onClick={() => callback(4)}
                >
                  Prev
                </button>
                <button
                  className="nexttab btn btn-primary"
                  id="prevtab"
                  style={{ marginLeft: "10px" }}
                  onClick={() => submitApplication()}
                >
                  Submit
                </button>
              </Form>
            </>
          )}

          {/* <div className="tab-content" id="myTabContent">
          </div> */}
        </div>
      {/* )} */}
    </>
  );
};

export default withRouter(Registration);
