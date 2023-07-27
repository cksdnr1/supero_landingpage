import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Grid, Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Exercises, History, Sets } from '../../type/types';
import { displayedAt } from '../../utils/displayedAt';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Background } from '../../background/Background';

const useStyles = makeStyles((theme) => ({
    cardDiv: {
        display: 'flex',
        alignItems: 'center',
    },

    feedCardGrid: {
        padding: '12px',
    },
    feedCard: {
        backgroundColor: '#25272c',
        color: 'white',
    },
}));

export const HistoryViewer = ({ histories }: any) => {
    const classes = useStyles();
    const router = useRouter();
    const [history, setHistory] = useState<History[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Container>
                <div>
                    <h1 className="text-5xl text-center text-white font-bold whitespace-pre-line leading-hero">
                        <span className="text-primary-500">우리</span>{' '}
                        {' 같이\n'}
                        <span className="text-primary-600">Supero</span>{' '}
                        하러갈래?
                    </h1>
                    <Grid
                        container
                        className={classes.cardDiv}
                        alignItems="center"
                    >
                        {histories ? (
                            histories.map((history: any) => (
                                <Grid
                                    item
                                    md={12}
                                    xs={12}
                                    sm={12}
                                    alignItems="center"
                                    className={classes.feedCardGrid}
                                >
                                    <Card className={classes.feedCard}>
                                        <Typography
                                            variant="h1"
                                            style={{
                                                paddingTop: '6px',
                                                paddingBottom: '6px',
                                                fontSize: '24px',
                                            }}
                                        >
                                            {history.nickname}
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            style={{
                                                color:"#717171", 
                                                paddingTop: '6px',
                                                paddingBottom: '6px',
                                                fontSize: '24px',
                                            }}
                                        >
                                            {displayedAt(history.date)}
                                        </Typography>
                                        {JSON.parse(history.exercises).map(
                                            (exercise: any) => {
                                                return<Grid
                                                    container
                                                    justifyContent="space-between"
                                                >
                                                    <Grid item md={8} sm={8}>
                                                        {exercise.name}
                                                    </Grid>
                                                    <Grid item md={2} sm={2}>
                                                        {exercise.sets.length}
                                                    </Grid>
                                                    <Grid item md={2} sm={2}>
                                                        {exercise.onerm.toFixed(1)}
                                                    </Grid>
                                                </Grid>;
                                            },
                                        )}
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            <CircularProgress />
                        )}
                    </Grid>
                </div>
            </Container>
        </>
    );
};

export async function getServerSideProps(context: any) {
    const { nickname } = context.query;
    const res = await fetch(
        `http://172.29.203.61:8000/api/history/${nickname}`,
    );
    const histories = await res.json();

    return {
        props: {
            histories,
        },
    };
}

export default HistoryViewer;
