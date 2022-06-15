import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {ListStory} from './components/ListStory';
import {CreateStory} from './components/CreateStory';
import {EditStory} from './components/EditStory';
import {DetailStory} from './components/DetailStory';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       <header className="text-center"><h5> CRUD with React Hooks & Context API</h5></header>
       <Switch>
        <Route path="/" component={ListStory} exact/>
        <Route path="/create" component={CreateStory} exact/>
        <Route path="/edit/:id" component={EditStory} exact/>
        <Route path="/detail/:id" component={DetailStory} exact/>
      </Switch>
    </GlobalProvider>
  );
}

export default App;
