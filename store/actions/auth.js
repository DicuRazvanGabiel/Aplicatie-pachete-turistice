export const SINGUP = "SINGUP";

export const singup = (email, password) => {
    console.log(email, password);
    
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAT9f4YN5uSmzKLcBW-5JQrR5YqptRSHRw', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        });
        console.log(response);
        
        if(!response.ok){
            throw new Error(("somthing is wrong with SINGUP API"))
        }

        const resData = await response.json();
        console.log(resData);
        
        dispatch({ type: SINGUP})
    };
};

