import { ADD_NAME } from '../SotreConstants.js';
import { useDispatcher } from '../StoreDispatch.js';

function useAction() {
    const [dispatch] = useDispatcher();

    const name = (name) => {
        dispatch({
            type: ADD_NAME,
            payload: name
        })
    }

    const count = (action) => {
        dispatch({
            type: action
        })
    }
    return [name, count];
}

export default useAction;
