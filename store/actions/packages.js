export const FETCH_PACHAGES = "FETCH_PACHAGES";

export const fetchPachages = () => {
    return async dispatch => {
        const response = await fetch('https://natbiot-travelling-d0a35.firebaseio.com/flamelink/environments/production/content/pachet/en-US.json');
        const obj = await response.json();
        const listOfPackeges = []
        for (const [ id, value ] of Object.entries(obj)) {
            listOfPackeges.push(value)
        }
        
        dispatch({
            type: FETCH_PACHAGES,
            packages: listOfPackeges
        })
    }
};