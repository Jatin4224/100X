/*import Logo from "./assets/login-group-271622.svg";

// Header
function Header() {
  return (
    <header className="fixed flex w-full items-center justify-center px-3 py-4">
      <img src={Logo} className="w-24 h-24" alt="Logo" />
    </header>
  );
}

// MainContent
function MainContent() {
  return (
    <main className="flex h-screen w-full items-center">
      <section className="flex w-full flex-col gap-10 px-7">
        <section className="flex flex-col gap-3">
          <h1 className="text-1.9rem font-bold leading-normal text-neutral-50">
            Happening now
          </h1>
          <p className="text-base font-medium leading-normal text-neutral-50">
            Join today.
          </p>
        </section>
        <a href="../login/create-account-step-1.html">
          <Button variant="default" size="lg" text="Create Account" />
        </a>
        <div className="flex items-center">
          <hr className="mr-2 flex-grow border-t-2 border-neutral-700" />
          <span className="font-regular text-base leading-normal text-neutral-50">
            or
          </span>
          <hr className="ml-2 flex-grow border-t-2 border-neutral-700" />
        </div>
        <section className="flex flex-col gap-5">
          <p className="text-base font-medium leading-normal text-neutral-50">
            Already have an account?
          </p>
          <a href="../home-feed/index.html">
            <Button variant="outline" size="lg" text="Sign in" />
          </a>
        </section>
      </section>
    </main>
  );
}

// Buttons logic
function Button(props) {
  const base = "font-bold py-2 px-4 rounded";//font - bold
  const size = {
    sm: "text",
    md: "text-md"
    lg: "text-lg"
    };     //sm,md,lg

  const variant = {
    default:"shadow-button w-full rounded-full bg-neutral-50 px-6 py-2 text-base font-bold leading-normal text-neutral-1000 backdrop-blur-xl hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-25",
    outline: "flex w-full items-center justify-center gap-2.5 rounded-5xl border border-solid border-button-stroke px-6 py-2 shadow-3xl backdrop-blur-23.66",
  }; //variant styles bg-blue-500
  const disabledStyles = props.disabled ? 'cursor-not-allowed opacity-50': ''; //bg-gray-600

  const classes = `${base} ${size[props.size]} ${variant} ${disabled}`;
  console.log("classes", classes);

    // return (
    //   <button className="flex w-full items-center justify-center gap-2.5 rounded-5xl border border-solid border-button-stroke px-6 py-2 shadow-3xl backdrop-blur-23.66">
    //     <span className="text-center text-base font-bold not-italic leading-normal text-twitter-default">
    //       {props.text}
    //     </span>
    //   </button>
    // );
  // }

    return 
      <button className={base}>{props.text} </button>
 
  }

function App() {
  return (
    <>
      <div className="bg-neutral-1000">
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
*/

import Logo from "./assets/login-group-271622.svg";

// Header
function Header() {
  return (
    <header className="fixed flex w-full items-center justify-center px-3 py-4">
      <img src={Logo} className="w-24 h-24" alt="Logo" />
    </header>
  );
}

// MainContent
function MainContent() {
  return (
    <main className="flex h-screen w-full items-center">
      <section className="flex w-full flex-col gap-10 px-7">
        <section className="flex flex-col gap-3">
          <h1 className="text-1.9rem font-bold leading-normal text-neutral-50">
            Happening now
          </h1>
          <p className="text-base font-medium leading-normal text-neutral-50">
            Join today.
          </p>
        </section>
        <a href="../login/create-account-step-1.html">
          <Button variant="default" size="lg" text="Create Account" />
        </a>
        <div className="flex items-center">
          <hr className="mr-2 flex-grow border-t-2 border-neutral-700" />
          <span className="font-regular text-base leading-normal text-neutral-50">
            or
          </span>
          <hr className="ml-2 flex-grow border-t-2 border-neutral-700" />
        </div>
        <section className="flex flex-col gap-5">
          <p className="text-base font-medium leading-normal text-neutral-50">
            Already have an account?
          </p>
          <a href="../home-feed/index.html">
            <Button variant="outline" size="lg" text="Sign In" />
          </a>
        </section>
      </section>
    </main>
  );
}

// Buttons logic

function Button(props) {
  const base = "font-bold py-2 px-4 rounded";
  const size = {
    sm: "text",
    md: "text-md",
    lg: "text-lg",
  };
  const variant = {
    default:
      "shadow-button w-full rounded-6xl bg-neutral-50 px-6 py-2 text-black-500 font-bold leading-normal text-neutral-1000 backdrop-blur-xl hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-25",
    outline:
      "flex w-full items-center justify-center gap-2.5 rounded-6xl border border-solid border-button-stroke px-6 py-2 shadow-3xl backdrop-blur-23.66 text-blue-500", // Added text-blue-500 for blue text color
  };
  const disabledStyles = props.disabled ? "cursor-not-allowed opacity-50" : "";

  const classes = `${base} ${size[props.size]} ${
    variant[props.variant]
  } ${disabledStyles}`;
  return <button className={classes}>{props.text}</button>;
}

function App() {
  return (
    <>
      <div className="bg-neutral-1000">
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
