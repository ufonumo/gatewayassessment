import React, { Component } from 'react';
import Designer from '../../src/Designer';

export default class extends Component {
  state = {
    objects: [{
      "width": 163,
      "height": 84,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(0, 123, 255, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 17,
      "y": 15
    }, {
      "width": 70,
      "height": 146,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(255, 255, 255, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 19,
      "y": 109
    }, {
      "width": 81,
      "height": 69,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(241, 97, 99, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 100,
      "y": 110
    }, {
      "width": 231,
      "height": 70,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(0, 123, 255, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 100,
      "y": 187
    }, {
      "width": 183,
      "height": 60,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(255, 241, 0, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 19,
      "y": 265
    }, {
      "width": 118,
      "height": 119,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(241, 97, 99, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 211,
      "y": 266
    }, {
      "width": 82,
      "height": 51,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(255, 255, 255, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 120,
      "y": 333
    }, {
      "width": 89,
      "height": 50,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(241, 97, 99, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 21,
      "y": 334
    }],
  };

  // componentDidMount = () => {
  //   var retrievedObject = JSON.parse(localStorage.getItem('recent_objects'))
  //   this.setState({ objects: retrievedObject })
  // }

  // componentDidUpdate() {
  //   localStorage.setItem("recent_objects", this.state.objects);
  // }

  handleUpdate(objects) {
    this.setState({ objects});
    // var retrievedObject = JSON.parse(localStorage.getItem('recent_objects'))
    // console.log(retrievedObject);

  }

  render() {
    return (
      <Designer
        width={550} height={400}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)}
        />
    );
  }
}
