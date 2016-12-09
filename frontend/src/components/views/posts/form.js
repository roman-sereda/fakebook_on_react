import React from 'react';

export default React.createClass({

  getTitle: function() {
    return this.refs.title.value;
  },

  getBody: function() {
    return this.refs.body.value;
  },

  render: function() {
    return (
      <div className="user-profile">
        <form onSubmit={this.props.onSubmit}>
          <input type="text" ref="title" placeholder="Enter title" />
          <input type="text" ref="body" placeholder="Enter body" />
          <input type="file" ref="file" id="file"/>
          <button>Search</button>
        </form>
      </div>
    );
  }

});
