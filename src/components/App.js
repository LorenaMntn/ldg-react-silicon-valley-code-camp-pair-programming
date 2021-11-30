import Header from "./Header/Header";
import styled, { createGlobalStyle } from "styled-components";
import { GlobalStyleComponent } from "styled-components";

const FontStyle = styled.div`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
`

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        box-sizing: border-box;
        font-family: "Open Sans", serif;
    }
`
const Wrapper = styled.div`
    margin: 0 8em;
`

const App = () => {
    return(
        <div>
            <GlobalStyle/>
            <Wrapper>
                <Header/>
            </Wrapper>
            
        </div>
    )
}

export default App;