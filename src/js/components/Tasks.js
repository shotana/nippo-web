import React, { Component, PropTypes } from 'react';

import Task from './Task';

const propTypes = {
  label: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
};

class Tasks extends Component {
  render() {
    const tasks = this.props.tasks.map(task => <Task key={task.id} task={task} date={this.props.date} />);

    const clx = () => {
      switch (this.props.label) {
        case 'TODO':
          return 'is-danger';
        case 'DOING':
          return 'is-warning';
        case 'DONE':
          return 'is-success';
        default:
          return '';
      }
    };

    return (
      <article className={`message ${clx()}`}>
        <h3 className="message-header">{this.props.label}</h3>
        <div className="message-body">
          <table className="table">
            <tbody>
              {tasks}
            </tbody>
          </table>
        </div>
      </article>
    );
  }
}

Tasks.propTypes = propTypes;
export default Tasks;
