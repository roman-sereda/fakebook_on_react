import React from 'react';

export default React.createClass({

  getEmail: function() {
    return this.refs.email.value;
  },

  getPassword: function() {
    return this.refs.password.value;
  },

  render: function() {
    return (
      <div className="log-form">
        <div>Log In</div>
        <div className="">
          <form onSubmit={this.props.onSubmit} className="">
            <p><input type="text" ref="email" placeholder="" /></p>
            <p><input type="password" ref="password" placeholder="" /></p>
            <p><button>Log In</button></p>
          </form>
        </div>
      </div>
    );
  }

});
