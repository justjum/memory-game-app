

export default function Grid( {counter, updateCounter, highScore, updateHighScore, cards, playCard}) {


    return ( <div className="card-grid">
                {cards.map((card) => {
                        return (   
                            <div key={card.id} className='card' id={card.id} onClick={playCard}>
                                <div className="card-img">
                                    <img src={card.imageUrl} alt={card.firstName} />
                                </div>    
                                <h2>{card.firstName}</h2>     
                            </div>

            )
                })} 
        </div>
    )
}

