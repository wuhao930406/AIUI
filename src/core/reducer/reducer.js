const themeReducer = (state, action) => {
    if (!state) return {
        appTheme:"default",
    }

    switch (action.type) {
        case 'CHANGE_THEME':
            return { ...state, appTheme: action.appTheme }
            break
        default:
            return state
    }
}
export default themeReducer