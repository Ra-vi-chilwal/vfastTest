
import React from 'react'
import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CForm, CFormGroup, CInput, CInvalidFeedback, CLabel, CRow, CValidFeedback } from '@coreui/react';
import CIcon from '@coreui/icons-react';

export default function AddressCheck() {
  return (
    <div>
      <CRow>
        <CCol xs="10" sm="10">
          <CCard>
          <CCardHeader>
            <h1>
            Address Check
            </h1>
          </CCardHeader>
          <CCardBody>
            <CForm  className="was-validated">

              <CFormGroup row>
                <CCol md="2">
                  <CLabel htmlFor="inputWarning2i">Candidate Name :</CLabel>
                </CCol>
                <CCol xs="12" sm="10">
                <CInput className="form-control-warning" id="inputWarning2i" required />
                     <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="2">
                  <CLabel htmlFor="text-input">Father Name:</CLabel>
                </CCol>
                <CCol xs="12" sm="10">
                <CInput className="form-control-warning" id="inputWarning2i" required />
                     <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="2">
                  <CLabel htmlFor="text-input">Address:</CLabel>
                </CCol>
                <CCol xs="12" sm="10">
                <CInput className="form-control-warning" id="inputWarning2i" required />
                     <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="2">
                  <CLabel htmlFor="text-input">Pincode:</CLabel>
                </CCol>
                <CCol xs="12" sm="10">
                <CInput className="form-control-warning" id="inputWarning2i" required />
                     <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="2">
                  <CLabel htmlFor="text-input">Contact Number:</CLabel>
                </CCol>
                <CCol xs="12" sm="10">
                <CInput className="form-control-warning" id="inputWarning2i" required />
                     <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="2">
                  <CLabel htmlFor="text-input">company Name:</CLabel>
                </CCol>
                <CCol xs="12" sm="10">
                <CInput className="form-control-warning" id="inputWarning2i" required />
                     <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="2">
                  <CLabel htmlFor="text-input">Period of Stay:</CLabel>
                </CCol>
                <CCol xs="12" sm="10">
                <CInput className="form-control-success" id="inputSuccess2i" />
                  <CValidFeedback>Non-required</CValidFeedback>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm"color="primary"><CIcon name="cil-scrubber"/>Submit</CButton>
          </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}
