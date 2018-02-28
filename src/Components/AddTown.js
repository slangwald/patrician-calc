import React, { Component } from 'react';

class AddTown extends Component {
  handleSubmit(event) {
    event.preventDefault();
    if (this.refs.name.value !== '') {
      this.setState(
        {
          newTown: {
            name: this.refs.name.value,
            rich_people: this.refs.rich_people.value,
            wealthy_people: this.refs.wealthy_people.value,
            poor_people: this.refs.poor_people.value
          }
        },
        function() {
          this.props.handleAddTown(this.state.newTown);
        }
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Add Town</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name</label>
            <input type="text" ref="name" />
          </div>
          <div>
            <label>Rich</label>
            <input type="text" ref="rich_people" />
          </div>
          <div>
            <label>Wealthy</label>
            <input type="text" ref="wealthy_people" />
          </div>
          <div>
            <label>Poor</label>
            <input type="text" ref="poor_people" />
          </div>
          <div>
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTown;
