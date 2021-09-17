import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
// import axios from "axios";
import { Modal, Card } from "antd";
// import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: "Aa123456.",
      login: false,
      token: null,
      modalShow: false,
      candidateType: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.email === "ab@gmail.com" &&
      this.state.password === "Aa123456."
    ) {
      localStorage.setItem("access_role", "admin_role");
      this.props.history.push("/Dashboard");
    } else if (
      this.state.email === "abc@gmail.com" &&
      this.state.password === "Aa123456."
    ) {
      localStorage.setItem("access_role", "client_role");
      this.props.history.push("/ClientDashboard");
    } else {
      alert("user does not exist");
    }

    // axios.post("http://5.9.111.198:13880/api/users/login",this.state)
    // .then((resp) => {
    //   console.log('Token -',resp.data.token)
    //   console.log(resp.data)
    //   // localStorage.setItem('token',resp.data.token)
    //     localStorage.setItem(
    //       "token",resp.data.token,
    //       JSON.stringify({
    //         Login: true,
    //         token: resp.data.token,
    //       })
    //     );
    //     this.setState({ login: true });
    //     this.storeCollector();
    //  // });
    //   // this.props.history.push("/Dashboard")
    // });
  };
  forGot = () => {
    this.props.history.push("/Confirm");
  };
  render() {
    return (
      <div>
        {
          !this.state.login ? (
            <div className="c-app c-default-layout flex-row align-items-center">
              <CContainer>
                <CRow className="justify-content-center">
                  <CCol md="8">
                    <CCardGroup>
                      <CCard className="p-4">
                        <CCardBody>
                          <CForm onSubmit={this.onSubmit}>
                            <h1>Login</h1>
                            <p className="text-muted">
                              Sign In to your account
                            </p>
                            <CInputGroup className="mb-3">
                              <CInputGroupPrepend>
                                <CInputGroupText>
                                  <CIcon name="cil-user" />
                                </CInputGroupText>
                              </CInputGroupPrepend>
                              <CInput
                                id="email"
                                type="email"
                                placeholder="Email"
                                autoComplete="email"
                                onChange={(event) =>
                                  this.setState({ email: event.target.value })
                                }
                                required
                              />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                              <CInputGroupPrepend>
                                <CInputGroupText>
                                  <CIcon name="cil-lock-locked" />
                                </CInputGroupText>
                              </CInputGroupPrepend>
                              <CInput
                                id="password"
                                type="password"
                                placeholder="Password"
                                onChange={(event) =>
                                  this.setState({
                                    password: event.target.value,
                                  })
                                }
                                autoComplete="current-password"
                                required
                              />
                            </CInputGroup>
                            <CRow>
                              <CCol xs="6">
                                {/* <Link to="/Dashboard"> */}
                                <CButton
                                  color="primary"
                                  className="px-4"
                                  // onClick={this.login}
                                  type="onsubmit"
                                >
                                  Login
                                </CButton>
                                {/* </Link> */}
                              </CCol>
                              <CCol xs="6" className="text-right">
                                <CButton
                                  color="link"
                                  className="px-0"
                                  onClick={this.forGot}
                                >
                                  Forgot password?
                                </CButton>
                              </CCol>
                            </CRow>
                          </CForm>
                        </CCardBody>
                      </CCard>
                      <CCard
                        className="text-white bg-primary py-5 d-md-down-none"
                        style={{ width: "44%" }}
                      >
                        <CCardBody className="text-center">
                          <div>
                            <h2>Sign up</h2>
                            <p>Welcome to HRH Portal</p>
                            {/* <Link to="/register"> */}
                            <CButton
                              onClick={() => this.setState({ modalShow: true })}
                              color="primary"
                              className="mt-3"
                              active
                              tabIndex={-1}
                            >
                              Register Now!
                            </CButton>
                            {/* </Link> */}
                          </div>
                        </CCardBody>
                      </CCard>
                    </CCardGroup>
                  </CCol>
                </CRow>
              </CContainer>
            </div>
          ) : (
            this.props.history.push("/Dashboard")
          )
          // <a href="file:///F:/React-system/poc-web-react/src/views/formbuilder/Drag.html">drag and drop</a>
        }

        <Modal
          width={1000}
          centered
          visible={this.state.modalShow}
          onOk={() => this.setState({ modalShow: false })}
          onCancel={() => this.setState({ modalShow: false })}
          footer={[]}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Card
              style={{
                width: 200,
                boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
              cover={
                <img
                  style={{
                    width: "100px",
                    borderRadius: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",

                    marginTop: "10px",
                  }}
                  alt="example"
                  src={`${process.env.PUBLIC_URL}avatars/1.jpg`}
                />
              }
            >
              <p style={{ marginBottom: 0, fontWeight: "bold" }}>
                I am Specialist
              </p>
              <Link to="/register/specialist">
                <CButton
                  // onClick={() => {
                  //   this.setState({ candidateType: "specialist" });
                  // }}
                  color="primary"
                  className="mt-3"
                  active
                  tabIndex={-1}
                >
                  Register
                </CButton>
              </Link>
            </Card>
            <Card
              style={{
                width: 200,
                boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
              cover={
                <img
                  style={{
                    width: "100px",
                    borderRadius: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",

                    marginTop: "10px",
                  }}
                  alt="example"
                  src={`${process.env.PUBLIC_URL}avatars/1.jpg`}
                />
              }
            >
              <p style={{ marginBottom: 0, fontWeight: "bold" }}>
                I am Medical Officer
              </p>
              <Link to="/register/medical_officer">
                <CButton color="primary" className="mt-3" active tabIndex={-1}>
                  Register
                </CButton>
              </Link>
            </Card>
            <Card
              style={{
                width: 200,
                boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
              cover={
                <img
                  style={{
                    width: "100px",
                    borderRadius: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",

                    marginTop: "10px",
                  }}
                  alt="example"
                  src={`${process.env.PUBLIC_URL}avatars/1.jpg`}
                />
              }
            >
              <p style={{ marginBottom: 0, fontWeight: "bold" }}>I am Nurse</p>
              <Link to="/register/nurse">
                <CButton color="primary" className="mt-3" active tabIndex={-1}>
                  Register
                </CButton>
              </Link>
            </Card>
            <Card
              style={{
                width: 200,
                boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
              cover={
                <img
                  style={{
                    width: "100px",
                    borderRadius: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",

                    marginTop: "10px",
                  }}
                  alt="example"
                  src={`${process.env.PUBLIC_URL}avatars/1.jpg`}
                />
              }
            >
              <p style={{ marginBottom: 0, fontWeight: "bold" }}>
                I am Paramedics
              </p>
              <Link to="/register/paramedics">
                <CButton color="primary" className="mt-3" active tabIndex={-1}>
                  Register
                </CButton>
              </Link>
            </Card>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Login);
