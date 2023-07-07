import React from 'react';
import { PaystackButton } from 'react-paystack'

const PayButton = ({ amount, email }) => {
    const publicKey = process.env.REACT_APP_PS_PUBLIC_LIVE_KEY;
    const [reference, setReference] = React.useState('');

    const handlePaystackSuccessAction = (reference) => {
        // handle payment success
        console.log(reference);
    }

    const componentProps = {
        email,
        amount,
        publicKey,
        currency:"GHS",
        text: 'Pay Now',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: () => alert('Payment canceled by user.'),
    };

    return <PaystackButton className="paystack-button" {...componentProps} />;
};

export default PayButton;
