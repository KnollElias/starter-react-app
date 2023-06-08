import { Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import Tabs from "../../components/TabComponent";
import ApiService from "../../service/BaseService";
import { firstTabList, secondTabList } from "../../assets/TabList";
import ProfileFormCard from "../../components/ProfileFormCard";
const api_service = new ApiService();

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [stuff, setStuff] = React.useState("kinder");
  const [city, setCity] = React.useState(null);

  const handleChangeStuff = (event, newValue) => {
    setStuff(newValue);
  };
  const handleChangeCity = (event, newValue) => {
    setCity(newValue);
  };
  const handleFilterName = async (event) => {
    const dummyUser = (await api_service.get("/users")).data;
    const filteredList = users.filter((user) => {
      //console.log(user, event.target.value);
      return user.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setUsers(
      filteredList.length > 0 && event.target.value !== ""
        ? filteredList
        : dummyUser
    );
  };
  React.useEffect(async () => {
    const response = await api_service.get("/users");
    if(stuff === 'kinder') {
      const filteredByUser = response.data.filter(user => user.userType === 'User')
      setUsers(filteredByUser);

    }
    else{
      const filteredByUser = response.data.filter(user => user.userType !== 'User')
      setUsers(filteredByUser);
    }
    
  }, [stuff]);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        padding: " 0 1.4rem",
        gap: "2.3rem",
        flexWrap: "wrap",
        flexDirection: "column",
      }}
    >
      <Grid>
        <Typography variant="h6" width={"100%"}>
          Profile Filtern
        </Typography>
      </Grid>
      <Grid>
        <Grid container>
          <Grid item>
            <Tabs
              value={stuff}
              handleChange={handleChangeStuff}
              tabs={firstTabList}
            />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item>
            {" "}
            <Tabs
              value={city}
              handleChange={handleChangeCity}
              tabs={secondTabList}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat( auto-fill, minmax( 400px , 1fr))",
            gridAutoFlow: "column",
            gap: "2rem",
          }}
        >
          <Grid item>
            <Grid container>
              <Grid item flex={"1"} sx={{ paddingInline: "1rem 3rem" }}>
                <TextField
                  onChange={handleFilterName}
                  size="small"
                  placeholder="name"
                  sx={{
                    borderRadius: "1rem",
                    backgroundColor: "white",
                    "::placeholder": { color: "black" },
                    "& fieldset": {
                      border: "none",
                    },
                  }}
                  fullWidth
                />
              </Grid>
              <Grid
                item
                sx={{
                  width: "100%",
                  maxHeight: "30rem",
                  overflow: "hidden scroll",
                  padding: "1rem",
                }}
              >
                {users.map(({ name, email, telefon }) => (
                  <ProfileCard name={name} email={email} phone={telefon} />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              width: "100%",
              maxHeight: "30rem",
              // overflow: "hidden scroll",
              padding: "1rem",
            }}
          >
            <ProfileFormCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
