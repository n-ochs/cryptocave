import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
    typography: {
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
    shape: {
        borderRadius: 8,
    },
    palette: {
        primary: {
            main: '#12151f',


        },
        secondary: {
            main: '#371bb1',
            accent: '#05f4b7'
        }
    }
})