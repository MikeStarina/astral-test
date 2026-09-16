const VALID_LOGIN = 'admin'
const VALID_PASSWORD = 'admin'

export const loginRequest = (login: string, password: string) => {
    if (login === VALID_LOGIN && password === VALID_PASSWORD) {
        return { userName: login }
    }
    throw new Error('Invalid login or password')
}
