import React from 'react';
import { Stack } from '@mui/system';

//My MUI Imports
import Button from '@mui/material/Button';

import { createClient } from 'pexels';

const client = createClient('563492ad6f91700001000001ee7365efc0f541d2a76151dede10a188');

// All requests made with the client will be authenticated


class ImageSlider extends React.Component {
  // Set the initial state for the image index and the interval time
  state = {
    currentIndex: 0,
    intervalTime: 3000, // 3 seconds
  };

  // Create the array of images for the slider
  images = [
    'https://images.pexels.com/photos/2875291/pexels-photo-2875291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/8961525/pexels-photo-8961525.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/13376117/pexels-photo-13376117.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ];

  // Set the interval for switching images
  switchInterval = setInterval(() => {
    // Increment the current index, or reset it to 0 if it's the last image
    this.setState({
      currentIndex: this.state.currentIndex === this.images.length - 1 ? 0 : this.state.currentIndex + 1,
    });
  }, this.state.intervalTime);

  // Clear the interval when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.switchInterval);
  }

  render() {
    return (
      <div className="image-slider">
        <img src={this.images[this.state.currentIndex]} alt="Slider images" />
        <div className="buttons">
          <Stack spacing={2} direction="row">
            <Button variant='contained' color="success" onClick={() => this.setState({ currentIndex: 0 })}>1</Button>
            <Button variant='contained' color="success" onClick={() => this.setState({ currentIndex: 1 })}>2</Button>
            <Button variant='contained' color="success" onClick={() => this.setState({ currentIndex: 2 })}>3</Button>
            <Button variant='contained' color="success" onClick={() => this.setState({ currentIndex: 3 })}>4</Button>
          </Stack>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
