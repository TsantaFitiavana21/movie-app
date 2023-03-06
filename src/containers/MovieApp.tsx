import { makeStyles } from "@mui/styles"
import { MainContainer } from "../pages/Main/containers/MainContainer"
import { SideBar } from "../pages/SideBar/containers/SideBar"

export const MovieApp = () => {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <div className={classes.root}>
                <SideBar />
                <MainContainer />
            </div>
        </div>
    )
}

const useStyles = makeStyles({
  main: {
    background: '#000000',
    color: 'white'
  },
    root: {
        display: "flex",
        height: "100vh",
        maxWidth: "80vw",
        margin: "auto",
    },
})