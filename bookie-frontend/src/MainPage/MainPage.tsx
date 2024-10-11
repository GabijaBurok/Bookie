import { Button, ButtonGroup, CardActions, CardContent, LinearProgress, ThemeProvider, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Theme } from '../utils/Theme';
import { MainPageCardGrid } from '../utils/CustomCardGrids';
import { CenteredCard } from '../utils/CustomCards';

interface CurrentBook {
    title: string,
    author: string,
    bookCover?: string,
    readPages: number,
    totalPages: number
} 

let currentBook: CurrentBook = {
        title: "Powerless", 
        author: "Lauren Roberts", 
        bookCover: "powerlessCover.jpg", 
        readPages: 10,
        totalPages: 512
    }

interface ReadingGoal {
    goal: number;
    readAmount: number
}

let currentGoal: ReadingGoal = {
    goal: 60,
    readAmount: 15
}

const goalProgress = (readAmount: number, goal: number) => (readAmount * 100) / goal;
const readingProgress = (readPages: number, totalPages: number) => (readPages * 100) / totalPages;

function MainPage() {
    return (
        <ThemeProvider theme={Theme}>
            <MainPageCardGrid>
                <CenteredCard>
                    <CardContent>
                        <Typography 
                            variant="h4" 
                            color='primary.contrastText' 
                            sx={{padding: '8px 16px'}}
                        >
                            Reading Goal <AutoStoriesOutlinedIcon fontSize='large' style={{position: 'relative', top: '4px'}}/>
                        </Typography>
                        <Typography 
                            align='center' 
                            color='primary.contrastText' 
                            sx={{fontSize: 20}}
                        >
                            {currentGoal.readAmount}/{currentGoal.goal}
                            <ButtonGroup color='info' size='small' sx={{ marginLeft: 2, marginTop: '1px' }}>
                                <Button
                                    aria-label="reduce"
                                    onClick={() => {
                                        currentGoal.readAmount = Math.max(currentGoal.readAmount - 1, 0);
                                    }}
                                >
                                    <RemoveIcon fontSize="small" />
                                </Button>
                                <Button
                                    aria-label="increase"
                                    onClick={() => {
                                        currentGoal.readAmount = currentGoal.readAmount + 1;
                                    }}
                                >
                                    <AddIcon fontSize="small" />
                                </Button>
                            </ButtonGroup>
                        </Typography>
                        <LinearProgress 
                            variant="determinate" 
                            value={goalProgress(currentGoal.readAmount, currentGoal.goal)} 
                            sx={{marginTop: '10px'}}
                        />
                    </CardContent>
                </CenteredCard>
                <CenteredCard>
                    <CardContent>
                        <Typography 
                            variant="h4" 
                            color='primary.contrastText' 
                            sx={{ paddingBottom: '16px', paddingLeft: '16px', paddingRight: '16px'}}
                        >
                            Current Read
                        </Typography>
                        <Grid container spacing={2} columns={2}>
                            <Grid>
                                <img src={currentBook.bookCover} alt="Book cover" width={100}/>
                            </Grid>
                            <Grid>
                                <Typography variant="h5" color='primary.contrastText'>{currentBook.title}</Typography>
                                <Typography variant="subtitle1" color='secondary.contrastText'>{currentBook.author}</Typography>
                                <Typography color='primary.contrastText'>
                                    {currentBook.readPages}/{currentBook.totalPages}
                                    <ButtonGroup color='info' size='small' sx={{ marginLeft: 2, marginTop: '1px' }}>
                                        <Button
                                            aria-label="reduce"
                                            onClick={() => {
                                                currentBook.readPages = Math.max(currentBook.readPages - 1, 0);
                                            }}
                                        >
                                            <RemoveIcon fontSize="small" />
                                        </Button>
                                        <Button
                                            aria-label="increase"
                                            onClick={() => {
                                                currentBook.readPages = currentBook.readPages + 1;
                                            }}
                                        >
                                            <AddIcon fontSize="small" />
                                        </Button>
                                    </ButtonGroup>
                                </Typography>
                                <LinearProgress variant="determinate" value={readingProgress(currentBook.readPages, currentBook.totalPages)} sx={{marginTop: '10px'}}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button color="info">
                            Finish
                        </Button>
                        <Button  color="warning" sx={{ marginLeft: 'auto' }}>
                            Drop
                        </Button>
                    </CardActions>
                </CenteredCard>
            </MainPageCardGrid>
        </ThemeProvider>
        
    );
}

export default MainPage;