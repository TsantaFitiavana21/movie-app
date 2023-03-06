import { makeStyles } from "@mui/styles"

export const MainContainer = () => {
    const classes = useStyles()

    return <div className={classes.main}>MainContainer</div>
}

const useStyles = makeStyles({
    main: {
        flex: 1,
    },
})
