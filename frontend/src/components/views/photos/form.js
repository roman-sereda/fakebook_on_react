import React from 'react';

export default React.createClass({

  getImage: function() {
    console.log(this.fileUpload.files[0]);
    return this.fileUpload.files[0];
  },

  render: function() {
    return (
      <div className="user-profile">
        <form onSubmit={this.props.AddImage}>
          <input type="file" name="pic" ref={(ref) => this.fileUpload = ref} />
          <button>Add image</button>
        </form>
      </div>
    );
  }

});
