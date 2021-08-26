import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css'
import { AddClasses } from './components/AddClasses';
import { EditClasses } from './components/EditClasses';
import { ClasseList } from './components/ClasseList';
import { Students } from './components/Students';
import { TeachersList } from './components/TeachersList';

function App() {
  return (
    <div style={{ maxWidth: "30ren", margin: "4ren auto" }}>

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/classes/add" component={AddClasses} />
          <Route exact path="/classes/edit/:id" component={EditClasses} />
          <Route exact path="/Classelist" component={ClasseList} />
          <Route exact path="/Students" component={Students} />
          <Route exact path="/TeachersList" component={TeachersList} />
        </Switch>
      </Router>

    </div>
  )
}

export default App;