import { PostCardSection, PostInfoStyle, FavoritePostStyle, PostDetailsStyle, PostSectionSessionStyle } from "./PostStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faStar, faTwitter } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'



function Post ( ) {
    return(
        <PostCardSection>
            <PostInfoStyle>
                <PostInfo />
                <FavoritePost />            
                <PostDetails />
            </PostInfoStyle> 
            <PostSectionSession /> 
        </PostCardSection>
    )
}
function PostInfo(){
    return(
        <>
            <img  src="/assets/speaker-01.jpg" alt="image" />
            <p>Name and Surname</p>
        </>
    )
}

function FavoritePost() {
    return(
        <FavoritePostStyle>
            <p><FontAwesomeIcon icon={faStar} /></p>
            <p>Favorite</p>
        </FavoritePostStyle>
    )
}

function PostDetails({bio, company, twitterHandle }) {
    return(
        <section>
        <h4>{bio}</h4>
        <PostDetailsStyle>
            <aside>
                <a><FontAwesomeIcon icon={faBuilding} className="icon" /></a>
                <div>
                    <h5>Company</h5>
                    <h5>Company</h5>
                    <h6>{company}</h6>
                </div>
            </aside>
            <aside>
                <a><FontAwesomeIcon icon={[fab, faTwitter]} className="icon"/></a>
                <div>
                    <h5>Twitter</h5>
                    <h5>Twitter</h5>
                    <h6>{twitterHandle}</h6>
                </div>
            </aside>
        </PostDetailsStyle>           
    </section>
    )
}

function PostSectionSession() {
    return(
        <PostSectionSessionStyle> 
            <p>text text text</p>
        </PostSectionSessionStyle>
        
    )
}


export default Post;