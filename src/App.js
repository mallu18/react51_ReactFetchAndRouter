// import {Route, Switch} from 'react-router-dom'

// import Header from './components/Header'
// import About from './components/About'
// import Home from './components/Home'
// import Contact from './components/Contact'
// import BlogItemDetails from './components/BlogItemDetails'
// import NotFound from './components/NotFound'

// import './App.css'

// const App = () => (
//   // <div className="app-container">
//   //   <div className="responsive-container">
//   //     <div className="app-body">
//   //       <Switch>
//   //         <Header />
//   //         <Route component={NotFound} />
//   //         <Route exact path="/" component={Contact} />
//   //         <Route exact path="/abou" component={About} />
//   //         <Route exact path="/contact" component={Home} />
//   //         <Route path="/blogs/id" component={BlogItemDetails} />
//   //       </Switch>
//   //     </div>
//   //   </div>
//   // </div>
//   <BrowserRouter>
//     <Header />
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/about" component={About} />
//       <Route exact path="/contact" component={Contact} />
//       <Route exact path="/blogs/:id" component={BlogItemDetails} />
//       <Route component={NotFound} />
//     </Switch>
//   </BrowserRouter>
// )

// export default App

import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/blogs/:id" component={BlogItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
