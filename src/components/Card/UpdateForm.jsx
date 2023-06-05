import { Box, Button, Grid, TextField } from "@mui/material";
import React, { memo } from "react";
import { useForm } from "react-hook-form";

function UpdateForm({ register, errors, title }) {
  return (
    <Grid container padding={3} flexDirection={"column"} gap={2}>
      <Grid item flex={1}>
        {" "}
        <TextField label="Title" size="small" {...register("title")} />
      </Grid>

      <Grid item flex={1}>
        <TextField
          label="Phone Number"
          size="small"
          {...register("phone_number", { required: true })}
        />
        <br />
        {errors.phone_number && <span>This field is required</span>}
      </Grid>
      <Grid item flex={1}>
        {" "}
        <TextField
          label="Post Address"
          size="small"
          {...register("post_address")}
        />
      </Grid>

      <Grid item flex={1}>
        {" "}
        <TextField
          label="Email"
          size="small"
          {...register("email", { required: true })}
        />
        <br />
        {errors.email && <span>This field is required</span>}
      </Grid>
      <Grid item>
        <Button type="submit" form={"editForm" + title}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default memo(UpdateForm);
