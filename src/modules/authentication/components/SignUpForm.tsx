export default function SignUpForm() {
  return (
    <main>
      <form>
        <div>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" placeholder="Type your email address" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
      </form>
    </main>
  );
}
