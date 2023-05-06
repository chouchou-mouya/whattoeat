import { useState } from "react";
import styled from "styled-components";
const AddBox = styled.div`
display:flex ;
margin:10px 0;
justify-content:space-between ;
input{
  border:none ;
  background:#fff ;
  border-radius:8px ;
  padding:10px 10px;
  font-size:15px ;
  outline:none ;
  width:100% ;
}
.btn_box{
  display:flex ;
  button{
    height:auto ;
    min-width:60px ;
    margin:0 5px;
    &.cancel{
      background:#eee ;
      &:hover{
        background:#f9f9f9 ;
      }
    }
    &.submit{
      background: #fffa00;
      &:hover{
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
      />
      <div className="btn_box">
      <button
      className="cancel"
        onClick={() => {
          setAddState(false);
        }}
      >
        取消
      </button>
      <button className="submit" onClick={insertValue}>新增</button>
      </div>

    </AddBox>
  );
}

export default ShowAddBox;
