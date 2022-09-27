import Card from "./Card";


function CardList({monsters}) {
  return ( 
    <div className="card-list">
        {monsters.map((monster) => {
            return <Card key={monster.id} monster={monster} />
        })}
    </div>)
}

export default CardList;