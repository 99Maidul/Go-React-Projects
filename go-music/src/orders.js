import React, { useState, useEffect } from 'react';

function Order(props) {
    return (
        <div className="col-12">
            <div className="card text-center">
                <div className="card-header">
                    <h5>{props.productname}</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="mx-auto col-6">
                            <img
                                src={props.img}
                                alt={props.imgalt}
                                className="img-thumbnail float-left"
                            />
                        </div>
                        <div className="col-6">
                            <p className="card-text">{props.desc}</p>
                            <div className="mt-4">
                                Price: <strong>{props.price}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    Purchased {props.days} days ago
                </div>
            </div>
            <div className="mt-3" />
        </div>
    );
}

export default function OrderContainer(props) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(props.location)
            .then(res => res.json())
            .then(result => setOrders(result.orders));
    }, [props.location]);

    return <div className="row mt-5">{orders.map(order => <Order {...order} />)}</div>;
}
