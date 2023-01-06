import React from "react"
import { Container,Grid,Typography,Button, TextField } from "@mui/material";
import { signin } from "./service/ApiService";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get("username");
    const password = data.get("password");
    // ApiService의 signin 메서드를 사용 해 로그인.
    signin({ username: username, password: password });
  }

  render() {
    return (
      <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5">
              로그인
            </Typography>
          </Grid>
        </Grid>
        <form noValidate onSubmit={this.handleSubmit}>
          {" "}
          {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="이메일 주소"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="패스워드"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                로그인
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default Login;


// function Login() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const username = data.get("username");
//     const password = data.get("password");
//     signin({ username: username, password: password});
//   }

  


//   return(
//     <Container component="main" maxWidth="xs" style={{ marginTop: "8%"}}>
//       <Grid container spacing = {2}>
//         <Grid item xs={12}>
//           <Typography component="h1" variant="h5">
//             로그인
//           </Typography>
//         </Grid>
//       </Grid>
//       <form noValidate onSubmit={handleSubmit}>
//         {" "}
//         {/* submit 버튼을 누르면 hardleSubmit이 실행됨 */}
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField 
//             variant="outlined"
//             required
//             fullWidth
//             id='username'
//             label="아이디"
//             name='username'
//             autoComplete="username"
//             />
//           </Grid>
//           <Grid itme xs={12}>
//           <TextField 
//             variant="outlined"
//             required
//             fullWidth
//             id='password'
//             label="패스워드"
//             name='password'
//             autoComplete="current-password"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" fullWidth variant='contained' color="primary">
//               로그인
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   )
// };

// export default Login;