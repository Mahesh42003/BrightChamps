import {Component} from 'react'
import {Line} from 'rc-progress'
import InsideActivityScreen from '../InsideActivityScreen'
import SecondActivityScreen from '../SecondActivityScreen'
import './index.css'

const FruitsData = [
  {
    name: 'Apple',
    image_link:
      'https://i.im.ge/2024/05/26/Kag49L.WhatsApp-Image-2024-05-25-at-4-53-35-PM.jpeg',
  },
  {
    name: 'Strawberry',
    image_link:
      'https://i.im.ge/2024/05/26/KageQx.WhatsApp-Image-2024-05-25-at-4-53-35-PM-1.jpeg',
  },
  {
    name: 'Kiwi',
    image_link:
      'https://i.im.ge/2024/05/26/Ka8MLa.WhatsApp-Image-2024-05-25-at-4-53-35-PM-2.jpeg',
  },
  {
    name: 'Pomogranate',
    image_link:
      'https://i.im.ge/2024/05/26/Ka8Tny.WhatsApp-Image-2024-05-25-at-4-53-36-PM.jpeg',
  },
  {
    name: 'Guava',
    image_link:
      'https://i.im.ge/2024/05/26/Ka8XqS.WhatsApp-Image-2024-05-25-at-4-53-36-PM-1.jpeg',
  },
  {
    name: 'Banana',
    image_link:
      'https://i.im.ge/2024/05/25/Kaaloy.WhatsApp-Image-2024-05-25-at-4-53-36-PM-2.jpeg',
  },
]

const FruitAlphabets = [
  {
    id: 0,
    alphabet: 'A',
  },
  {
    id: 1,
    alphabet: 'S',
  },
  {
    id: 2,
    alphabet: 'K',
  },
  {
    id: 3,
    alphabet: 'P',
  },
  {
    id: 4,
    alphabet: 'G',
  },
  {
    id: 5,
    alphabet: 'B',
  },
]

FruitsData.sort(() => Math.random() - 0.5)
FruitAlphabets.sort(() => Math.random() - 0.5)

class ActivityScreen extends Component {
  state = {
    values: [0, 1, 2, 3, 4, 5],
    checking: [false, false, false, false, false, false],
    alphaChecking: [false, false, false, false, false, false],
    m: '',
    n: '.',
    imgIndex: '',
    alphaIndex: '',
    count: 0,
    firstData: FruitsData,
    secondData: FruitAlphabets,
    percentage: 0,
    count1: 0,
  }

