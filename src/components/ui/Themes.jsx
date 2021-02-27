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
})