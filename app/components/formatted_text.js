// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';

class FormattedText extends Component {
    static propTypes = {
        intl: intlShape.isRequired,
        id: PropTypes.string.isRequired,
        defaultMessage: PropTypes.string,
        values: PropTypes.object
    };

    static defaultProps = {
        defaultMessage: ''
    };

    render() {
        const {
            id,
            defaultMessage,
            values,
            intl,
            ...props
        } = this.props;

        return (
            <Text {...props}>
                {intl.formatMessage({id, defaultMessage}, values)}
            </Text>
        );
    }
}

export default injectIntl(FormattedText);
