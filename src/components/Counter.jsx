// import { useReducer } from "react"
import { useDispatch, useSelector } from "react-redux";
// import CounterReducer from "../services/reducers/CounterReducer";
import { dec, inc } from "../services/actions/counter.action";

const Counter = () => {
   
    // const [rec, dispatch] = useReducer(CounterReducer, initialValue);

    const dispatch = useDispatch();

    const rec = useSelector(state => state.CounterReducer);

    const handleInc = () => {
        dispatch(inc())
    }

    const handleDec = () => {
        if(rec.count > 1){
            dispatch(dec())
        }
    }

    return(
        <>
            <button onClick={handleInc}>+</button>
            <h1>{rec.count}</h1>
            <button onClick={handleDec}>-</button>
        </>
    )
}
export default Counter;