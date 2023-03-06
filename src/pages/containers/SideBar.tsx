import { makeStyles } from "@mui/styles"

export const SideBar = () => {
    const classes = useStyles()

    return <div className={classes.sidebar}>SideBar</div>
}

const useStyles = makeStyles({
    sidebar: {
      width: '20vw'
    },
})
