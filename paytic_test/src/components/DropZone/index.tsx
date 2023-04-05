import React from "react";
import { Col } from "react-bootstrap";
type dropZoneProps = {
  REF: any;
  children: React.ReactNode;
};
export function DropZone({ REF, children }: dropZoneProps) {
  return (
    <Col>
      <div ref={REF} className="dropZone">
        {children}
      </div>
    </Col>
  );
}
