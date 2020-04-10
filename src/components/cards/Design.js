import React from 'react';
import Palette from './Palette';
import PaletteInfo from './PaletteInfo';
import '../../stylesheets/form.scss';

class Design extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.state = {
            userInfo: {
                palette: ''
            }

        }
    }

    handleInputValue(inputName, inputValue) {
        this.setState(prevState => {
            return {
                userInfo: {
                    ...prevState.userInfo,
                    [inputName]:inputValue
                }
            }
        })
    }

    render() {
        return (
            <div className="Design">
                <Palette
                    handleInputValue={this.handleInputValue}
                    checked={this.state.userInfo.palette}
                />
                <PaletteInfo
                    colorPalette={this.state.userInfo.palette}
                />
            </div>
        )
    }
}

export default Design;