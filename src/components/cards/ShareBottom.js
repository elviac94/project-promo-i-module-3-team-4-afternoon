import React from 'react';
import ShareBottomBtnCard from './ShareBottomBtnCard';
import ShareBottomBtnTwitter from './ShareBottomBtnTwitter';

class ShareBottom extends React.Component {
    render() {
        return (

            <div className="share--bottom">
                <ShareBottomBtnCard />
                <ShareBottomBtnTwitter />
            </div>
        )
    }
}

export default ShareBottom;