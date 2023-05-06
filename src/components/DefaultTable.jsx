import { useState } from "react";
import styled from "styled-components";

const TableStyle = styled.table`
  background: #fff;
  color: inherit;
  padding: 10px 30px 30px 30px;
  border-radius: 8px;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  font-size: 14px;
  text-align: left;
  table-layout: fixed;

  thead {
    font-weight: bold;
    background: #fff;
  }

  td,
  th {
    position: relative;
    padding: 20px 10px;
    border-bottom: 1px solid #e1e3ee;
    border-right: none;
  }

  th {
    white-space: nowrap;
  }

  td {
    white-space: pre-line;
  }

  > tbody {
    > tr {
      &:hover {
        background: #f8faff;
      }
    }
  }
`;

function DefaultTable(props) {
  const SetCol = () => {
    return props.thead.map((el) => {
      return <col width={el.width} key={el.value} />;
    });
  };
  return (
    <TableStyle>
      <colgroup>
        <SetCol></SetCol>
      </colgroup>
      {props.children}
    </TableStyle>
  );
}

export default DefaultTable;
