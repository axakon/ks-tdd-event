import React from "react";
import Subscribe from "./subscribe";
import emailValidator from "./validators/emailValidator";

class SubscribeContainer extends React.PureComponent {

    onSubscribe = email => {
        alert(`This should subsribe with ${email}`);
    }

    render() {
        return (
            <Subscribe
                validator={emailValidator}
                onSubmit={this.onSubscribe}
            />
        );
    }
}

export default SubscribeContainer;