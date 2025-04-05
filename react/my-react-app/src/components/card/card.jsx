import Icon from "../icon/icon";
import "./card.css";

function Card({iconName}){
    return(
        <div className="card">
           <Icon name={iconName ? iconName : 'pen'} />
        </div>
    );
}

export default Card;