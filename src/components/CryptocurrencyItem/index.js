// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails
  return (
    <li className="list-item-container">
      <div className="logo-container">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="logo-name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="count">{usdValue}</p>
        <p className="count">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
