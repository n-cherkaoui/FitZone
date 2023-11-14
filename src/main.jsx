import ReactDOM from 'react-dom/client'
import App from 'src/App.jsx'
import 'src/index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "src/routes/CreatePost"
import TopNav from 'src/routes/TopNav.jsx';
import PostView from 'src/routes/PostView.jsx';
import EditView from 'src/routes/EditView.jsx';

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
