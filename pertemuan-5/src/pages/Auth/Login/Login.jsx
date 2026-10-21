import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@/Pages/Auth/Components/Input";
import Label from "@/Pages/Auth/Components/Label";
import Button from "@/Pages/Auth/Components/Button";
import Card from "@/Pages/Auth/Components/Card";
import Heading from "@/Pages/Auth/Components/Heading";
import Form from "@/Pages/Auth/Components/Form";

import { dummyUser } from "@/Data/Dummy"; // Menggunakan data dari Notion

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === dummyUser.email && password === dummyUser.password) {
      localStorage.setItem("isLoggedIn", "true"); // Sinkron dengan kriteria PDF
      navigate("/admin/dashboard"); // Lolos masuk ke dashboard admin
    } else {
      setError("Email atau password salah!");
    }
  };

  return (
    <Card className="max-w-md p-6 bg-white rounded-xl shadow-md">
      <Heading as="h2" className="text-2xl font-bold text-center mb-6">Login Admin</Heading>
      {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
      <Form onSubmit={handleLogin}>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Masukkan email" required />
        </div>
        <div className="mt-4">
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Masukkan password" required />
        </div>
        <Button type="submit" className="w-full mt-6">
          Login
        </Button>
      </Form>
    </Card>
  );
};

export default Login;
