import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    CHANGE_SERVICE_FIELD,
    START_EDIT_SERVICE
} from './actionTypes';

export function addService(id, service, price) {
    return { type: ADD_SERVICE, payload:{ id, service, price } };
}

export function removeService(Id) {
    return { type:REMOVE_SERVICE, payload: { Id } };
}

export function changeServiceField(name, value) {
    return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}
export function startEditService(id, service, price) {
    return { type: START_EDIT_SERVICE, payload: { id, service, price } };
}
