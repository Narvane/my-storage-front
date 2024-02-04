'use client'
import '@fontsource/roboto/400.css';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Breadcrumbs, Paper} from "@mui/material";
import Link from "next/link";

export default function MealPlan() {
    return (
        <>
            <Paper variant="outlined" sx={{ padding: 3, margin: 2}}>
                <Typography variant="h4">
                    Meal Plan
                </Typography>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        MUI
                    </Link>
                    <Link
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Typography color="text.primary">Breadcrumbs</Typography>
                </Breadcrumbs>
            </Paper>
            <Paper variant="outlined" sx={{ padding: 3, margin: 2}}>
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
            </Paper>
        </>
    )
}
