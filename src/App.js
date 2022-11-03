import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {countList: [], inputVal: ''}

  onAddCharacter = event => {
    event.preventDefault()
    const {inputVal} = this.state
    const newCount = {
      id: uuidv4(),
      inputVal,
    }
    this.setState(prevState => ({
      countList: [...prevState.countList, newCount],
      inputVal: '',
    }))
  }

  textMethod = event => {
    this.setState({inputVal: event.target.value})
  }

  render() {
    const {countList, inputVal} = this.state
    console.log(countList)
    const res = countList.length === 0
    if (res) {
      return (
        <div className="bg-cont">
          <div className="card-1">
            <div className="inner-card">
              <h1 className="head">Count the characters like a Boss...</h1>
            </div>
            <div className="img-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="img"
              />
            </div>
          </div>
          <form className="card-2" onSubmit={this.onAddCharacter}>
            <h1 className="head-2">Character Counter</h1>
            <div className="input-cont">
              <input
                type="text"
                className="input"
                placeholder="Enter the Characters here"
                onChange={this.textMethod}
                value={inputVal}
              />
              <button type="submit" className="butt">
                Add
              </button>
            </div>
          </form>
        </div>
      )
    }
    return (
      <div className="bg-cont">
        <div className="card-1">
          <div className="inner-card">
            <h1 className="head">Count the characters like a Boss...</h1>
          </div>
          <ul className="list-cont">
            {countList.map(e => (
              <li key={e.id} className="li-h">
                <p className="li-p">
                  {e.inputVal}: {e.inputVal.length}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <form className="card-2" onSubmit={this.onAddCharacter}>
          <h1 className="head-2">Character Counter</h1>
          <div className="input-cont">
            <input
              type="text"
              className="input"
              placeholder="Enter the Characters here"
              onChange={this.textMethod}
              value={inputVal}
            />
            <button type="submit" className="butt">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
