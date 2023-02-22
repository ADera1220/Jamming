// Import React library
import React from 'react';
// Import styles
import './PreviewBar.css';

class PreviewBar extends React.Component {
    constructor(props) {
        super(props);

        // Binds the Component methods
        this.startPreview = this.startPreview.bind(this);
    }

    startPreview() {
        /*
            This provides the URL of the preview track to the <source> element below
            as it attempts to play the track.
        */
       return this.props.previewTrack;
    }

    render() {
        return (
            <div className='PreviewBar' key={this.props.previewTrack}>

                {/* Renders an audio player for the previewTrack */}
                <audio controls>  
                    {
                        // Log the Preview track, for testing
                        console.log(this.props.previewTrack)
                    }
                    {/*
                        <source> element declares the URL used to find the file for the
                        previewTrack and specifies the file type as mp3.
                    */}
                    <source src={this.startPreview()} type='audio/mp3'></source>
                </audio>
            </div>
        )
    }
}

export default PreviewBar;