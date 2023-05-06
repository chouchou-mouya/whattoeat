import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ResPopup from "@/components/Popup";
import { useSelector } from "react-redux";
const HomePage = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  min-width: 250px;
  min-height: calc(100vh - (2rem) * 2);
  text-align: center;
  background: #fff;
  border-radius: 10px;
  letter-spacing: 1px;

  h1 {
    font-family: "Nunito", sans-serif;
    font-size: 50px;
    line-height: 50px;
  }
  .food-list-btn {
    width: fit-content;
    color: inherit;
    text-decoration: underline;
    font-size: 12px;
    display: block;
    margin: 15px auto;
    cursor: pointer;
    &:hover {
      color: #f89245;
    }
  }
  p {
    font-size: 15px;
  }
  .keep-height {
    min-height: 310px;
  }
`;

const MainFoodImage = styled.img`
  max-width: 300px;
  width: 100%;
  /* cubic-bezier(0.16, -0.83, 0.78, 1.49) */
  animation: 0.5s pop;
  @keyframes pop {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    98% {
      opacity: 1;
      transform: scale(105%);
    }
    100% {
      transform: scale(100%);
    }
  }
`;

const LandingBTN = styled.div`
  button {
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    background: #ffc700;
    padding: 5px 20px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-family: "Nunito", sans-serif;
    &:hover {
      background: #f89245;
    }
  }
`;

const ResStyle = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  .respopup-btn-box{
    display:flex ;
    justify-content:center;
  }
  .cancel_btn{
    font-size: 20px;
    background:#ccc ;
    color:#fff ;
    margin:0 5px;
  }
`;

function Home() {
  // console.log("HOME");
  const image_list = [
    "./src/assets/images/food1.png",
    "./src/assets/images/food2.png",
    "./src/assets/images/food3.png",
    "./src/assets/images/food4.png",
    "./src/assets/images/food5.png",
    "./src/assets/images/food6.png",
  ];
  const foods = useSelector((state) => state.foodList.foods);
  const [eventImageIndex, setImageIndex] = useState(0);
  const [resState, setResState] = useState(false);
  const [theFood, setTheFood] = useState("");
  const changeImage = () => {
    return setInterval(() => {
      setImageIndex((i) => (i <= image_list.length - 2 ? i + 1 : 0));
    }, 3 * 1000);
  };

  const showRes = () => {
    randomFood();
    setResState(true);
  };

  const randomFood = () => {
    const random_index = Math.floor(Math.random() * foods.length - 0 + 0);
    const random_food = foods[random_index].food;
    if (random_food == theFood) {
      randomFood();
    } else {
      setTheFood(foods[random_index].food);
    }
  };
  const successCallback = (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    const setCircle = changeImage();
    return () => clearInterval(setCircle);
  }, []);
  return (
    <HomePage>
      <div>
        {/* <img src={reactLogo}/> */}
        <div className="keep-height">
          <MainFoodImage
            key={image_list[eventImageIndex]}
            src={image_list[eventImageIndex]}
          />
        </div>
        <h1>What Shall We Eat Today</h1>
        <p>不要再煩惱了，為你的餐點帶來一點變化和驚喜！</p>
        <LandingBTN onClick={showRes}>
          <button>Launch!</button>
        </LandingBTN>
        <NavLink className="food-list-btn" to="food_list">
          建立你的食物清單
        </NavLink>
      </div>
      <ResPopup showState={resState} setState={setResState}>
        <ResStyle>
          <h1>{theFood}</h1>
          <div className="respopup-btn-box">
            <button className="cancel_btn" onClick={()=>{setResState(false)}}>Cancel</button>
            <LandingBTN onClick={randomFood}>
              <button>再來一次!</button>
            </LandingBTN>
          </div>
        </ResStyle>
      </ResPopup>
    </HomePage>
  );
}

export default Home;
