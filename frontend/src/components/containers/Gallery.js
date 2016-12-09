import React              from 'react';
import { connect }        from 'react-redux';
import store              from '../../store';

import Gallery            from '../views/photos/gallery';

import * as photoApi      from '../../api/photo-api';


const GalleryListContainer = React.createClass({

  componentDidMount: function() {
    photoApi.getAllPhotos(this.props.params.userId);
  },

  render: function() {
    return (
      <Gallery gallery={this.props.gallery} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    gallery: store.photoState.photos
  };
};

export default connect(mapStateToProps)(GalleryListContainer);
