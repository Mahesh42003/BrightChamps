import './index.css'

const InsideActivityScreen = props => {
  const {o, checking1, data, changechecking} = props
  const clickingPinkImage = () => {
    changechecking(o, data[o].name[0], o)
  }

  return (
    <li className="each-list">
      {checking1[o] ? (
        <div className="background-of-fruit">
          <img src={data[o].image_link} className="size-of-fruit" />
        </div>
      ) : (
        <img
          src="https://i.im.ge/2024/05/25/KaFEep.cardPinkCard.png"
          onClick={clickingPinkImage}
        />
      )}
    </li>
  )
}
export default InsideActivityScreen
