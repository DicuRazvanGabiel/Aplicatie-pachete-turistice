import DUMMYDATA from '../../data/dummy-data'

const initialState ={
    pachete: [{
        title: 'Pachet 1',
        obiective: [{
            title: 'Ob1'
        },{
            title: 'Ob2'
        }]
    },{
        title: 'Pachet 2',
        obiective: [{
            title: 'Ob1'
        },{
            title: 'Ob2'
        }]
    }]
}

const packagesReducer = (state = initialState, action) => {
    return state;
}

export default packagesReducer;