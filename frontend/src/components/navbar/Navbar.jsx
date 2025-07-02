function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="left">
        <a href="/">
          <img src="/hive.png" alt="Logo"></img>
          <span>Hive</span>
        </a>
        <a href="/">Home</a>
        <a href="/listings">Listings</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/properties">Properties</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
}

export default Navbar;