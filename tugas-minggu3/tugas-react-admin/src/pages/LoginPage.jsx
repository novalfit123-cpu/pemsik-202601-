import AuthLayout from "../Layouts/AuthLayout";
import Card from "../components/molecules/Card";
import Form from "../components/molecules/Form";
import Label from "../components/atoms/Label";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";

export default function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login berhasil!");
  };

  return (
    <AuthLayout>
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login Admin</h2>
        <Form onSubmit={handleLogin}>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" placeholder="Masukkan username" />
          </div>
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" placeholder="Masukkan password" />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 mt-6">
            Login
          </Button>
        </Form>
      </Card>
    </AuthLayout>
  );
}