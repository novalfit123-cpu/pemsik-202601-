import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/molecules/Card";
import Form from "../components/molecules/Form";
import Label from "../components/atoms/Label";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import dummyUsers from "../data/users.json";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userFound = dummyUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (userFound) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <Card className="w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6">Login Admin</h2>
      {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
      <Form onSubmit={handleLogin}>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Masukkan username" 
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Masukkan password" 
          />
        </div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 mt-6 text-white py-2 rounded">
          Login
        </Button>
      </Form>
    </Card>
  );
}