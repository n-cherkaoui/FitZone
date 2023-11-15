import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import HomeFeed from "../components/HomeFeed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPen } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import "./TopNav.css"

const TopNav = () => {
    const [searchField, setSearchField] = useState('');
    const location = useLocation();

    const handleChange = (e) => {
        setSearchField(e.target.value)
    }

    return (
        <div className="wholeSite">
            <div className="topNav">
                <Link to="/"><h1>FitZone</h1></Link>
                <div className="subNav">
                    {location.pathname === "/" ?
                        <div className="searchBox">
                            <FontAwesomeIcon className="searchIcon" icon={faSearch} style={{color: "#000000"}}/>
                            <input className="searchBar" type="text" placeholder="Search" onChange={handleChange}></input>
                        </div>
                        : null}
                    <div className="navButtons">
                        <Link to="/create">
                            <FontAwesomeIcon icon={faPen} />
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet context={{ searchField: { searchField } }} />
        </div >
    )
}

// const sendComment = async (e) => {
//     e.preventDefault();
//     if (e.key === 'Enter') {

//         console.log(e.target.value)

//         // Insert the e into the database
//         await supabase
//             .from('Comments')
//             .insert({ content: e.target.value, userId: id })
//             .select()

//         setAddedComments(addedComments + 1)
//         // Redirect to the home page
//         // window.location = "/";
//     }
// };

export default TopNav