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

    // Forces the Component to re-render
    startPreview() {

    }

    render() {
        return (
            <div className='PreviewBar' key={this.props.previewTrack}>
                <audio controls>  
                    {
                        // Log the Preview URL, for testing
                        console.log(this.props.previewTrack)
                    }
                    <source src={this.startPreview()} type='audio/mp3' />
                </audio>
            </div>
        )
    }
}

export default PreviewBar;