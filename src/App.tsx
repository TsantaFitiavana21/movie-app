import { makeStyles } from "@mui/styles"
import { MainContainer } from "./pages/containers/MainContainer"
import { SideBar } from "./pages/containers/SideBar"

export const App = () => {
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
