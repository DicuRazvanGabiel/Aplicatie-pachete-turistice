export const FETCH_PACHAGES = "FETCH_PACHAGES";

export const fetchPachages = (lang) => {
    return async dispatch => {
        const response = await fetch('https://natbiot-travelling-d0a35.firebaseio.com/flamelink/environments/production/content.json');
        const objResponse = await response.json();
        const listOfPackeges = []

        const objResPachet = objResponse.pachet['en-US'];
        const objResObiective = objResponse.obiective['en-US'];
        
        for (const [ id, value ] of Object.entries(objResPachet)) {
            switch (lang) {
                case 'ro':
                    value.title = value.titluRo                    
                    break;

                case 'en':
                    value.title = value.titluEn
                    break;

                case 'bg':
                    value.title = value.titluBg
                    break;
            }
            listOfPackeges.push(value)
        }
        

        for (const [ id, value ] of Object.entries(objResObiective)) {
            switch (lang) {
                case 'ro':
                    value.title = value.titleRo                    
                    break;

                case 'en':
                    value.title = value.titluEn
                    break;

                case 'bg':
                    value.title = value.titleBg
                    break;
            }
        }

        dispatch({
            type: FETCH_PACHAGES,
            packages: listOfPackeges,
            objectives: objResObiective
        })
    }
};