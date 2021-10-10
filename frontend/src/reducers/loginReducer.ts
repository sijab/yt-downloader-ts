interface IloginState {
    isLoading: boolean
    isLogged: boolean | null
    userData: {
        id: number
        email: string
    }
}

export const initialState: IloginState = {
    isLoading: true,
    isLogged: false,
    userData: {
        id: 0,
        email: ''
    }
}

export const loginReducerAction = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    REFRESH: 'REFRESH'
}


export const loginReducer = (state: any, action: any) => {
    switch (action.type) {
        case loginReducerAction.LOGIN:
            return {
                ...state,
                isLoading: false,
                isLogged: true,
                userData: {
                    id: action.id,
                    email: action.email
                }
            }

        case loginReducerAction.REFRESH:
            return {
                ...state,
                isLoading: false,
                isLogged: true,
                userData: {
                    id: action.id,
                    email: action.email
                }
            }

        case loginReducerAction.LOGOUT:
            return {
                isLogged: false,
                userData: {}
            }

        default:
            return state;
    }
}