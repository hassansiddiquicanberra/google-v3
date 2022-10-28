import React from "react";
import Header from "../../components/Header";
import { getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

export default function signIn() {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      console.log("hip", res);
      setProviders(res);
    })();
  }, []);

  return (
    <>
      <Header />
      <div className="">
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name} className="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                alt="test"
              />
              {/* <img alt="google-logo">
                <p>This website is created for learning purposes</p>
                <button>Sign in with {provider.name}</button>
              </img> */}
            </div>
          ))}
      </div>
    </>
  );
}
