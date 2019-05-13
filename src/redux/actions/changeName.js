import {NAME_CHANGED} from './types';

export const changeName = newName => {
    return {
        type: 'NAME_CHANGED',
        payload: newName
    }
}