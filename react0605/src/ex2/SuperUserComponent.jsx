import UserComponent from "./UserComponent";

// const SuperUserComponent = () => {

//     return(
//         <div>
//             <UserComponent name="Ray" age={20}/>
//             <hr/>
//             <UserComponent name="희상"/>
//         </div>
        
//     )
// }

const SuperUserComponent = (props) => {
    const {name, age} = props;
    return(
        <div>
            <UserComponent name age/>
            <hr/>
            <UserComponent name1/>
        </div>
        
    )
}

export default SuperUserComponent;