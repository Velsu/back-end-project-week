import React from "react";

export class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      content: ""
    };
  }
  componentDidMount() {
    const note = this.props.notes
      .filter(note => note._id === this.props.match.params.id)
      .shift();
    this.setState({ id: note._id, title: note.title, content: note.content });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { history, updateNote, match } = this.props;
    const { title, content } = this.state;
    return (
      <div className="col-9 right__side">
        <div className="row">
          <div className="col-3 notes__head">
            <h4>Edit Note:</h4>
          </div>
        </div>
        <div className="row">
          <form
            className="add__form"
            onSubmit={event => {
              event.preventDefault();
              updateNote({
                id: this.props.match.params.id,
                title: title,
                content: content
              });
              history.push(`/viewnote/${match.params.id}`);
            }}
          >
            <input
              className="input__title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
            <textarea
              cols="66"
              rows="20"
              maxlength="1600"
              name="content"
              className="input__text"
              value={this.state.content}
              onChange={this.handleChange}
              required
            />
            <button type="submit" className="save__button">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
