import styled, { createGlobalStyle } from "styled-components";
import { GlobalStyleComponent } from "styled-components";
import Header from "./Header/Header";
import Toolbar from "./Toolbar/Toolbar";
import Posts from "./Posts/Posts";
import { data } from "./Data";

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
export const Wrapper = styled.div`
  margin: 0 8em;
   `

const App = ({data}) => {
    return(
        <div>
            <GlobalStyle/>
                <Header/>
                <Toolbar />
                <Posts data={data} />
        </div>
    )
}

export default App;