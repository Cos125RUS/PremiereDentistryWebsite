import {createSlice} from "@reduxjs/toolkit";
import {Order} from "@/app/types/order/Order.interface";

interface PersonData {
    name: string;
    phone: string;
    mail: string;
}

interface UserSlice {
    personData: PersonData;
    orders: { [key: string]: Order };
}

const initialState: UserSlice = {
    personData: {
        name: '',
        phone: '',
        mail: '',
    },
    orders: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        /** Установить значение для персональных данных */
        setValue: (state, action: { payload: { key: keyof PersonData, value: string } }) => {
            state.personData[action.payload.key] = action.payload.value;
        },
        /** Добавить заявку в список заявок */
        addOrder: (state, action: { payload: Order }) => {
            state.orders[action.payload.id] = action.payload;
        },
    }
});

export const {setValue, addOrder} = userSlice.actions;
export const userReducer = userSlice.reducer;
