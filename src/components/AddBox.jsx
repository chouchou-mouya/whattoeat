import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
const AddBox = styled.div`
  background: #fff;
  padding: 20px;
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  input {
    border: none;
    background: #eee;
    border-radius: 4px;
    padding: 10px 10px;
    font-size: 15px;
    outline: none;
    flex: 2;
    max-width: 100%;
  }
  .btn_box {
    display: flex;
    button {
      height: auto;
      min-width: 60px;
      margin: 0 5px;
      &.cancel {
        background: #eee;
        &:hover {
          background: #f9f9f9;
        }
      }
      &.submit {
        background: #fffa00;
        &:hover {
          background: #fcff6b;
        }
      }
    }
  }
`;

function ShowAddBox({ setAddState, inputValue, setInputValue, insertValue }) {
  return (
    <AddBox>
      <input
        type="text"
        alt="food"
        value={inputValue["food"]}
        onChange={(e) => setInputValue({ food: e.target.value })}
        placeholder="Type the food name"
      />
      <div className="btn_box">
        <Button
          onClick={() => {
            setAddState(false);
          }}
        >
          取消
        </Button>
        <Button onClick={insertValue} variant="contained">新增</Button>
      </div>
    </AddBox>
  );
}

export default ShowAddBox;
