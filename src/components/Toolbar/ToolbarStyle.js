import styled from "styled-components";

export const ToolbarSection =  styled.div`
    border-top: .1em solid #e6e6e6;
    border-bottom: .1em solid #e6e6e6;
`
export const SessionToolbarStyle = styled.div`
    margin: 0 8em;
    padding: .3em 0;
    font-weight: bold;
    display: flex;
    align-items: center;

    section{
        display: flex;    
    }
`

export const SessionsBar = styled.div`
    border-left: 10px solid red;

`
export const FunctionalityToolbarStyle = styled.div`
     margin: 0 8em;
     padding: .3em 0;
     display: flex;
     border-top: .1em solid #e6e6e6;
     align-items: center;
     justify-content: space-between;
     font-weight: bold;
`
export const EventYearStyle = styled.div`
    margin: .5em 0 .5em 1em;

    select{
        margin-left: .8em;
        margin-right: .8em;
        width: 5.5em;
        height: 2em;
        border-radius: .2em;
        border: 1px solid #e6e6e6;
    }
`
export const ShowSessionsStyle = styled.div`
    display: flex;
    align-items: center;

    p{
     margin: 0 1em;
    }

    .control {
        position: relative;
        display: inline-block;
        width: 65px;
        height: 30px;
        input {
            height: 0;
            &:checked + .switch {
                 background-color: #51b5b1;
            }
         }
    }
    

    .switch {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #949494;
        transition: transform 0.2s linear;
        border-radius: 25px;
            &::before {
            position: absolute;
            content: "";
            height: 24px;
            width: 24px;
            left: 4px;
            bottom: 3px;
            background-color: white;
            transition: transform 0.2s linear;
            border-radius: 50%;
        }
    }
    input:checked + .switch:before {
        transform: translateX(33px);
    }
`
export const SearchStyle = styled.div`
    
    input{
        height: 1.8em;
        border-radius: .2em 0 0 .2em;
        border: 1px solid #e6e6e6;
        cursor: pointer;
        :focus{
            outline: black;
        }
    }

    button{
        width: 2.5em;
        height: 2.1em;
        border-radius: 0 .2em .2em 0;
        border: none;
        background-color: #787777;
        color: #ffff;
        cursor: pointer;

        :active{
            background-color: #8f8d8d;
        }
    }
`
