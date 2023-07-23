import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
    TextField,
    Grid,
    Divider,
    Button,
    Container,
    Typography,
    Hidden,
    Chip,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
    Card,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { History } from '../../type/types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Head from 'next/head';
import styles from './BoardView.module.css';
import MuiSnackbar from '@material-ui/core/Snackbar';

import dynamic from 'next/dynamic';

const useStyles = makeStyles((theme) => ({
    sendComment: {
        transform: 'rotate(-90deg)',
    },
    container: {
        padding: '0',
        margin: '0',
    },
    boardTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 8px',
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    large: {
        width: theme.spacing(11),
        height: theme.spacing(11),
        marginBottom: '3px',
    },
    snackbar: {
        marginTop: '80px',
    },
    button: {
        padding: '4px',
        margin: '4px',
        height: '40px',
        marginTop: '10px',
        color: 'white',
    },
    replyImage: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginLeft: 'auto',
        margin: '3px',
    },
    anonyInformname: {
        margin: '0 10px',
    },
    anonyInform: {
        marginLeft: '10px',
        '& .MuiTextField-root': {
            padding: '0',
            width: '60px',
        },
    },
    replyCard: {
        textAlign: 'right',
        fontSize: '0.75rem',
        marginTop: 'auto',
        marginLeft: '2px',
    },
    replyProfile: {
        display: 'flex',
    },
    anonyInput: {
        marginRight: '10px',
    },
    anonymous: {
        display: 'flex',
    },
    anonymousDelete: {
        dispaly: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'right',
    },
    deleteButton: {
        margin: '2px',
    },
    boardTop_subtitle_category: {
        color: '#5FDD40',
        fontSize: '13px',
    },
    subtitleNickname: {
        fontSize: '13px',
    },
    subtitle: {
        fontSize: '13px',
        color: '#999999',
    },
    anonyInputBox: {
        height: '50px',
        margin: '6px 0',
    },
    anonySelect: {
        display: 'flex',
        alignItems: 'center',
    },
    anonymousbox: {
        marginLeft: '5px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '12px',
    },
    anonyform: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    commentInputBox: {
        paddingTop: '10px',
        display: 'flex',
        width: '100%',
        marginBottom: '8px',
    },
    commentInputform: {
        width: '100%',
    },
    checkbox: {
        width: 32,
        height: 32,
    },
    modal_password_input: {
        margin: '3px',
        alignItems: 'center',
    },
    informBox: {
        display: 'flex',
        alignItem: 'center',
    },
    submitButton: {
        marginBottom: '32px',
    },
    commentInput: {
        width: '100%',
        marginBottom: '6px',
        '& .MuiOutlinedInput-input': {
            padding: '10px',
        },
    },
    mobilelikeitem: {
        margin: '0 2px',
    },
    bestCommentDivider: {
        background: theme.palette.primary.main,
    },
    bestCommentTitle: {
        color: theme.palette.primary.main,
        fontSize: '14px',
        paddingLeft: '4px',
        fontWeight: 'bold',
    },
    mobilelikeBox: {
        marginBottom: '8px',
        paddingRight: '8px',
    },
    urlBox: {
        fontSize: '11px',
    },
    urlBoxIconButton: {
        padding: '4px',
    },
    urlBoxIcon: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    urlBoxCard: {
        width: 'auto',
        display: 'flex',
        padding: '0 8px',
        alignItems: 'center',
        alignContent: 'center',
    },
    urldiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '8px',
    },
    atag: {
        dispaly: 'inline-block',
        height: '24px',
    },
    allButton: {
        margin: '8px 8px',
        marginRight: '0',
        color: 'white',
        backgroundColor: '#5FDD40',
        padding: '6px',
    },
    bestButton: {
        margin: '8px 8px',
        marginRight: '0',
        color: 'white',
        padding: '6px',
    },
    bottomBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: '6px 6px',
    },
    userButton: {
        padding: '0',
        minWidth: '40px',
    },
}));

export const HistoryViewer = ({ histories }: any) => {
    const classes = useStyles();
    const router = useRouter();
    const [history, setHistory] = useState<History[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetch(`http://43.200.121.48:8000/api/history/cksnrlrl@naver.com`)
                .then((response) => response.json())
                .then((data) => {
                    console.log("kkkkkk");

                    setHistory(data);
                })
                .catch((error) => {console.log(error);
console.log("에러가 발생해서 가져오지 못합니다");
                });
        },
     []);

    return (
        <>
            <Container className={classes.container}>
                <div className={classes.boardTop}>
                    <div>
                        <Typography
                            variant="h1"
                            style={{
                                paddingTop: '6px',
                                paddingBottom: '6px',
                                fontSize: '24px',
                                fontWeight: 400,
                            }}
                        >
                            hello
                        </Typography>
                    </div>
                </div>
            </Container>
        </>
    );
};

export async function getServerSideProps(context: any) {
    const { nickname } = context.query;
    const res = await fetch(`http://43.200.121.48:8000/api/history/${nickname}`);
    const histories = await res.json();
    return {
        props: {
            histories,
        },
    };
}

export default HistoryViewer;
