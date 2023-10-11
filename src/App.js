import {Component} from 'react'
import {Button} from './styledComponents'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    imageUrl: languageGreetingsList[0].imageUrl,
    imageAlt: languageGreetingsList[0].imageAltText,
  }

  changeTheLanguage = Languageid => {
    const selectLanguage = languageGreetingsList.filter(
      eachItem => eachItem.id === Languageid,
    )
    console.log(selectLanguage)
    this.setState({
      imageUrl: selectLanguage[0].imageUrl,
      imageAlt: selectLanguage[0].imageAltText,
    })
  }

  render() {
    const {imageAlt, imageUrl} = this.state
    return (
      <div className="App-container">
        <h1>Multilingual Greetings</h1>
        <ul className="buttonContainer">
          {languageGreetingsList.map(eachItem => (
            <li key={eachItem.id}>
              <Button
                type="button"
                key={eachItem.id}
                onClick={() => this.changeTheLanguage(eachItem.id)}
              >
                {eachItem.buttonText}
              </Button>
            </li>
          ))}
        </ul>

        <img className="languageImage" src={imageUrl} alt={imageAlt} />
      </div>
    )
  }
}

export default App
