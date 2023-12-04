import { useState } from "react";
import LoginForm from "@/components/Form/LoginForm";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <LoginForm user={user} setUser={setUser} />
    </div>
  );
}
