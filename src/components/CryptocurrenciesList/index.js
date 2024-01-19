// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

// const currencyList = [
//   {
//     currencyName: 'XMR',
//     usdValue: '153.60',
//     euroValue: '141.17',
//     id: 'd35f90ed-664d-42bd-9961-f636d21f20d1',
//     currencyLogo: 'https://www.cryptocompare.com/media/19969/xmr.png',
//   },
// ]

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="crypto-bg-container">
            <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
            <img
              className="crypto-image"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul className="table-container">
              <li className="table-heading">
                <h1 className="coin-heading">Coin Type</h1>
                <div className="currency-count-container">
                  <h1 className="currency-count">USD</h1>
                  <h1 className="currency-count">Euro</h1>
                </div>
              </li>
              {currencyList.map(eachCurrency => (
                <CryptocurrencyItem
                  key={eachCurrency.id}
                  currencyDetails={eachCurrency}
                />
              ))}
            </ul>
          </div>
        )}
        )
      </>
    )
  }
}

export default CryptocurrenciesList
