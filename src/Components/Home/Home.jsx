import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext);
    // const {name} = authInfo;
    console.log(authInfo);
    return (
        <div>
            <h2>This is home for: {authInfo.name}</h2>
            {/* <h2>This is home for: {name}</h2> */}
        </div>
    );
};

export default Home;