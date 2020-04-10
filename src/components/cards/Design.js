import React from 'react';
import Palette from './Palette';
import PaletteInfo from './PaletteInfo';
import '../../stylesheets/form.scss';

class Design extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.state = {
            paletteInfo: {
                palette: ''
            }

        }
    }

    handleInputValue(inputName, inputValue) {
        this.setState(prevState => {
            return {
                paletteInfo: {
                    ...prevState.paletteInfo,
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
                    checked={this.state.paletteInfo.palette}
                />
                <PaletteInfo
                    colorPalette={this.state.paletteInfo.palette}
                />
            </div>
        )
    }
}

export default Design;