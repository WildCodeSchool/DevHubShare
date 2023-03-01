import Divider from "@mui/material/Divider";
import { Stack, useTheme, useMediaQuery } from "@mui/material";
import PostSend from "./MyPosts/PostSent";
import Conversation from "./MyPosts/Conversation";
import MyAnswer from "./MyPosts/MyAnswer";
import UserImage from "./UserImage";

export default function MyPosts() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          maxWidth: "100%",
          width: isSmallScreen ? "100%" : "50%",
        }}
      >
        <UserImage size="5rem" backgroundColor="grey" />

        <PostSend />
      </Stack>
      {isSmallScreen ? (
        <Divider orientation="horizontal" flexItem />
      ) : (
        <Divider orientation="vertical" flexItem />
      )}
      <Stack
        direction="column"
        spacing={2}
        sx={{
          maxWidth: "100%",
          width: isSmallScreen ? "100%" : "50%",
        }}
      >
        <Conversation />
        <MyAnswer />
      </Stack>
    </Stack>
  );
}
