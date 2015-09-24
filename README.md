# React Case

Sick of ternary operators and if-else's above your render method? Want declarative logic without a bizarre syntax?

    <Condition>
        <Case test={userAgrees()}>Me too.</Case>
        <Case default>Sorry to hear that.</Case>
    </Condition>

## Installation

`npm install react-conditional --save`

## Usage

    var React = require("react");

    var conditionals = require("react-case");
    var Condition = conditionals.Condition;
    var Case = conditionals.Case;

    var mp = document.querySelector("#mount");

    function userAgentContains(string) {
        return navigator.userAgent.toLowerCase().indexOf(string) > -1;
    }

    function deferredChecker() {
        return true;
    }

    React.render(
        <div>

            <Condition>
                <Case test={true}><p>Only one entry in a Condition can match.</p></Case>
                <Case test={true}><p>I'm invisible.</p></Case>
            </Condition>

            <Condition>
                <Case test={false}><p>One of your cases should match.</p></Case>
                <Case test={false}><p>One of your cases should match.</p></Case>
                <Case default>
                    <p>You can mark a case as default to always match. We can also nest conditions.</p>
                    <Condition>
                        <Case test={userAgentContains("chrome")}><p>You're using Chrome.</p></Case>
                        <Case test={userAgentContains("firefox")}><p>You're using Firefox.</p></Case>
                        <Case default><p>You're using a browser I didn't check for (not that that matters).</p></Case>
                    </Condition>
                </Case>
            </Condition>

            <Case test={true}><p>Cases can be used alone too</p></Case>
            <Case test={deferredChecker}><p>Tests can accept a function to evaluate later too.</p></Case>
            <Case test={Math.random() < 0.5}><p>Visible Sometimes</p></Case>

        </div>,
        mp
    );
