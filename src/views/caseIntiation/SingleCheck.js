import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { Col, Row } from "react-bootstrap";
// import Button from "@material-ui/core/Button";
import {Button} from "@material-ui/core"
// import { IconButton  } from "@material-ui/core";
// import RemoveIcon from "@material-ui/icons/Remove";
// import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import Grid from "@material-ui/core/Grid";
// import DeleteIcon from "@material-ui/icons/Delete";
import DeleteIcon from "@material-ui/icons/Delete"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function SingleCheck() {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), Name: "", Contactnumber: "", email: "", clientid: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  return (
    <Container>
      <h1>Single Users</h1>
      {/* <button onClick={handleAddFields}>clcik</button> */}
      <h6 className="pt-3">Select Package</h6>
      <div className="pt-5">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Package1
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Package 2
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Package3
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Package4
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            OR Add Individual Check
          </label>
        </div>
      </div>
      <hr />
      <Row>
        <form className={classes.root} onSubmit={handleSubmit}>
          {inputFields.map((inputField) => (
            <div key={inputField.id} className="mt-4 pb-2 pl-xl-3">
              <TextField
                name="Name"
                label="Candidate Name"
                variant="filled"
                value={inputField.Name}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              <TextField
                name="Contactnumber"
                label="Candidate Contact Number"
                variant="filled"
                value={inputField.Contactnumber}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              <TextField
                name="email"
                label="Candidate Email"
                variant="filled"
                value={inputField.email}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              <TextField
                name="clientid"
                label="Candidate Email"
                variant="filled"
                value={inputField.clientid}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              <Row>
                <Col>
                  <div className="pt-4">
                    <p>Zipped docs(zip or rar)</p>
                    <input type="file" name="file2" />
                    <Button variant="contained" color="primary">
                      Primary
                    </Button>
                  </div>
                </Col>
                <Col>
                  <div className="py-4">
                    <p>Zipped docs(zip or rar)</p>
                    <input type="file" name="file2" />
                    <Button variant="contained" color="primary">
                      Primary
                    </Button>
                  </div>
                </Col>
              </Row>
              <Col>
                <div className="pt-4">
                  <Button item variant="contained" color="primary">
                    delete
                    <DeleteIcon />
                  </Button>
                </div>
              </Col>
            </div>
          ))}
          <hr />

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<Icon>send</Icon>}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </form>
      </Row>
    </Container>
  );
}

export default SingleCheck;
