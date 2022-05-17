import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import HomePage from "./pages/Home/Home";
import FeedPage from "./pages/Feed/Feed";
import MessagesPage from "./pages/Messages/Messages";
import UsersPage from "./pages/Users/Users";
import UserPage from "./pages/User/User";
import routes from './routes';
import ProfileContext, { profile } from './profile-context'

function App() {
    return (
        <BrowserRouter>
            <ProfileContext.Provider value={profile}>
                <Layout>
                    <Switch>
                        <Route exact path={routes.home.path}>
                            <HomePage />
                        </Route>
                        <Route path={routes.feed.path}>
                            <FeedPage />
                        </Route>
                        <Route path={routes.messages.path}>
                            <MessagesPage />
                        </Route>
                        <Route path={routes.users.path}>
                            <UsersPage />
                        </Route>
                        <Route path={routes.user.path}>
                            <UserPage />
                        </Route>
                        {/* <Route component={404} /> */}
                    </Switch>
                </Layout>
            </ProfileContext.Provider>
        </BrowserRouter>
    );
}

export default App;