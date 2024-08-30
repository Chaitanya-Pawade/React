import { Navigate } from "react-router-dom";

// export default function Protected({ children }) {
//     const role = "client"; // Replace with actual authentication logic
//     const isAuthenticated = role === "admin"; // Replace with actual authentication logic
  
//     if (!isAuthenticated) {
//       alert("You are not allowed to access this route");
//       return <Navigate to="/" replace />;
//     }
  
//     return children;
//   }

export default function ProtectedRoute({ children }) {
  const role = "student";
  if (role === "student") {
    alert("you are not allowed to go to this route");
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
}