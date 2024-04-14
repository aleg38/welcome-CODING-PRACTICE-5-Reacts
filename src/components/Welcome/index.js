// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onSubscribeBtn = () => {
    this.setState(prevText => ({isSubscribe: !prevText.isSubscribe}))
  }

  getBtnText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getBtnText()
    return (
      <div className="welcome-app-container">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button onClick={this.onSubscribeBtn} className="button" type="button">
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
