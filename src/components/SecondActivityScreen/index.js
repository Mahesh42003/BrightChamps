import './index.css'

const SecondActivityScreen = props => {
  const {o, checking1, data, changealphachecking} = props
  const clicking = () => {
    changealphachecking(o, data[o].alphabet)
  }

  return (
    <li className="each-list">
      {checking1[o] ? (
        <div className="background-of-fruit">
          <h1 className="heading">{data[o].alphabet}</h1>
        </div>
      ) : (
        <img
          src="https://i.im.ge/2024/05/25/KaF3DP.cardbluecard.png"
          onClick={clicking}
        />
      )}
    </li>
  )
}
export default SecondActivityScreen
