import {Component} from 'react'
import {
  MemeContainer,
  FormContainer,
  Heading,
  InputElement,
  LabelElement,
  InputEl,
  SelectEl,
  CustomButton,
  GeneratedMemeContainer,
  TopText,
  BottomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    isGenerated: false,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
  }

  onGenerate = event => {
    event.preventDefault()
    this.setState({isGenerated: true})
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  renderMeme = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    const font = fontSize + 'px'
    console.log(font)
    return (
      <GeneratedMemeContainer data-testid="meme" bgImage={imageUrl}>
        <TopText fontSize={font}>{topText}</TopText>
        <BottomText fontSize={font}>{bottomText}</BottomText>
      </GeneratedMemeContainer>
    )
  }

  render() {
    const {isGenerated} = this.state
    return (
      <MemeContainer>
        <FormContainer onSubmit={this.onGenerate}>
          <Heading>Meme Generator</Heading>
          <InputElement>
            <LabelElement htmlFor="imageInput">Image URL</LabelElement>
            <InputEl
              type="text"
              placeholder="Enter the Image URL"
              id="imageInput"
              onChange={this.onChangeImageUrl}
            />
          </InputElement>
          <InputElement>
            <LabelElement htmlFor="top">Top Text</LabelElement>
            <InputEl
              type="text"
              placeholder="Enter the Top Text"
              id="top"
              onChange={this.onChangeTopText}
            />
          </InputElement>
          <InputElement>
            <LabelElement htmlFor="bottom">Bottom Text</LabelElement>
            <InputEl
              type="text"
              placeholder="Enter the Bottom Text"
              id="bottom"
              onChange={this.onChangeBottomText}
            />
          </InputElement>
          <InputElement>
            <LabelElement htmlFor="select">Font Size</LabelElement>
            <SelectEl id="select" onChange={this.onChangeFontSize}>
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId}>{each.displayText}</option>
              ))}
            </SelectEl>
          </InputElement>
          <CustomButton type="submit">Generate</CustomButton>
        </FormContainer>
        {isGenerated && this.renderMeme()}
      </MemeContainer>
    )
  }
}

export default MemeGenerator
