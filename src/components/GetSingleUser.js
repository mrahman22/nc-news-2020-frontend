// import React, { Component } from "react";
// import { fetchUser } from "./api";
// class GetSingleUser extends Component {
//   state = {
//     singleUser: {},
//     isLoading: true,
//   };

//   componentDidMount() {
//     fetchUser(this.props.username).then((res) => {
//       this.setState({ singleUser: res.data.user, isLoading: false });
//     });
//   }

//   render() {
//     if (this.state.isLoading) return "...loading";
//     const { username, avatar_url, name } = this.state.singleUser;
//     return (
//       <section className="user">
//         <h1>{username}</h1>
//         <ul>
//           <li>{name}</li>
//         </ul>
//         <p>{avatar_url}</p>
//       </section>
//     );
//   }
// }

// export default GetSingleUser;
