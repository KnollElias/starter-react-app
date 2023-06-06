import {
  Avatar,
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ProfileFormCard() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();
  const [isEditClicked, setIsEditClicked] = useState(false);
  const onSubmit = (data) => {
    trigger();
    console.log(data);
  };
  return (
    <Card
      sx={{
        width: "22rem",
        // maxHeight: "32rem",
        borderRadius: "1rem",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection:'column',
        padding: "1.3rem 3rem 0 3rem;",
        marginTop: "1rem",
      }}
    >
      <Grid container flexDirection={'column'} alignItems={'center'} gap={2}>
          <Grid item>
              <Avatar
                alt="Remy Sharp"
                src="https://source.unsplash.com/random/?w=800&h=400"
                sx={{ width: "5rem", height: "5rem" }}
              />
          </Grid>
          <Grid item>
            <Typography variant="body1" color="initial">Sanusi Jackson  </Typography>
          </Grid>
          <Grid item>
           <Typography variant="body1" color="initial">8512121212121221</Typography>
          </Grid>
          <Grid item>
           <Typography variant="body1" color="initial">mail</Typography>
          </Grid>
      </Grid>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container padding={3} flexDirection={"column"} gap={2}>
            <Grid item flex={1}>
              {" "}
              <TextField
                label="Title"
                size="small"
                {...register("title")}
                disabled={!isEditClicked}
                sx={{
                  "& :disabled": {
                    backgroundColor: "rgba(153, 153, 153, 0.2)",
                  },
                }}
              />
            </Grid>

            <Grid item flex={1}>
              <TextField
                label="Phone Number"
                size="small"
                {...register("phone_number", { required: true })}
                disabled={!isEditClicked}
                sx={{
                  "& :disabled": {
                    backgroundColor: "rgba(153, 153, 153, 0.2)",
                  },
                }}
              />
              <br />
              {errors && errors.phone_number && (
                <span>This field is required</span>
              )}
            </Grid>
            <Grid item flex={1}>
              {" "}
              <TextField
                label="Post Address"
                size="small"
                {...register("post_address")}
                disabled={!isEditClicked}
                sx={{
                  "& :disabled": {
                    backgroundColor: "rgba(153, 153, 153, 0.2)",
                  },
                }}
              />
            </Grid>

            <Grid item flex={1}>
              {" "}
              <TextField
                label="Email"
                size="small"
                {...register("email", { required: true })}
                disabled={!isEditClicked}
                sx={{
                  "& :disabled": {
                    backgroundColor: "rgba(153, 153, 153, 0.2)",
                  },
                }}
              />
              <br />
              {errors.email && <span>This field is required</span>}
            </Grid>
            <Grid item>
              <Button type="submit">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default ProfileFormCard;
