import { Form, Button, Container, Popover, Overlay, OverlayTrigger } from "react-bootstrap";

import React, { useState } from "react";

function SummaryForm() {
  const [enable, setEnable] = useState(false);
  const [showPopUp, setShowPopUp] = useState();

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
      no ice cream actually be delivered
      </Popover.Body>
    </Popover>
  );
  
 
  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );
  
  return (

      <Form>
        <Form.Group
          className="mb-3"
          controlId="formBasicCheckbox"
          
        >
           <Form.Check
          type="checkbox"
          onChange={() => setEnable(!enable)}
          label={checkboxLabel}
        />
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
 
  );
}

export default SummaryForm;
