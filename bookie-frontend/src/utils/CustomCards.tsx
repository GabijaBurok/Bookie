import { Card } from "@mui/material";
import { ReactNode } from "react";

export const CenteredCard = (props: { children: ReactNode}) => (
    <Card sx={{
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'primary.light'
    }}>
        {props.children}
    </Card>
);