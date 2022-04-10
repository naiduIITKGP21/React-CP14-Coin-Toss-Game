// Write your code here
import {Component} from 'react'
import './index.css'

const headImageUrl = `https://assets.ccbp.in/frontend/react-js/heads-img.png`
const tailImageUrl = `https://assets.ccbp.in/frontend/react-js/tails-img.png`

class CoinToss extends Component {
  state = {
    tossResultImage: headImageUrl,
    headsCount: 0,
    tailCount: 0,
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevStat => {
      const {headsCount, tailCount} = prevStat
      return {
        headsCount: tossResult === 0 ? headsCount + 1 : headsCount,
        tailCount: tossResult === 0 ? tailCount : tailCount + 1,
        tossResultImage: tossResult === 0 ? headImageUrl : tailImageUrl,
      }
    })
  }

  render() {
    const {headsCount, tailCount, tossResultImage} = this.state
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            alt="toss result"
            src={tossResultImage}
            className="toss-result-img"
          />
          <button type="button" onClick={this.onClickToss} className="button">
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {headsCount + tailCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
