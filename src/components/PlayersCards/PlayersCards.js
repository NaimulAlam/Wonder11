import Player from '../Player/Player';
import fakeData from '../../fakeData/fakeData.json';
import { useEffect, useState } from 'react';

const PlayersCards = (props) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setPlayers(fakeData);
        //   console.log(fakeData)
    }, []);


    return (
        <section className="players col-md-8 border-end">
            <div className="row row-cols-3 gx-5 gy-5">
                {
                    players.map(player => <Player addToCartHandler={props.addToCartHandler} key={player.id} player={player} />)
                }
            </div>
        </section>
    );
};

export default PlayersCards;