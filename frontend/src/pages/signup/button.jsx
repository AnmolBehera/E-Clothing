import { useState } from 'react';
import { useInterval } from '@mantine/hooks';
import { createStyles, Button, Progress } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    button: {
        position: 'relative',
        transition: 'background-color 150ms ease',
        width: '15%',
        margin:'2%'

    },

    progress: {
        ...theme.fn.cover(-1),
        height: 'auto',
        backgroundColor: 'transparent',
        zIndex: 0,
    },

    label: {
        position: 'relative',
        zIndex: 1,
    },
}));

export function MyButton() {
    const { classes, theme } = useStyles();
    const [progress, setProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const interval = useInterval(
        () =>
            setProgress((current) => {
                if (current < 100) {
                    return current + 1;
                }

                interval.stop();
                setLoaded(true);
                return 0;
            }),
        20
    );

    return (
        <Button
            fullWidth
            className={classes.button}
            onClick={() => (loaded ? setLoaded(false) : !interval.active && interval.start())}
            color={loaded ? 'teal' : theme.primaryColor}
        >
            <div className={classes.label}>
                {progress !== 0 ? 'Signing Up' : loaded ? 'Signed Up Successfully' : 'Sign Up'}
            </div>
            {progress !== 0 && (
                <Progress
                    value={progress}
                    className={classes.progress}
                    color={theme.fn.rgba(theme.colors[theme.primaryColor][2], 0.35)}
                    radius="sm"
                />
            )}
        </Button>
    );
}