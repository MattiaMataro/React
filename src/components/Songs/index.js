import React from 'react';
import SongComponent from '../Song';
import { Song } from '../../models/Song';

class Songs extends React.Component {
    constructor() {
        super();

        this.state = {
            selected: [],
            songs: [
                new Song(1, 'Il tuo Ricordo', 'Samuele Bersani', '/images/bersani.jpg'),
                new Song(2, 'Fix You', 'Coldplay', '/images/coldplay.jpg'),
                new Song(3, 'Per due che come Noi', 'Brunori SAS', '/images/brunori.jpg'),
                new Song(4, 'Le Biciclette', 'Fulminacci', '/images/fulminacci.jpg'),
                new Song(5, 'HD Blue', 'Daniele Celona', '/images/celona.jpg')
            ]
        }
    }

    onSelected = song => {
        if ( this.state.selected.includes(song) ) {
            const selected = [...this.state.selected];
            selected.splice(selected.indexOf(song), 1);
            
            this.setState({
                selected
            });

            return;
        }

        this.setState({
            selected: [...this.state.selected, song]
        })
    }

    render() {
        const selected = this.state.selected.map(song => <li key={ song.id }>{ song.artist } - { song.title }</li>)
        const songs = this.state.songs.map(song => 
            <div key={ song.id } className="col-lg-4">
                <SongComponent song={song} onSelected={this.onSelected} />
            </div>
        );

        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        { songs }
                    </div>
                </div>
                <div className="col-lg-12">
                    <h3>Hai selezionato:</h3>
                        <ul>{ selected }</ul>
                </div>
            </div>
        );
    }
}

export default Songs;