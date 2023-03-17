import { Monster } from "../../App";
import "./card.styles.css";

type CardProps = {
    monster:Monster
}

const Card =({monster}: CardProps)=> {
// because we now we are passing this.props.monsters , we can destructure off the monster because what's in () is already know props.
// We can also destructure like this const Card= ({monster:name,email,id})=> {}
    const {id,name,email} = monster;

    return (
        <div className="card-container" key={id}>
            <img 
            alt={`monster ${name}`} 
            src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
    )
};


export default Card;