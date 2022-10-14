import { Link } from "react-router-dom";
import { useAppContext } from "../store/store"

export default function Index(){

    const store = useAppContext();
    return <div>
        <Link to="/create">create</Link>
        {store.items.map((item) => (
        <div>{item.title}</div>
        ))}
        </div>
}
