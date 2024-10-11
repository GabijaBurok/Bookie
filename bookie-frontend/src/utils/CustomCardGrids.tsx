import Grid from "@mui/material/Grid2";
import { ReactNode } from "react";

export const MainPageCardGrid = (props: { children: ReactNode}) => (
    <Grid
        container
        spacing={10}
        direction='column'
        alignItems="center"
        justifyContent='center'
        margin={'50px'}
    >
        {props.children}
    </Grid>
);

export const TwoColumnGrid = (props: { children: ReactNode }) => (
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
        {props.children}
    </Grid>
);