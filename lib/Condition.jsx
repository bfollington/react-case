import React from "react";

function isTrue(test) {
    var didMatch = false;

    if (test) {
        if (test.call) { //it's a function
            didMatch = test();
        } else {
            didMatch = test;
        }
    }

    return didMatch ? true : false;
}

export class Condition extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        var childToRender = null;

        var child;
        for (var i = 0; i < this.props.children.length; i++) {
            child = this.props.children[i];

            if (isTrue(child.props.test) || child.props.default) {
                childToRender = child;
                break;
            }
        }

        return (
            childToRender
        );
    }
}

export class Case extends React.Component {
    constructor(props) {
        super(props);

        this.match = false;
    }

    didMatch() {
        return this.match;
    }

    render() {

        this.match = isTrue(this.props.test) || this.props.default;

        if (!this.match) {
            return null;
        }

        return (
            <span>
                {this.props.children}
            </span>
        );
    }
}
