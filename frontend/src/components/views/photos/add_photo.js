import React from 'react';

export default React.createClass({

  getImage: function() {
    console.log(this.refs.file);
    return this.refs.file;
  },

  render: function() {
    return (
      <div className="form">
        <form onSubmit={this.props.AddImage}>
          <input type="file" ref="file2" id="file2"/>
          <button>Add image</button>
        </form>
      </div>
    );
  }

});
