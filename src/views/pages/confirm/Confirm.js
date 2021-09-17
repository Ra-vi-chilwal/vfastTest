import React from 'react'
import { Link } from 'react-router-dom'
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
  //history
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

export default function Confirm() {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h1>Confirmation</h1>
                  <p className="text-muted"></p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Confirmation code" autoComplete="username" />
                  </CInputGroup>
                  <CRow>
                    <CCol xs="6">
                      <Link to="/">
                      <CButton color="primary" className="px-4" onClick={()=>{alert("confirm")}}>Confirm</CButton>
                      </Link>
                    </CCol>
                    <CCol xs="6" className="text-right">
                      <Link to="/">
                      <CButton color="link" className="px-0">Login</CButton>
                      </Link>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
              <CCardBody className="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Welcome to Payout Saas</p>
                  <Link to="/register">
                    <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                  </Link>
                </div>
              </CCardBody>
            </CCard> */}
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>

  )
}
