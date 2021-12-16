import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render () {

        const {url} = this.props;

        return (
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player fixed-bottom'
                    url= {[{src:"Captures/" + url + "_0.mp4", type: 'video/mp4'}] }
                    // url = 'Captures/test.mp4'
                    playing={true}
                    width='50%'
                    height='50%'
                    controls = {true}
                    loop = {true}

                />
            </div>
        )
    }
}

export default Video;