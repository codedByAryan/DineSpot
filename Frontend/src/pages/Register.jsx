// import { useState } from "react";
// import API from "../services/api";

// function Register() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "user"
//   });

//   const handleRegister = async () => {
//     try {
//       await API.post("/auth/register", form);
//       alert("Registered successfully");
//     } catch (error) {
//       alert("Error");
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>

//       <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
//       <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
//       <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />

//       <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
//         <option value="user">User</option>
//         <option value="owner">Owner</option>
//       </select>

//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// }

// export default Register;






import { useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import { User, Mail, Lock, BadgeCheck, ArrowRight } from "lucide-react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Registered successfully");
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden px-4 py-10">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] bg-orange-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px]" />

      {/* Register Card */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-orange-600 to-amber-400 rounded-2xl mb-6 shadow-lg rotate-3 hover:rotate-0 transition duration-300">
            <span className="text-white text-3xl font-bold">D</span>
          </div>

          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <p className="text-gray-400 text-sm mt-2">
            Join DineSpot and start your premium dining journey
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider ml-1">
              Full Name
            </label>
            <div className="relative mt-2">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                placeholder="Enter your name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider ml-1">
              Email Address
            </label>
            <div className="relative mt-2">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider ml-1">
              Password
            </label>
            <div className="relative mt-2">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                placeholder="Enter your password"
                type="password"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition"
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider ml-1">
              Select Role
            </label>
            <div className="relative mt-2">
              <BadgeCheck
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                size={18}
              />
              <select
                className="w-full appearance-none bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:bg-white/10 transition"
                onChange={(e) =>
                  setForm({ ...form, role: e.target.value })
                }
                value={form.role}
              >
                <option value="user" className="bg-[#111] text-white">
                  User
                </option>
                <option value="owner" className="bg-[#111] text-white">
                  Owner
                </option>
              </select>
            </div>
          </div>

          {/* Info Box */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs leading-6 text-gray-400">
              Choose <span className="text-orange-400 font-semibold">User</span>{" "}
              if you want to explore restaurants and book tables. Choose{" "}
              <span className="text-orange-400 font-semibold">Owner</span> if
              you want to add and manage your restaurant.
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handleRegister}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/20 transition active:scale-[0.97] flex items-center justify-center gap-2"
          >
            <span>REGISTER</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;