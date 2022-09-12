export const loggerMiddleWares = (store) => (next) => (action) => {
    if(!action.type){
        return next(action);
    }
    next(action);
};