import "../style/card.css"
import Button from "./Button"

const ItemListContainer = (props) =>{
    return(
        <div className="card">
            <img src={props.img} alt={props.img}/>
            <div className="card-description">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <Button/>
            </div>
        </div>
    )
}

export default ItemListContainer