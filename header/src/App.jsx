import Welcome from "./components/Welcome/Welcome"
import Button from "./components/Button/Button"
import { useState } from "react"
function App() {
    const [text, settext] = useState('sss');
    const [text2, settext2] = useState('ффф');
    const [text3, settext3] = useState('ввв');
    function textRedactor(){
      settext('HAi');
    }
    
    function textRedactor1() {
			settext2('Hei');
		}

    function textRedactor2() {
			settext3('GAi');
		}

  return (
		<>
			<Welcome />
			<Button kind='default' onClick={textRedactor}>
				{text}
			</Button>
			<br></br>

			<Button kind='primary' onClick={textRedactor1}>
				{text2}
			</Button>

			<Button kind='danger' onClick={textRedactor2}>
				{text3}
			</Button>
		</>
	);
}

export default App
