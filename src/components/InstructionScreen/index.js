import {Component} from 'react'
import './index.css'

class InstructionScreen extends Component {
  backButton = () => {
    const {history} = this.props
    history.push('/IntroScreen')
  }

  playButton = () => {
    const {history} = this.props
    history.push('/ActivityScreen')
  }

  render() {
    return (
      <div className="Into-Screen-Background-Image ">
        <div className="backplusprogress">
          <img
            src="https://i.im.ge/2024/05/25/KauH1Y.Group-156back.png"
            className="back-button"
            onClick={this.backButton}
          />

          <h1 className="Progressbar">
            {}{' '}
            <img
              src="https://i.im.ge/2024/05/25/KauNoc.Group-154banana.png"
              className="banana-size"
            />
          </h1>
        </div>
        <div className="flexing-card-items">
          <div className="each-card-item">
            <img
              src="https://i.im.ge/2024/05/25/KaFEep.cardPinkCard.png"
              className="size-of-blue"
            />
            <div className="flexing-cards">
              <button className="one-button">01</button>
              <div className="margin-left-cards">
                <h2 className="card-heading">Select a Pink Card</h2>
                <p className="card-paragraph">It has images.</p>
              </div>
            </div>
          </div>
          <div className="each-card-item">
            <img
              src="https://i.im.ge/2024/05/25/KaF3DP.cardbluecard.png"
              className="size-of-blue"
            />
            <div className="flexing-cards">
              <button className="second-button">02</button>
              <div className="margin-left-cards">
                <h2 className="card-heading">Select a blue Card</h2>
                <p className="card-paragraph">It has alphabets.</p>
              </div>
            </div>
          </div>
          <div className="each-card-item">
            <img
              src="https://i.im.ge/2024/05/25/KaFZr0.Group-157blueandpink.png"
              className="size-of-blue third-image-size"
            />
            <div className="flexing-cards">
              <button className="third-button">03</button>
              <div className="margin-left-cards">
                <p className="card-paragraph">If they are same</p>
                <h2 className="card-heading">It's a Match !</h2>
                <p className="card-paragraph">otherwise retry:(</p>
              </div>
            </div>
          </div>
          <button className="play-button" onClick={this.playButton}>
            Play
          </button>
        </div>
      </div>
    )
  }
}
export default InstructionScreen
