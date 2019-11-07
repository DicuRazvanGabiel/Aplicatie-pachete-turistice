export const FETCH_PACHAGES = "FETCH_PACHAGES";

export const fetchPachages = () => {
    return async dispatch => {
        const response = await fetch('https://natbiot-travelling-d0a35.firebaseio.com/flamelink/environments/production/content.json');
        const objResponse = await response.json();
        const listOfPackeges = []

        const objResPachet = objResponse.pachet['en-US'];
        const objResObiective = objResponse.obiective['en-US'];
        
        for (const [ id, value ] of Object.entries(objResPachet)) {
            listOfPackeges.push(value)
        }

        dispatch({
            type: FETCH_PACHAGES,
            packages: listOfPackeges,
            objectives: objResObiective
        })
    }
};