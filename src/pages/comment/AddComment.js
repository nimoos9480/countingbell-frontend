// import { asyncAddComment } from "../store/commentSlice";
// import { useDispatch } from "react-redux";
// import styled from "styled-components";
// import { useState } from "react";

// const Form = styled.form`
//   text-align: center;
//   margin: 20px;

//   &.active {
//     display: none;
//   }

//   input[type="text"] {
//     width: 90%;
//     border: none;
//     border-bottom: 1px solid #ddd;
//   }

//   input[type="submit"] {
//     background: black;
//     color: white;
//     border-radius: 5px;
//     margin: 10px;
//     padding: 5px 10px;
//   }
// `;

// const AddComment = () => {
//   const dispatch = useDispatch();
//   const [comment, setComment] = useState({
//       ""
//   });

//   const onSubmit = (e) => {
//     e.preventDefault();

//     dispatch(asyncAddComment(data))
//       .then(() => {
//         dispatch(asy)
//         navigate("/")
//       });

//     return (
//       <Form onSubmit={onSubmit} className={active ? "active" : ""}>
//         <input
//           type="text"
//           value={comment}
//           onChange={(e) => {
//             setComment(e.target.value);
//           }}
//         />
//         <input type="submit" value="댓글" />
//       </Form>
//     );
//   };
// }
// export default AddComment;
