import React from 'react';

export default React.createClass({

  getName: function() {
    return this.refs.name.value;
  },

  getSurame: function() {
    return this.refs.surname.value;
  },

  getEmail: function() {
    return this.refs.email.value;
  },

  getPassword: function() {
    return this.refs.password.value;
  },

  getPasswordConf: function() {
    return this.refs.password_confirmation.value;
  },

  render: function() {
    return (
      <div className="user-profile">
        <form onSubmit={this.props.UpdateUser} className="search">
          <input type="text" ref="name" placeholder="Name" />
          <input type="text" ref="surname" placeholder="Surname" />
          <input type="text" ref="email" placeholder="Email" />
          <input type="text" ref="password" placeholder="Password" />
          <input type="text" ref="password_confirmation" placeholder="Password confirmation" />
          <button>Search</button>
        </form>
      </div>
    );
  }

});
