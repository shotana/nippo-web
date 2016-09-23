import React from 'react';

import Header from './Header.jsx';
import DateHeader from './DateHeader.jsx';
import Diary from './Diary.jsx';
import TasksContainer from '../containers/TasksContainer.jsx';

import Utils from '../utils.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const today = new Date();
    this.state = {
      date: `${today.getFullYear()}-\
             ${Utils.paddingZero(today.getMonth() + 1)}-\
             ${Utils.paddingZero(today.getDate())}`.replace(/\s/g, ''),
    };
  }

  render() {
    return (
      <div>
        <Header />
        <DateHeader />
        <div className="section">
          <div className="columns">
            <TasksContainer date={this.state.date} />
            <Diary date={this.state.date} />
          </div>
        </div>
      </div>
    );
  }
}
