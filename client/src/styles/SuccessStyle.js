import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme)=>({
    appbar:{
        flex:"1",
        [theme.breakpoints.down('sm')]:{
            flex:"1",
        }
    },
    brand:{
        textAlign:"left",
        [theme.breakpoints.down("sm")]:{
        }
    },
    drawer:{
        width:"150px",        
    },
    content:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-evenly",
        margin:"50px 0 0 0",
    },
    create:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginBottom:'150px',
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            alignItems:"center",
            marginBottom:"10px",
        }
    },
    join:{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        marginBottom:'50px',
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column-reverse",
            alignItems:"center",
        }
    },
    image:{
        width:"40%",
        [theme.breakpoints.down("sm")]:{
            width:"95%",
            marginTop:"30px",
        }
    },
    text:{
        width:"50%",
        [theme.breakpoints.down("sm")]:{
            width:"95%",
        }
    },
    button:{
        width:"60%",
        marginTop:"50px",
        marginBottom:"50px",
        [theme.breakpoints.down("sm")]:{
            width:"95%",
            marginTop:"10px"
        }   
    }
}));

export default useStyle;   