import  {HeaderContainer}  from "./HeaderStyle";

const Header = () => {
    return(
        <div>
            <HeaderContainer>
                <img src="./assets/SVCClogo.png"></img>
                <h1>Sillicon Valley Code Camp</h1>
                <div>
                    <p>Hello Motto!</p>
                    <button>Sign-out</button>
                </div>
            </HeaderContainer>
        </div>
    )
}

export default Header;