import React from "react";
import { Table } from "react-bootstrap";

type tableProps = {
  ARRAY: any;
};
export function TableTest({ ARRAY }: tableProps) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>VALUE</th>
        </tr>
      </thead>
      <tbody>
        {ARRAY.map((item: any) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.value}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
