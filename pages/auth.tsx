import Input from "@/components/input";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-full w-full bg-[url('../public/images/hero.jpeg')] bg-no-repeat bg-centeer bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
            <div className="flex flex-col gap-4">
              <Input
                id="name"
                type="text"
                value={name}
                label="userName"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
              <Input
                id="email"
                type="email"
                value={email}
                label="Email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <Input
                id="password"
                type="password"
                value={password}
                label="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
