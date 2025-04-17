import SearchPanel from "./SearchPanel"
import DisplayCards from "./DisplayCards"

export default function MainContent(){
    return(
        <div className="main-container">
            <SearchPanel />
            <DisplayCards />
        </div>
    )
}