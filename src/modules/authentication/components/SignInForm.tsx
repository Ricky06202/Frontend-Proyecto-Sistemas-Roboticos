export default function SignInForm() {
  return (
    <main>
      <h1>Sign In</h1>
      <span />
      <form>
        <div>
          <label>Email Address</label>
          <input type="email" placeholder="Type your email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
      </form>
    </main>
  );
}
