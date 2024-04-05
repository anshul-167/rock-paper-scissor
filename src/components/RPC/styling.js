import styled from 'styled-components'

// Main Container Styles
export const MainCont = styled.div`
  background-color: #223a5f;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 105vh;
`

// Result Main Container Styles
export const ResultMainCont = styled.div`
  height: 55vh;
  padding: 5%;
  display: ${props => (props.resultClass === 'hide' ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// Result Sub Container Styles
export const ResultSubCont = styled.div`
  padding: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
`

// You Container Styles
export const YouCont = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// Score Container Styles
export const ScoreCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  border: solid 3px #ffffff;
  border-radius: 10px;
  padding: 3%;
  align-items: center;
`

// Heading Styles
export const H1 = styled.h1`
  color: #ffffff;
  font-size: 25px;
`

// Result Heading Styles
export const ResultHead = styled.p`
  color: #ffffff;
  font-size: 35px;
`

// Score Styles
export const Score = styled.p`
  color: #223a5f;
  font-size: 34px;
  font-weight: bold;
  margin-top: 2px;
  font-family: 'Roboto';
`

// Sub-heading Styles
export const H2 = styled.p`
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0px;
  font-family: 'Bree Serif';
`

// Score Sub Container Styles
export const ScoreSubCont = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 5px;
  flex-direction: column;
  padding: 1%;
  align-items: center;
  width: 10vw;
`

// Image Styles
export const Img = styled.img`
  height: 20vh;
`

// Unordered List Styles
export const Ul = styled.ul`
  list-style-type: none;
  display: ${props => (props.gameClass === 'hide' ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 40vw;
  margin-top: 3%;
  flex-wrap: wrap;
`

// List Item Styles
export const Li = styled.li`
  margin: 5%;
`

// Generic Button Styles
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0px;
  cursor: pointer;
`

// Play Again Button Styles
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border: none;
  outline: none;
  padding: 10px;
  cursor: pointer;
  color: #223a5f;
  font-weight: bold;
  border-radius: 5px;
`
