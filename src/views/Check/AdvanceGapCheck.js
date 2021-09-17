
import React from 'react'
import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CForm, CFormGroup, CInput, CInvalidFeedback, CLabel, CRow, CValidFeedback } from '@coreui/react';
import CIcon from '@coreui/icons-react';

export default function AdvanceGapCheck() {
  return (
    <div>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
          <CCardHeader>
            <h1>
            Advance Gap Check
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
                  <CLabel htmlFor="text-input">first Company Details:</CLabel>
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
                  <CLabel htmlFor="text-input">Second Company Details:</CLabel>
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
                  <CLabel htmlFor="text-input">Duration of First Company:</CLabel>
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
                  <CLabel htmlFor="text-input">Duration of Second Company:</CLabel>
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
                  <CLabel htmlFor="text-input">Reason of GAP:</CLabel>
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
                  <CLabel htmlFor="text-input">Candidate Contact Number:</CLabel>
                </CCol>
                <CCol xs="12" sm="10">
                <CInput className="form-control-warning" id="inputWarning2i" required />
                     <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
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
