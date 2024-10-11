import { Card, CardContent, Rating, ThemeProvider, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import StarIcon from '@mui/icons-material/Star';
import { Theme } from "../utils/Theme";

interface ReadBook {
    title: string,
    author: string,
    bookCover?: string,
    series?: string,
    finishDate: Date,
    rating: number,
    review?: string
} 

let readBooksList: ReadBook[] = [
    {
        title: "Powerless", 
        author: "Lauren Roberts", 
        bookCover: "powerlessCover.jpg", 
        series: "The Powerless Trilogy #1",
        finishDate: new Date("2024-09-12"),
        rating: 5,
        review: "patiko"
    },
    {
        title: "Reckless",
        author: "Lauren Roberts",
        bookCover: "RecklessCover.jpg",
        series: "The Powerless Trilogy #2",
        finishDate: new Date("2024-09-24"),
        rating: 4.5
    },
    {
        title: "Good Girl, Bad Blood",
        author: "Holly Jackson",
        bookCover: "GGBBCover.jpg",
        series: "A Good Girl's Guide to Murder #1",
        finishDate: new Date("2024-09-25"),
        rating: 4
    }
];

function ReadPage() {
    return (
        <ThemeProvider theme={Theme}>
            <Grid
                container
                columns={2}
                rowSpacing={'20px'}
                columnSpacing={'20px'}
                direction='row'
                alignItems="center"
                justifyContent='center'
                marginTop={'20px'}
            >
            {readBooksList.map((book, index) => (
                <Card sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'primary.light',
                    width: '350px'
                }}>
                    <CardContent>
                        <Grid container spacing={2} columns={2}>
                            <Grid width={'100px'}>
                                <img src={book.bookCover} alt="Book cover" width={100} />
                            </Grid>
                            <Grid width={'200px'}>
                                <Typography variant="h5" 
                                    color='primary.contrastText'
                                >
                                    {book.title}
                                </Typography>
                                <Typography variant="subtitle1" 
                                    color='secondary.contrastText'
                                >
                                    {book.author}
                                </Typography>
                                <Typography variant="subtitle1" 
                                    color='secondary.contrastText'
                                    fontStyle='italic'
                                >
                                    {book.series}
                                </Typography>
                                <Typography variant="body1" color='primary.contrastText'>
                                    Rating: 
                                    <Rating name="half-rating-read" 
                                        defaultValue={book.rating} 
                                        precision={0.5} 
                                        readOnly
                                        icon={<StarIcon sx={{color:'primary.contrastText'}}/>}
                                        emptyIcon={<StarIcon sx={{color:'secondary.contrastText'}} style={{opacity: 0.55}}/>}
                                        style={{position: 'relative', top: '5px'}}
                                    />
                                    
                                </Typography>
                                <Typography variant="body1" color='primary.contrastText'>
                                    Review: {book.review}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
            </Card>
            ))}
            </Grid>
        </ThemeProvider>
    );
}

export default ReadPage;