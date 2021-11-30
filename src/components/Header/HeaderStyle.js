import styled from "styled-components";

export const HeaderContainer = styled.div`
    margin: 1.5em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
     width: 6.5em;
     height: 1.5em
    }

    div{
        display: flex;
        align-items: center;

        p{
            margin-right: .7em;
        }

        button{
            width: 5.8em;
            height: 2em;
            border-radius: .2em;
            border: none;
            background-color: #51b5b1;
            color: #ffff;
        }
    }
`

