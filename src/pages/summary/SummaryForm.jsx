import { Form, Button, Container, Popover, Overlay } from "react-bootstrap";

import React, { useState } from "react";

function SummaryForm() {
  const [enable, setEnable] = useState(false);
  const [showPopUp, setShowPopUp] = useState(0);
  return (
    <Container>
      <Form>
        <Form.Group
          className="mb-3"
          controlId="formBasicCheckbox"
          onChange={() => setEnable(!enable)}
        >
          <div className="form-check">
            <input
              type="checkbox"
              id="default-checkbox"
              className="form-check-input"
            />
            <label
              title=""
              htmlFor="default-checkbox"
              className="form-check-label"
              onMouseOver={() => setShowPopUp(1)}
              onMouseLeave={() => setShowPopUp(0)}
            >
              terms and conditionst
            </label>
          </div>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          name="submit"
          disabled={!enable}
        >
          confirm order
        </Button>
      </Form>
      <div style={{ opacity: `${showPopUp}` }}>Popover testing</div>
    </Container>
  );
}

export default SummaryForm;
