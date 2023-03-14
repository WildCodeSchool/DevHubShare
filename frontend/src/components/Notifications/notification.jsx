// import React from "react";
// import { styled } from "@mui/system";
// import NotificationImg from "./images/bellNotification.png";
// import { Typography } from "@mui/material";

// const Notification = styled("img")({
//   width: "30%",
//   position: "relative",
//   // marginRight: "2%",
// });
// const Button = styled("button")({
//   border: "none",
//   background: "none",
//   color: "#0088CE",
// });

// export default function Notifications({ answersCount, filteredAnswers }) {
//   // const [answers, setAnswers] = useState([]);
//   // // const [answerscount, setAnswersCount] = useState(0);

//   // const getAnswers = async () => {
//   //   const response = await axios.get("http://localhost:5000/answers");
//   //   setAnswers(response.data);
//   // };
//   // console.info("answers2:", answers);

//   // useEffect(() => {
//   //   getAnswers();
//   // }, []);

//   // const filteredAnswers = answers.filter(
//   //   (answer) => postId === answer.post_id && userId === answer.user_id
//   // );
//   // const answersCount = filteredAnswers.length;
//   return (
//     <Button
//       sx={{
//         display: "flex",
//         justifyContent: "flex-start",
//       }}
//     >
//       <Notification src={NotificationImg} alt="notificationBell" />
//       {filteredAnswers.map((answer) => (
//         <Typography>
//           sx=
//           {{
//             backgroundColor: "red",
//             position: "absolute",
//             top: "30%",
//             right: "5.8%",
//             width: "1.3%",
//             height: "18%",
//             borderRadius: "50%",
//             fontSize: "100%",
//           }}
//           key={answer?.id}
//           {answersCount}
//         </Typography>
//       ))}
//     </Button>
//     // <div>
//     //   {filteredAnswers.map((answer) => (
//     //     <div key={answer.id}>
//     //       <p>{answersCount}</p>
//     //     </div>
//     //   ))}
//     // </div>
//   );
// }
