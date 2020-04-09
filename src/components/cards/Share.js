import React from 'react';
import ShareTop from './ShareTop';
import ShareBottom from './ShareBottom'
// import '../../stylesheets/layouts/_share.scss';


class Share extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="form__share">
                {/* <ShareTop /> */}
                <ShareBottom />
            </div>
        )
    }
}

export default Share;