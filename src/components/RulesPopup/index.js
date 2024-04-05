import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'
import 'reactjs-popup/dist/index.css'

const RulesPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Rules
        </button>
      }
    >
      {close => (
        <>
          <div className="popup-cont">
            <button
              type="button"
              className="close"
              onClick={() => close()}
              aria-label="Close Rules Popup"
            >
              <RiCloseLine className="close" />
            </button>

            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </div>
        </>
      )}
    </Popup>
  </div>
)
export default RulesPopUp
