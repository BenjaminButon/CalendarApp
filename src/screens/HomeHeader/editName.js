export const editName = name => {
    return {
        type: 'NAME_CHANGED',
        payload: name
    }
};