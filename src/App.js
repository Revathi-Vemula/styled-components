import './App.css'
import {Heading, CustomButton} from './styledComponents'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <CustomButton type="button">Click me</CustomButton>
    <CustomButton type="button" outline>
      Call me
    </CustomButton>
  </>
)

export default App
