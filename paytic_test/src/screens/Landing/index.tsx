import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { DropZone, ButtonSave, TableTest, TextItem } from "components";
import { useDrop } from "react-dnd";
const ItemList = [
  {
    id: 1,
    value: "value number 1",
  },
  {
    id: 2,
    value: "value number 2",
  },
  {
    id: 3,
    value: "value number 3",
  },
  {
    id: 4,
    value: "value number 4",
  },
];
export function Landing() {
  const [RightBoard, setRightBoard] = useState<any[]>([]);
  const [LeftBoard, setLeftBoard] = useState<any[]>([]);
  const [SaveBoard, setSaveBoard] = useState<any[]>([]);
  //function set right Zone
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isOver }, dropRight] = useDrop(() => ({
    accept: "item",
    drop: (item: any) => addItemToRightBoard(item.id as number),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  //function set Left Zone
  // eslint-disable-next-line no-empty-pattern
  const [{}, dropLeft] = useDrop(() => ({
    accept: "item",
    drop: (item: any) => addItemToLeftBoard(item.id as number),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  //right DropZone
  const addItemToRightBoard = (id: number) => {
    const pictureList = ItemList.filter((item) => id === item.id);
    setRightBoard((board) => [...board, pictureList[0]] as any);
  };
  //left DropZone
  const addItemToLeftBoard = (id: number) => {
    const itemList = ItemList.filter((item) => id === item.id);
    setLeftBoard((board) => [...board, itemList[0]] as any);
  };

  //saveData into table
  const SaveData = () => {
    setSaveBoard((board) => [...board, ...RightBoard]);
    setRightBoard([]);
    setLeftBoard([]);
  };
  return (
    <Container>
      <Row>
        {ItemList.map((item) => {
          return <TextItem TITLE={item.value} ID={item.id} />;
        })}
      </Row>
      <Row>
        <DropZone
          children={LeftBoard.map((item) => {
            return <TextItem TITLE={item.value} ID={item.id} />;
          })}
          REF={dropLeft}
        />
        <DropZone
          children={RightBoard.map((item) => {
            return <TextItem TITLE={item.value} ID={item.id} />;
          })}
          REF={dropRight}
        />
      </Row>
      <ButtonSave LENGTH={RightBoard.length} CLICK={() => SaveData()} />
      <TableTest ARRAY={SaveBoard} />
    </Container>
  );
}
