import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div class="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div class="px-4py-8 flex flex-col items-center justify-center justify-self-center text-center">
          <h2 class="text-base-content mb-6 text-5xl font-semibold">Whoops!</h2>
          <h3 class="text-base-content mb-1.5 text-3xl font-semibold">
            Something went wrong
          </h3>
          <p class="text-base-content mb-6 max-w-sm">
            The page you’re looking for isn’t found, we suggest you back to
            home.
          </p>
          <a onClick={() => navigate(-1)} class="btn btn-primary btn-gradient">
            Back to home page
          </a>
        </div>
        <div class="relative max-h-screen w-full p-2 max-lg:hidden">
          <img
            src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/404/error-5.png"
            alt="404 background"
            class="h-full w-full rounded-2xl"
          />
          <img
            src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/404/error-6.png"
            alt="404 illustration"
            class="absolute top-1/2 left-1/2 h-[clamp(300px,40vw,477px)] -translate-x-[42%] -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
