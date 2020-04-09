import React from 'react';
import ShareBottom from './ShareBottom'

class Share extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="form__share">
                <ShareBottom />
            </div>
        )
    }
}

export default Share;