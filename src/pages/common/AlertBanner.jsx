import React from "react";
import { Alert } from "react-bootstrap";

function AlertBanner({ textMassage, variant }) {
    const alertMsg=textMassage || 'An unexpected error occured. Please try later. ';
    const alertVariant=variant || 'danger'

  return <Alert variant={alertVariant}>{alertMsg}</Alert>;
}

export default AlertBanner;
