import React, { Component } from "react";
import DogBreedImages from "./DogBreedImages";

export default class DogBreedImagesContainer extends Component {
  state = {
    images: null
  };

  componentDidMount() {
    const breed = this.props.match.params.breed;
    fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(res => res.json())
      .then(data => this.updateImages(data.message))
      .catch(console.error);
  }

  updateImages(images) {
    this.setState(
      {
        images: images
      },
      console.log(this.state)
    );
  }

  render() {
    return (
      <DogBreedImages
        breed={this.props.match.params.breed}
        images={this.state.images}
      />
    );
  }
}
