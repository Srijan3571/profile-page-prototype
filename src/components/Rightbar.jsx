import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const Rightbar = () => {
    return (
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={7}>
            <Avatar
              alt="T"
              src="https://material-ui.com/static/images/avatar/11.jpg"
            />
            <Avatar
              alt="T"
              src="https://material-ui.com/static/images/avatar/10.jpg"
            />
            <Avatar
              alt="T"
              src="https://material-ui.com/static/images/avatar/12.jpg"
            />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar
              alt="T"
              src="https://material-ui.com/static/images/avatar/13.jpg"
            />
            <Avatar
              alt="T"
              src="https://material-ui.com/static/images/avatar/14.jpg"
            />
            <Avatar
              alt="T"
              src="https://material-ui.com/static/images/avatar/15.jpg"
            />
            <Avatar
              alt="T"
              src="https://material-ui.com/static/images/avatar/16.jpg"
            />
            <Avatar
              alt="T"
              src="https://material-ui.com/static/images/avatar/8.jpg"
            />
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Recent Posts
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhNhTcdpoN6c-rzLj336_o2WpgLgeqirPchSSBerB&s"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRD5CSqUARd6KDt8nYtgTBWQDE1xL5NtXAKUtuph6&s"
                alt=""
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Messanger
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/20.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Rohit"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                Hii! Your Parcel has arrived.
                </Typography>
                {""}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="T" src="/static/images/avatar/4.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Tanya"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Hii ! How is it going.
                </Typography>
                {""}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
        </Box>
      </Box>
    );
  };
  
  export default Rightbar;