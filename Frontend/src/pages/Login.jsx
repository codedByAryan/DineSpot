// import { useState } from "react";
// import API from "../services/api";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await API.post("/auth/login", form);
//       localStorage.setItem("token", res.data.token);
//      // console.log("FULL RESPONSE:", res.data);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       // Redirect based on role
//       if (res.data.user.role === "owner") {
//         navigate("/owner");
//       } else {
//         navigate("/");
//       }
//     } catch (error) {
//       alert("Login failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
//       <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;




import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.user.role === "owner") {
        navigate("/owner");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden px-4">

      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]" />

      {/* Card */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-orange-600 to-amber-400 rounded-2xl mb-6 shadow-lg rotate-3 hover:rotate-0 transition duration-300">
            <span className="text-white text-3xl font-bold">D</span>
          </div>

          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <p className="text-gray-400 text-sm mt-2">
            Login to continue your experience
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-6">

          {/* Email */}
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider ml-1">
              Email Address
            </label>

            <div className="relative mt-2">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider ml-1">
              Password
            </label>

            <div className="relative mt-2">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm text-gray-500 hover:text-orange-400 cursor-pointer">
            Forgot Password?
          </div>

          {/* Button */}
          <button
            disabled={loading}
            onClick={handleLogin}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/20 transition active:scale-[0.97] flex items-center justify-center gap-2"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <span>LOGIN</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-orange-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;