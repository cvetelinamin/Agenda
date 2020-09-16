import React, { useContext } from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import HomePage from './pages/home-page'
import AboutPage from './pages/about'
import EventsPage from './pages/events'
import EventPage from './pages/event'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ContactsPage from './pages/contacts'
import NewsPage from './pages/news'
import ArticlePage from './pages/article'

// import ProfilePage from './pages/profile'
// import ErrorPage from './pages/error'
// import UserContext from './Context'

const Navigation = () => {
//   const context = useContext(UserContext)
//   const loggedIn = context.user && context.user.loggedIn

  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about"> 
        <AboutPage />
      </Route>
      <Route path="/events"> 
        <EventsPage />
      </Route>
      <Route path="/event"> 
        < EventPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/contacts">
        <ContactsPage />
      </Route>
      <Route path="/news">
        <NewsPage />
      </Route>
      <Route path="/article">
        <ArticlePage />
      </Route>
      {/* <Route path="/profile/:userid">
        {loggedIn ? (<ProfilePage />): (<Redirect to="/login" />)}
      </Route>
      <Route component={ErrorPage} /> */}
    </Switch>
  )
}

export default Navigation