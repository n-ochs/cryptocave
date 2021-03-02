import React from 'react'

function WatchlistCard(props) {
    const { watchlist } =  props;

    return (
        <div>
                {watchlist.map((coin) => {
                    return <p key={coin.data.symbol}>{coin.data.symbol}</p>
                })}
        </div>
    );
};

export default WatchlistCard;