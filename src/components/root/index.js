'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { itemSwitch } from 'actions';

const stateToProps = ({ state }) => ({
	state
});

const dispatchToProps = (dispatch) => {
	return {
		itemSwitch: (index) => dispatch(itemSwitch(index))
	}
};

class Root extends Component {
	render() {
		return (
			<div>
				root
			</div>
		)
	}
}

export default connect(stateToProps, dispatchToProps)(Root);