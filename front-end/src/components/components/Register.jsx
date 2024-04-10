import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkRNKXJVBa--Pp-PILg8-0T_OtdSpFMlo",
  authDomain: "artisan-peeper.firebaseapp.com",
  projectId: "artisan-peeper",
  storageBucket: "artisan-peeper.appspot.com",
  messagingSenderId: "122178031252",
  appId: "1:122178031252:web:a50cc6498077d213cbae81",
  measurementId: "G-CS97LJ6LLY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Set registration success to true
      setRegistrationSuccess(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="mx-auto max-w-sm">
        <div className="text-xl text-center">Sign Up</div>
        <div>
          <p className="text-muted-foreground text-sm text-center py-2 mb-2">Enter your information to create an account</p>
        </div>
        <form onSubmit={handleRegister}>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="Max"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Robinson"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </div>
        </form>
        {registrationSuccess && (
          <div className="mt-4 text-center text-sm">
            Registration successful!{" "}
            <Link to="/login" className="underline cursor-pointer">
              Login
            </Link>{" "}
            to continue.
          </div>
        )}
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login"><span className="underline cursor-pointer">Sign in</span></Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
