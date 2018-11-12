import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import { setText } from '../../actions/app';

import './index.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.text = "Reat+Redux Boilerplate";
    }

    componentWillMount() {
        this.props.setText(this.text);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.props.text}
                </header>
            </div>
        );
    }
}

App.propTypes = {
    text    : PropTypes.string.isRequired,
    setText : PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    text : state.app.text
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        setText
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
