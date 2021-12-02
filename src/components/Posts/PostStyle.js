import styled from "styled-components";

export const PostCardSection = styled.div`
    min-height: 450px;
    margin: 3em 0;
    width: 350px;
    border-radius: .2em;
    border: 1px solid #e6e6e6;
`

export const PostInfoStyle = styled.div`
    margin: 1em;
    
    img {
        height: 400px;
        width: 100%;    
    }

    p{
        margin: .5em 0;
    }
`
export const FavoritePostStyle = styled.div`
    display: flex;

    p{  
        margin-left: .1em;
    }

`
export const PostDetailsStyle = styled.div`
    display: flex;

    aside{
        margin-right: 1em;
        display: flex;
        align-items: center;

        a{
            position: relative;
            margin-right: .5em;
            width: 2em;
            height: 2em; 
            border-radius: 2em;
            border: .2em solid #51b5b1;
            color: #51b5b1;
            text-align: center;

            .icon{
                position: absolute;
                top: .2em;
                right: .25em;
                font-size: 1.4em;
            }
        }
    }
`

export const PostSectionSessionStyle = styled.div`
    margin: 1em .5em;
    min-height: 2em;
    background-color: #e6e6e6;
    border-radius: .2em;
`