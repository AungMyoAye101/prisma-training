import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between px-6 py-2 border-b border-b-gray-300 shadow">
      <div>Next-Auth</div>
      <div>
        <button>Sign in</button>
      </div>
    </nav>
  );
};

export default Nav;
