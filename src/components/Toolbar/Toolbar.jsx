import { ReactElement } from 'react'
import { ToolbarSection, SessionToolbarStyle, FunctionalityToolbarStyle, ShowSessionsStyle, EventYearStyle, SearchStyle } from "./ToolbarStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Toolbar = () => {
    return (
        <ToolbarSection>
            <SessionToolbarStyle>
                 <EventYear/>
                 <ShowSessions/>       
            </SessionToolbarStyle>
            <FunctionalityToolbarStyle>
                <FavoriteList />
                <Theme />
                <Search />
            </FunctionalityToolbarStyle>

        </ToolbarSection>
    )
}

function EventYear() {
    return(
        <EventYearStyle>
            <label>Year</label>
            <select>
                <option value="2019">2019</option>
            </select>     
        </EventYearStyle>
    )
}

function ShowSessions() {
    return(
        <ShowSessionsStyle>
        <p>Show Sessions</p>
 
            <label className="control"> 
                <input type="checkbox"></input>
                <span className="switch"></span>
            </label>

        </ShowSessionsStyle>
    )
}

function FavoriteList() {
    return(
        <ShowSessionsStyle>
         <p>Favorite List</p>
            <label className="control"> 
                <input type="checkbox"></input>
                <span className="switch"></span>
            </label>
        </ShowSessionsStyle>
    )
}

function Theme() {
    return(
        <EventYearStyle>
        <label>Theme</label>
        <select>
            <option value="Dark">Dark</option>
            <option value="Light">Light</option>
        </select>     
    </EventYearStyle>
    )
}

function Search() {
    return(
        <SearchStyle>
            <input
            type="text"
            placeholder="Search..."></input>
            <button><FontAwesomeIcon icon={faSearch} /></button>       
        </SearchStyle>
    )
}

export default Toolbar;