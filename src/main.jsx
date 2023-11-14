import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./routes/CreatePost"
import TopNav from './routes/TopNav.jsx';
import PostView from './routes/PostView.jsx';
import EditView from './routes/EditView.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TopNav />}>
        <Route index={true} element={<App />} />
        <Route index={false} path="/create" element={<CreatePost />} />
        {/* <Route index={false} path="/gallery" element={<Gallery />} /> */}
        <Route index={false} path="/edit/:id" element={<EditView />} />
        <Route index={false} path="/:id" element={<PostView />} />
        <Route path="*" element={
          <div>
            <p className="message">There's nothing here!</p>
          </div>
        }
        />
      </Route>
    </Routes>
  </BrowserRouter>
)
