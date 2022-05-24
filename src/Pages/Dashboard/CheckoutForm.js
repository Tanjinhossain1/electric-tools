import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Sheared/Loading';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);
    const [paymentIntent, setPaymentIntent] = useState(false)

    useEffect(() => {

        const { newPrice } = order[0];
        console.log(newPrice)
        if (newPrice) {
            fetch(`https://mighty-ridge-59560.herokuapp.com/create-payment`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newPrice: newPrice })
            })
                .then(res => res.json())
                .then(data => {

                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret)
                    }
                })
        }
    }, [order])
    if (loading) {
        <Loading loading={loading} color={'#756f38'}></Loading>
    }

    const { email, _id } = order[0]
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            toast.error(error.message);

        } else {
            toast.success('Payment Success Full');
        }
        setLoading(true)
        const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: email,
                    },
                },
            },
        );
        if (confirmError) {
            toast.error(confirmError?.message)
            setLoading(false)
        }
        if (paymentIntent) {
            setLoading(false)
            fetch(`https://mighty-ridge-59560.herokuapp.com/purchase/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ transactionId: paymentIntent.id })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setLoading(false)
                })
            setPaymentIntent(paymentIntent.id)
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {paymentIntent ? <p className='mt-4 text-green-600 font-bold '>Your Order Compleat</p> :
                    <button className="btn btn-success mt-4" type="submit" disabled={!stripe || !clientSecret}>
                        Order
                    </button>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;