import React from 'react';
import cx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PeopleCardFooter from '@mui-treasury/components/cardFooter/people';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import {useN01TextInfoContentStyles} from '@mui-treasury/styles/textInfoContent/n01';
import {useWideCardMediaStyles} from '@mui-treasury/styles/cardMedia/wide';
import {useFadedShadowStyles} from '@mui-treasury/styles/shadow/faded';
import Button from "@material-ui/core/Button";
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';


const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 304,
        margin: 'auto',
    },
    content: {
        padding: 24,
    },
    cta: {
        marginTop: 24,
        textTransform: 'initial',
    },
}));

const EngagementCard = () => {
    const cardStyles = useStyles();
    const wideCardMediaStyles = useWideCardMediaStyles();
    const fadeShadowStyles = useFadedShadowStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    return (
        <Card className={cx(cardStyles.root, fadeShadowStyles.root)}>
            <CardMedia
                // component={'img'} // add this line to use <img />
                classes={wideCardMediaStyles}
                image={
                    'https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg'
                }
            />
            <CardContent className={cardStyles.content}>
                <TextInfoContent
                    classes={textCardContentStyles}
                    heading={'Nature Around Us'}
                    body={
                        'We are going to learn different kinds of species in nature that live together to form amazing environment.'
                    }
                />
                <Button color={'primary'} fullWidth className={cardStyles.cta}>
                    Find Out More <ChevronRightRounded/>
                </Button>
            </CardContent>
            <Box px={3} pb={3}>
                <PeopleCardFooter
                    faces={[
                        'https://i.pravatar.cc/300?img=1',
                        'https://i.pravatar.cc/300?img=2',
                        'https://i.pravatar.cc/300?img=3',
                        'https://i.pravatar.cc/300?img=4',
                    ]}
                />
            </Box>
        </Card>


    );
};


export default EngagementCard;