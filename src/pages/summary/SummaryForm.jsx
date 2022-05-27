import { Form,Button,Container  } from "react-bootstrap";

import React from "react";

function SummaryForm() {
  return (
    <Container>

      <Form>
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out"/>
        </Form.Group>
        <Button variant="primary" type="submit" name='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SummaryForm;
