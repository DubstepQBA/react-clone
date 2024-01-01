export function useState(initValue){
    let _val = initValue;
    const state = _val;
    const setState = newVal =>{
        state = newVal;
    }

    return [state,setState];
}