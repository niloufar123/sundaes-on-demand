import { Form,Button,Container  } from "react-bootstrap";

import React, { useState } from "react";

function SummaryForm() {
  const [enable,setEnable]=useState(false);
  return (
    <Container>

      <Form>
       <Form.Group className="mb-3" controlId="formBasicCheckbox"  onChange={()=>setEnable(!enable)}>
          <Form.Check type="checkbox" label="terms and conditionst" />
        </Form.Group>
        <Button variant="primary" type="submit" name='submit' disabled={!enable}>
        confirm order
        </Button>
      </Form>
    </Container>
  );
}

export default SummaryForm;
