import React, {Component} from 'react';
import classes from './App.module'

import Mondrian from './components/Mondrian';

export default class App extends Component {
  render() {
    return (
      <div className={classes.container}>
        <h4 id="examples" className={classes.mainTitle}>Assessment</h4>
        <div className={classes.example}>
          <div className={classes.info}>
            <p>Default configuration with initial rectangle objects set on the internal state of
            container component. I built this making use of the Mondrian principle</p>
            <p>Enabled all default drawing tool set and panels.</p>
            <p><strong>Note: Click on any of the shapes and use your keyboard delete button to delete</strong></p>
          </div>
          <div className={classes.preview}>
            <Mondrian />
          </div>
        </div>

 
      </div>
    );
  }
}
