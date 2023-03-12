import React from 'react';

const Card = ({ promo, promotion, price, img, imgalt, productname, desc, ID, showBuyModal }) => {
    const priceColor = promo ? "text-danger" : "text-dark";
    const sellPrice = promo ? promotion : price;

    return (
        <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card mb-3">
                <img className="card-img-top" src={img} alt={imgalt} />
                <div className="card-body">
                    <h4 className="card-title">{productname}</h4>
                    Price: <strong className={priceColor}>{sellPrice}</strong>
                    <p className="card-text">{desc}</p>
                    <a className="btn btn-success text-white" onClick={() => showBuyModal(ID, sellPrice)}>Buy</a>
                </div>
            </div>
        </div>
    );
}

const CardContainer = ({ location, promo, showBuyModal }) => {
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        fetch(location)
            .then(res => res.json())
            .then((result) => {
                setCards(result);
            });
    }, [location]);

    let items = cards.map(
        card => <Card key={card.id} {...card} promo={promo} showBuyModal={showBuyModal} />
    );

    return (
        <div>
            <div className="mt-5 row">
                {items}
            </div>
        </div>
    );
}

export default CardContainer;
