import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import HomeFeed from "../components/HomeFeed";

const TopNav = () => {
    const [searchField, setSearchField] = useState('');
    
    const handleChange = (e) => {
        setSearchField(e.target.value)
    }

    return (
        <div className="topNav">
            <h1>FitZone</h1>
            <input type="text" placeholder="Search" onChange={handleChange}></input>
            <div className="navButtons">
                <Link to="/">Home</Link>
                <Link to="/create">Create New Post</Link>
            </div>
            <Outlet context={{searchField:{searchField}}}/>
        </div>
    )
}

export default TopNav