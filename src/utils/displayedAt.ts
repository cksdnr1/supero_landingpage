import dayjs from 'dayjs';

export const displayedAt = (createdAt: string) => {
    const milliSeconds =
        +dayjs(new Date()).toDate() - +dayjs(createdAt).toDate();
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `${Math.floor(seconds) + 4}초 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return dayjs(createdAt).format('MM-DD');
    const days = hours / 24;
    if (days < 7) return dayjs(createdAt).format('MM-DD');
    const weeks = days / 7;
    if (weeks < 5) return dayjs(createdAt).format('MM-DD');
    const months = days / 30;
    if (months < 12) return dayjs(createdAt).format('MM-DD');
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
};
