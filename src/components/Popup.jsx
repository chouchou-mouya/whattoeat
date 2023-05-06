import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PopupStyle = styled.div`
  position: fixed;
  width: 100%;
  z-index: 9;
  top: 0;
  left: 0;
  .popup-bg {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    z-index: -1;
  }
  .popup {
    position: relative;
    top:100px ;
    width:fit-content ;
    margin:0 auto ;
    min-width:300px ;
    .close-icon {
      position: absolute;
      right:0px ;
      svg {
        cursor: pointer;
        color: #fff;
        font-size:20px ;
      }
    }
    .popup-content{
      position: relative;
      top:30px ;
    }
  }
`;
function Popup({ children, showState, setState }) {
  if (showState) {
    return (
      <PopupStyle>
        <div className="popup-bg"></div>
        <div className="popup">
          <div className="close-icon">
            <FontAwesomeIcon
              icon="xmark"
              onClick={() => {
                setState(false);
              }}
            />
          </div>
          <div className="popup-content">{children}</div>
        </div>
      </PopupStyle>
    );
  }
}
export default Popup;
