import  {HeaderContainer}  from "./HeaderStyle";
import { Wrapper } from "../App";

const Header = () => {
    return(
        <Wrapper>
            <HeaderContainer>
                <img src="./assets/SVCClogo.png"></img>
                <h1>Sillicon Valley Code Camp</h1>
                <div>
                    <p>Hello Motto!</p>
                    <button>Sign-out</button>
                </div>
            </HeaderContainer>
        </Wrapper>
    )
}

export default Header;