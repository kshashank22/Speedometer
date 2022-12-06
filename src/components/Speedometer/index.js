// Write your code here
import {Component} from 'react'

import './index.css'

let value = 0
class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous count value ${prevState.count}`)
      if (prevState.count < 200) {
        value = prevState.count + 10
      } else {
        value = 200
      }
      return {count: value}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      console.log(`previous count value ${prevState.count}`)
      if (prevState.count > 0) {
        value = prevState.count - 10
      } else {
        value = 0
      }
      return {count: value}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedometer"
          />
        </div>
        <h1 className="count">Speed Is {count}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="accelerate"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="apply-brake"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
