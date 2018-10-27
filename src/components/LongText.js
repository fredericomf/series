import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    LayoutAnimation,
    NativeModules
} from 'react-native';

// Só funciona para ANDROID (no IOS já funciona por default)
NativeModules.UIManager.setLayoutAnimationEnabledExperimental && NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);

export default class LongText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        }
    }

    toggleIsExpanded() {
        const { isExpanded } = this.state;
        this.setState({
            isExpanded: !isExpanded
        });
    }

    componentWillUpdate(nextProps, nextState) {
        LayoutAnimation.spring();
    }

    render() {

        const { label = "", content = "" } = this.props;
        const { isExpanded } = this.state;

        return (
            <View style={styles.line}>
                <Text style={[styles.cell, styles.label]}>{label}</Text>
                <TouchableWithoutFeedback onPress={() => this.toggleIsExpanded()}>
                    <View>
                        <Text style={[styles.cell, styles.content, isExpanded ? styles.expanded : styles.collapsed]}>{content}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

}

const styles = StyleSheet.create(
    {
        line: {
            paddingTop: 3,
            paddingBottom: 3
        },
        cell: {
            fontSize: 12,
            paddingLeft: 5,
            paddingRight: 5
        },
        label: {
            fontWeight: 'bold',
            flex: 1,
            textDecorationLine: 'underline',
            paddingBottom: 8
        },
        content: {
            flex: 3,
            textAlign: 'justify' // Só funciona no IOS
        },
        collapsed: {
            maxHeight: 45
        },
        expanded: {
            flex: 1
        }
    }
);