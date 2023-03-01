import Divider from "@mui/material/Divider";
import { Stack } from "@mui/material";
import PostSend from "../components/MyPosts/PostSent";
import Conversation from "../components/MyPosts/Conversation";
import MyAnswer from "../components/MyPosts/MyAnswer";
import UserImage from "../components/UserImage";

export default function MyPosts() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: "50%",
        }}
      >
        <UserImage />
        <PostSend />
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: "50%",
        }}
      >
        <Conversation />
        <MyAnswer />
      </Stack>
    </Stack>
  );
}
