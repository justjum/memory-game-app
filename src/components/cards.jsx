import { useState, useEffect } from 'react'

export default function Grid( {counter, updateCounter, highScore, updateHighScore}) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("http://thronesapi.com/api/v2/Characters", {
                mode: 'cors'
                }
            )
        .then((res) => {
            return res.json();
        })
        .then(data => {
        setCards(data);
    })
    }, [])
    

    console.log(cards)

    return ( <div className="card-grid">
            
                {cards.map((card) => {
                    if (card.id < 12) {
                        return (   <ul key={card.id}>
                            <li className='card' id={card.id}><h3>{card.firstName}</h3>
                            <div className="card-img">
                                <img src={card.imageUrl} alt={card.firstName} />
                            </div>
                            
                            </li>
                            
                        </ul>
            )
                    }
                })}  
                

        </div>
    )
}

