import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Controller, useForm } from "react-hook-form";
import { LoginDto, LoginResponseDto } from "@/api/auth/auth.dto";
import { AuthActions } from "@/api/auth/auth.actions";
import { useState } from "react";
import useAuth from "@/shared/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { CircularProgress, FormControl, FormHelperText, InputLabel, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export default function SignIn() {
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { Initialize } = useAuth();
    const submit = async (event: LoginDto) => {
        setLoading(true)
        console.log("event", event);
        try {
            let loginDto: LoginResponseDto | undefined = undefined;
            if (event.user_type === "merchant") {
                delete event.user_type;
                loginDto = await AuthActions.LoginMerchant(event)
            } else {
                delete event.user_type;
                loginDto = await AuthActions.LoginMerchantGroup(event)
            }

            if (loginDto) {
                Initialize(loginDto.token, loginDto.user)
                navigate('/')
            }
        }
        catch (er) {

            setLoading(false)
            console.log(er)
        }
    };


    const { control, handleSubmit } = useForm<LoginDto>({
        defaultValues: {
            passwd: 'Contec@321',
            username: "CHECK",
        }
    })


    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <img src='/logo.svg' className="mb-8 h-24" />
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit(submit)} noValidate sx={{ mt: 1 }}>
                    <FormControl size="small" fullWidth  >
                        <InputLabel id="user-type">User Type</InputLabel>
                        <Controller
                            rules={{ required: "This Field is required", }}
                            control={control} name="user_type" render={({ field, fieldState }) =>
                                <>
                                    <Select

                                        {...field}
                                        error={fieldState.invalid}
                                        required
                                        fullWidth
                                        id="user-type"
                                        label="User Type"
                                        autoFocus
                                    >
                                        <MenuItem value=""> -Select User Type- </MenuItem>
                                        <MenuItem value="merchant"> Merchant </MenuItem>
                                        <MenuItem value="merchant-group"> Merchant Group </MenuItem>
                                    </Select>
                                    <FormHelperText>{fieldState.error?.message }</FormHelperText>
                                </>
                            } />
                    </FormControl>
                    <Controller
                        rules={{ required: "This Field is required", }}
                        control={control} name="username" render={({ field, fieldState }) =>

                            <TextField
                                {...field}
                                error={fieldState.invalid}
                                helperText={fieldState.error?.message}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Username"
                                autoFocus
                            />
                        } />

                    <Controller
                        //  rules={{ required: 'Enter the password', minLength: { value: 8, message: 'Password Should be at least 8 characters ' } }}
                        name="passwd" control={control} render={({ field, fieldState }) =>
                            <TextField
                                {...field}
                                error={fieldState.invalid}
                                helperText={fieldState.error?.message}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        } />

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {
                            !isLoading ?
                                'Sign In' : <CircularProgress color='inherit' size={24} />
                        }
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}