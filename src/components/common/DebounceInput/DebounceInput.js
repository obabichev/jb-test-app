import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class DebounceInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.timer = null;
    }

    componentWillReceiveProps({value}) {
        if (this.timer) {
            return;
        }

        this.setState({value});
    }

    render() {
        const {className, placeholder} = this.props;
        return <input
            placeholder={placeholder}
            className={className}
            value={this.state.value}
            onChange={this.onChange}/>;
    }

    onChange = (event) => {
        const {value} = event.target;
        const timeLimit = this.props.debounceTime;

        this.setState({value});

        this.cancelTimer();

        this.timer = setTimeout(this.onFinishInput(value), timeLimit);
    };

    onFinishInput = (value) => () => {
        const {onChange} = this.props;
        if (onChange) {
            this.clearTimer();
            onChange(value);
        }
    };

    cancelTimer = () => {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };

    clearTimer = () => {
        this.timer = null;
    }
}

DebounceInput.propTypes = {
    debounceTime: PropTypes.number,
    onChange: PropTypes.func,
    className: PropTypes.string,
    placeholder: PropTypes.string
};

DebounceInput.defaultProps = {
    debounceTime: 1000,
    className: '',
    placeholder: ''
};
