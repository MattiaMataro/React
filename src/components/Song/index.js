import React from 'react';

class Song extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="song">
                <div className="cover">
                    <img src={ this.props.song.cover } />
                </div>
                <div className="title">
                    <h3>{ this.props.song.title }</h3>
                    <h5>{ this.props.song.artist }</h5>
                </div>
                <div className="actions">
                    <button className="btn btn-primary" onClick={() => this.props.onSelected(this.props.song)}>Select</button>
                </div>
            </div>
        );
    }
}

export default Song;