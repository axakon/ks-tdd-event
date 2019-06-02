import React from 'react';


class Subscribe extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            inputText: ''
        };
    }

    handleChange = ev => {
        const { validator } = this.props;
        const { value } = ev.currentTarget;
        const valid = validator.check(value);
        this.setState({
            isValid: valid,
            inputText: value
        });
    }
    
    handleSubmit = ev => {
        const { onSubmit } = this.props;
        const { inputText, isValid } = this.state;
        if(inputText.length === 0 || !isValid) {
            return;
        }

        onSubmit(inputText);
    }

    render() {
        const { validator } = this.props;
        const { isValid } = this.state;
        return (
            <div>
                <input
                    type="text"
                    aria-label="input-field"
                    onChange={this.handleChange}
                />
                {!isValid && 
                    (<label>
                        {validator.text}
                    </label>)
                }
                <input 
                    type="submit"
                    aria-label="input-submit" 
                    value="Subscribe"
                    onClick={this.handleSubmit}
                />
            </div>
        );
    }
}

export default Subscribe;