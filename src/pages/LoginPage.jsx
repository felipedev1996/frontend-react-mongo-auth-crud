import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
      console.log(isAuthenticated);
    }
  }, [isAuthenticated]);

  return (

<>
  




  
      <div href="#" class="group block max-w-xs mx-auto mt-5 rounded-lg p-6 bg-zinc-700  ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-zinc-600 hover:ring-sky-400">
      <div class="flex flex- space-x-3">
       
        <h2  class="text-white  text-xl font-semibold">Template user for login</h2>
      </div>
      <p class="text-white-500 group-hover:text-white text-ms">Email:  visitapp@user.tld</p>
      <p class="text-white-500 group-hover:text-white text-ms">Password: visitapp </p>
    </div>
      <div className="mt-10 flex items-center justify-center">

      {/* h-[calc(100vh-100px)] */}
        
        <Card>
          {loginErrors.map((error, i) => (
            <Message message={error} key={i} />
          ))}
          <h1 className="text-2xl font-bold">Login</h1>
  
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="email">Email:</Label>
            <Input
              label="Write your email"
              type="email"
              name="email"
              placeholder="youremail@domain.tld"
              {...register("email", { required: true })}
            />
            <p>{errors.email?.message}</p>
  
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              name="password"
              placeholder="Write your password"
              {...register("password", { required: true, minLength: 6 })}
            />
            <p>{errors.password?.message}</p>
  
            <button className="my-4 bg-blue-700 p-2 rounded w-full" >Login</button>
          </form>
  
          <p className="flex gap-x-2 justify-between">
            Don't have an account? <Link to="/register" className="text-blue-600 hover:text-blue-400">Sign up</Link><Link to="/" className="text-blue-600 hover:text-blue-400">Home</Link>
          </p>
        </Card>
      </div>
</>
  );
}
