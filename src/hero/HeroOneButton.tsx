import { ReactNode } from 'react';
import { Grid } from '@material-ui/core';

type IHeroOneButtonProps = {
    title: ReactNode;
    description: string;
    button_and: ReactNode;
    button_ios: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
    <header className="text-center">

        <h1 className="text-5xl text-white font-bold whitespace-pre-line leading-hero">
            {props.title}
        </h1>
        <div className="text-2xl mt-4 mb-16">{props.description}</div>
        <Grid
            container
            justifyContent="space-evenly"
            style={{ textAlign: 'center' }}
        >
            <Grid item lg={5} md={5} sm={10} xs={10}>
                {props.button_and}
            </Grid>
            <Grid item lg={5} md={5} sm={10} xs={10}>
                {props.button_ios}
            </Grid>
        </Grid>
    </header>
);

export { HeroOneButton };
