import { Card, CardContent, ThemeProvider, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Theme } from "../utils/Theme";
import { TwoColumnGrid } from "../utils/CustomCardGrids";


interface TBRBook {
    title: string,
    author: string,
    bookCover?: string,
    series?: string,
    dateAdded: Date,
} 

let tbrList: TBRBook[] = [
    {
        title: "Powerless", 
        author: "Lauren Roberts", 
        bookCover: "powerlessCover.jpg", 
        series: "The Powerless Trilogy #1",
        dateAdded: new Date("2024-09-12")
    },
    {
        title: "Reckless",
        author: "Lauren Roberts",
        bookCover: "RecklessCover.jpg",
        series: "The Powerless Trilogy #2",
        dateAdded: new Date("2024-09-24")
    },
    {
        title: "Good Girl, Bad Blood",
        author: "Holly Jackson",
        bookCover: "GGBBCover.jpg",
        series: "A Good Girl's Guide to Murder #1",
        dateAdded: new Date("2024-09-25")
    }
];

function TBRPage() {
    return (
        <ThemeProvider theme={Theme}>
            <TwoColumnGrid>
                {tbrList.map((book, index) => (
                    <Card sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        bgcolor: 'primary.light',
                        width: '350px'
                        }}
                    >
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
                                <Typography variant="subtitle2" 
                                    color='secondary.contrastText'
                                >
                                    Date added: {book.dateAdded.toLocaleDateString()}
                                </Typography>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                ))}
            </TwoColumnGrid>
        </ThemeProvider>
    );
}

export default TBRPage;