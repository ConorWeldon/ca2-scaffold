import React from 'react';

class ImageSlider extends React.Component {
  state = {
    currentIndex: 0,
  }

  componentDidMount() {
    this.interval = setInterval(this.nextImage, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextImage = () => {
    this.setState(prevState => {
      return {
        currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
      };
    });
  }

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="image-slider" style={{ position: 'relative' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
      </div>
    );
  }
}

export default ImageSlider;