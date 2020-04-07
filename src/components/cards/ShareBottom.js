import React from 'react';
import ShareBottomBtnCard from './ShareBottomBtnCard';
import ShareBottomBtnTwitter from './ShareBottomBtnTwitter';

class ShareBottom extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        }


    render() {
        return (

            <div className="share--bottom share--bottom--visible">
                <ShareBottomBtnCard />
                <div className="border--line"></div>
                <ShareBottomBtnTwitter />
            </div>
        )
    }
    // Remove
    handleClick() {
        const shareBottom = document.querySelector('.share--bottom')
        const arrow = document.querySelector('.arrow');
        shareBottom.classList.toggle('hidden');
        arrow.classList.add('arrow-collapse');
      }
}

export default ShareBottom;