  changechecking = (k, l, i) => {
    const {values, checking, count, m, n, alphaChecking, imgIndex} = this.state
    const lengthOfValues = values.length - 1
    const filtering = checking.filter(each => each !== true)
    const filtering1 = alphaChecking.filter(each => each !== true)
    const filtering2 = values.slice(0, lengthOfValues)
    const changing = values.map(each => {
      if (each === k) {
        return true
      }
      return false
    })
    this.setState({checking: changing, m: l, imgIndex: i})
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  changealphachecking = (k, l) => {
    const {
      values,
      alphaChecking,
      n,
      count,
      m,
      checking,
      firstData,
      secondData,
      alphaIndex,
      percentage,
    } = this.state

    const lengthOfValues = values.length - 1
    const filtering = checking.filter(each => each !== true)
    const filtering1 = alphaChecking.filter(each => each !== true)
    const filtering2 = values.slice(0, lengthOfValues)
    const filtering3 = firstData.filter(
      each => each.name[0] !== secondData[k].alphabet,
    )
    const changing = values.map(each => {
      if (each === k) {
        return true
      }
      return false
    })
    this.setState({alphaChecking: changing, n: l, alphaIndex: k})
    this.setState(prevState => ({
      count: prevState.count + 1,
      count1: prevState.count1 + 1,
      percentage: prevState.percentage + 16.66,
    }))
  }

  RetryButton = () => {
    const {percentage} = this.state
    FruitsData.sort(() => Math.random() - 0.5)
    FruitAlphabets.sort(() => Math.random() - 0.5)
    this.setState({
      values: [0, 1, 2, 3, 4, 5],
      checking: [false, false, false, false, false, false],
      alphaChecking: [false, false, false, false, false, false],
      m: '',
      n: '.',
      imgIndex: '',
      alphaIndex: '',
      count: 0,
      firstData: FruitsData,
      secondData: FruitAlphabets,
      percentage: 0,
    })
  }

  backButton = () => {
    const {history} = this.props
    history.replace('/Instruction Screen')
  }

  changingnewOne = () => {
    const {
      m,
      n,
      checking,
      alphaChecking,
      values,
      count,
      firstData,
      secondData,
    } = this.state
    const lengthOfValues = values.length - 1
    const filtering = checking.filter(each => each !== true)
    const filtering1 = alphaChecking.filter(each => each !== true)
    const filtering2 = values.slice(0, lengthOfValues)
    const filtering3 = firstData.filter(each => each.name[0] !== m)
    const filtering4 = secondData.filter(each => each.alphabet !== n)
    this.setState({
      values: filtering2,
      checking: filtering,
      alphaChecking: filtering1,
      m: '',
      n: '.',
      firstData: filtering3,
      secondData: filtering4,
      count: 0,
    })
  }

  render() {
    const {
      values,
      checking,
      alphaChecking,
      count,
      n,
      m,
      firstData,
      secondData,
      imgIndex,
      alphaIndex,
      percentage,
      count1,
    } = this.state

    console.log(firstData)
    console.log(secondData)
    if (firstData.length === 0) {
      return (
        <div className="Into-Screen-Background-Image flexing-2">
          <h1 className="full-success-message">
            You have Collected 6 bananas.
          </h1>
          <button onClick={this.RetryButton} className="margin-to-ok">
            Play Again
          </button>
        </div>
      )
    }
    if (m !== n && count === 2) {
      return (
        <div className="Into-Screen-Background-Image flexing-2">
          <h1 className="failure-message">It's Not Match</h1>
          <div className="flexing-of-two-images">
            <img
              src={firstData[imgIndex].image_link}
              className="background-of-fruit"
            />
            <div className="background-of-fruit">
              <h1 className="heading">{secondData[alphaIndex].alphabet}</h1>
            </div>
          </div>
          <button onClick={this.RetryButton} className="margin-to-ok">
            Retry
          </button>
        </div>
      )
    }
    if (m === n && count === 2) {
      return (
        <div className="Into-Screen-Background-Image flexing-2">
          <h1 className="success-message"> It's a Match</h1>
          <div className="flexing-of-two-images">
            <img
              src={firstData[imgIndex].image_link}
              className="background-of-fruit"
            />
            <div className="background-of-fruit">
              <h1 className="heading">{secondData[alphaIndex].alphabet}</h1>
            </div>
          </div>
          <button onClick={this.changingnewOne} className="margin-to-ok">
            Ok
          </button>
        </div>
      )
    }
    return (
      <div className="Into-Screen-Background-Image1 ">
        <div className="backplusprogress">
          <img
            src="https://i.im.ge/2024/05/25/KauH1Y.Group-156back.png"
            className="back-button"
            onClick={this.backButton}
          />
          <div className="flexing-three">
            <Line
              percent={percentage}
              strokeWidth={1}
              strokeColor="blue"
              width="500px"
              height="20px"
              img="https://i.im.ge/2024/05/25/KauNoc.Group-154banana.png"
              className="margin-top-line-bar"
            />
            <img
              src="https://i.im.ge/2024/05/25/KauNoc.Group-154banana.png"
              className="banana-size1"
            />
          </div>
        </div>
        <div className="flexing-of-both-blue-pink">
          <ul className="unordered-list">
            {values.map(each => (
              <InsideActivityScreen
                o={each}
                checking1={checking}
                data={firstData}
                changechecking={this.changechecking}
              />
            ))}
          </ul>
          <ul className="unordered-list">
            {values.map(each => (
              <SecondActivityScreen
                o={each}
                data={secondData}
                changealphachecking={this.changealphachecking}
                checking1={alphaChecking}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default ActivityScreen
