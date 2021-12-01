import Post from "./Post"
import styled from "styled-components";
import { Wrapper } from "../App";

const PostsStyle = styled.div`
    margin: 3em 0;
`

function Posts () {
    return(
        <Wrapper>
            <PostsStyle>
                <Post/>
            </PostsStyle>            
        </Wrapper>
    )
}

export default Posts