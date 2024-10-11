import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DefaultTable from "@/components/DefaultTable";
import AddBox from "@/components/AddBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { addTheFood, deleteTheFood } from "@/store/redux/actions";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Button } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";

const CusBtn = muiStyled(Button)(({ theme }) => {
  console.log(theme.palette.primary.main);
  return {
    background: theme.palette.primary.main,
    color: "#fff",
  };
});

const FoodListPage = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  min-width: 250px;
  min-height: calc(100vh - (2rem) * 2);
  text-align: center;
  border-radius: 10px;
  letter-spacing: 1px;
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    button {
      padding: 8px 10px;
      &.btn_return {
        background: transparent;
        border: 1px solid #333;
        color: #333;
        &:hover {
          background: #333;
          color: #fff;
        }
      }
      &.btn_chagneState {
        background: #fffa00;
        &:hover {
          background: #fcff6b;
        }
      }
    }
  }
  .delete-icon {
    color: #ff6565;
    cursor: pointer;
    font-size: 20px;
    &:hover {
      color: #ff9c9c;
    }
  }
`;

const DialogActionsStyle = styled.div`
  display: flex;
  margin: 10px;
  justify-content: flex-end;
  button {
    margin: 10px 3px;
    padding: 5px 10px;
    font-size: 12px;
  }
  .canel_btn {
    background: #ccc;
    &:hover {
      background: #e8e8e8;
    }
  }
  .lunch_btn {
    background: #70be37;
    color: #fff;
    &:hover {
      background: #94cf69;
    }
  }
`;
function ShowAddBox({
  setAddState,
  addState,
  inputValue,
  setInputValue,
  insertValue,
}) {
  if (addState) {
    return (
      <AddBox
        setAddState={setAddState}
        inputValue={inputValue}
        setInputValue={setInputValue}
        insertValue={insertValue}
      />
    );
  }
}

function FoodList() {
  // https://www.tpisoftware.com/tpu/articleDetails/2820
  const foods = useSelector((state) => state.foodList.foods);
  const [open, setOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const dispatch = useDispatch();
  const [inputValue, setValue] = useState({
    food: "",
  });

  const [addState, setAddState] = useState(false);
  const thead = [
    { label: "食物清單", value: "food", width: "auto" },
    {
      label: "操作",
      value: "action",
      width: 80,
    },
  ];
  const setTh = thead.map((el) => {
    return <th key={el.value}>{el["label"]}</th>;
  });
  const setTd = (el, index) => {
    return thead.map(({ label, value }) => {
      if (value == "action") {
        return (
          <td key={`${index}_${value}`}>
            <FontAwesomeIcon
              className="delete-icon"
              icon="trash-can"
              onClick={() => {
                handleClickOpen(index);
              }}
            />
          </td>
        );
      } else {
        return <td key={`${index}_${value}`}>{el[value]}</td>;
      }
    });
  };
  const dataData = foods.map((el, index) => {
    return <tr key={index}>{setTd(el, index)}</tr>;
  });
  const handleAddBox = () => {
    setAddState(true);
    setValue("");
  };
  const deleteFood = () => {
    dispatch(deleteTheFood(deleteIndex));
    setOpen(false);
  };
  const insertValue = () => {
    // setFoods([...foods, inputValue]);
    dispatch(addTheFood(inputValue));
    setValue("");
    setAddState(false);
  };

  const handleClickOpen = (index) => {
    setOpen(true);
    setDeleteIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FoodListPage>
      <div>
        <div className="top">
          <NavLink to="/">
            <Button variant="outlined">Return</Button>
          </NavLink>
          <CusBtn onClick={handleAddBox} variant="contained">
            Add food
          </CusBtn>
        </div>
        <ShowAddBox
          addState={addState}
          setAddState={setAddState}
          inputValue={inputValue}
          setInputValue={setValue}
          insertValue={insertValue}
        ></ShowAddBox>
        <DefaultTable thead={thead}>
          <thead>
            <tr>{setTh}</tr>
          </thead>
          <tbody>{dataData}</tbody>
        </DefaultTable>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              確定刪除嗎？
            </DialogContentText>
          </DialogContent>
          <DialogActionsStyle>
            <Button onClick={handleClose}>取消</Button>
            <Button variant="contained" color="error" onClick={deleteFood}>
              確定
            </Button>
          </DialogActionsStyle>
        </Dialog>
      </div>
    </FoodListPage>
  );
}

export default FoodList;
