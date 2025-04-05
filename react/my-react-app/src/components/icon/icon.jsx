import {FaTimes,FaRegCircle,FaPen} from 'react-icons/fa'
function Icon({name}){
if(name==='circle'){
    return(
        <FaRegCircle className="icon"/>
    )
}
else if(name==='cross'){
    return(
        <FaTimes className="icon"/>
    )
}
else if(name==='pen'){
    return(
        <FaPen className="icon"/>
    )
}
else{
    return(
        <div className="icon">Icon not found</div>
    )
}
}

export default Icon;