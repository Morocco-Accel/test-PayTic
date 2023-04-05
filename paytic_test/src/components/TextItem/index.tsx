import React from "react";
import { Col } from "react-bootstrap";
import { useDrag } from "react-dnd";

type textItemProps = {
  TITLE: string;
  ID: number;
};
export function TextItem({ TITLE, ID }: textItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { id: ID },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <Col>
      <h2
        style={{
          color: isDragging ? "red" : "black",
          fontWeight: isDragging ? "700" : "400",
        }}
        ref={drag}
      >
        {TITLE}
      </h2>
    </Col>
  );
}
