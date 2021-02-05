import React from 'react';
import ReactDOM from 'react-dom';

import Grid from './components/grid.js'
import { AppBar, Toolbar, Button, CssBaseline, Typography, TextField } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#01579b',
        },
        secondary: {
            main: '#fff',
        },
    },
});

import aStarSearch from './pathfinding/astar.js'

class App extends React.Component {
    render() {
        return (<ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position='static'>
                <Toolbar>
                    <Typography style={{'marginRight': '16px'}}>Pathfinding Algorithm Visualizer</Typography>
                    <Button id='simulate' variant='contained' style={{'marginRight': '16px'}} startIcon={<PlayArrowIcon />} 
                    onClick={() => {
                        let path = aStarSearch(grid, [0, 0], [2, 3])
                        path.forEach( node => {
                            
                        })
                    }}>Start Simulation</Button>
                    <Button id='clear-path' style={{'marginRight': '16px'}} endIcon={<DeleteIcon />}>Clear Path</Button>
                    <Button id='clear-all' style={{'marginRight': '16px'}} endIcon={<DeleteForeverIcon />}>Clear All</Button>
                    <TextField id='row-max' color='secondary' label='Row Size' size='small' variant='filled' style={{'marginRight': '16px'}}/>
                    <TextField id='column-max' color='secondary' label='Column Size' size='small' variant='filled' style={{'marginRight': '16px'}}/>
                </Toolbar>
            </AppBar>
            <Grid />
        </ThemeProvider>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'))