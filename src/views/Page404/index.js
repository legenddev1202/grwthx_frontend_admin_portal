import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container } from '@mui/material';
// components

// assets
import { PageNotFoundIllustration } from '../../assets';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Page404() {
    return (
        <Container>
            <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
                <m.div>
                    <Typography variant="h3" paragraph>
                        Sorry, page not found!
                    </Typography>
                </m.div>

                <m.div>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
                        spelling.
                    </Typography>
                </m.div>

                <m.div>
                    <PageNotFoundIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
                </m.div>

                <Button to="/" size="large" variant="contained" component={RouterLink} sx={{ marginTop: '50px' }}>
                    Go to Home
                </Button>
            </ContentStyle>
        </Container>
    );
}
