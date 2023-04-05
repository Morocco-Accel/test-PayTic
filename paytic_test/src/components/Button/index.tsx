import React from "react";
import { Button } from "react-bootstrap";
type btnProps = {
  CLICK: any;
  LENGTH: number;
};
export function ButtonSave({ CLICK, LENGTH }: btnProps) {
  return (
    <div className="btn-container">
      <Button
        variant={LENGTH > 0 ? "primary" : "light"}
        onClick={LENGTH > 0 ? CLICK : null}
        className="btn-extra"
        size="lg"
      >
        SAVE
      </Button>
    </div>
  );
}
