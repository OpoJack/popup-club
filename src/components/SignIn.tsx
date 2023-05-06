import Image from 'next/image';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
export default function SignIn() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-base-content">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-base-content">
            Or{' '}
            <a href="#" className="font-semibold text-base-content underline hover:text-secondary">
              Sign up
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
          <div className="mx-2 rounded-lg bg-base-100 px-4 py-8 shadow-md sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-base-content"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-base-content"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="text-secondaryfocus:ring-indigo-600 h-4 w-4 rounded border-base-content"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-base-content">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-secondary hover:text-secondary-focus">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="mx-auto flex w-5/6 justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-secondary-content shadow-sm hover:bg-secondary-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-base-content" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-base-100 px-2 text-base-content">Or sign in with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-rows-3 gap-2">
                <div>
                  <a
                    href="#"
                    className="inline-flex h-11 w-full items-center justify-center rounded-md bg-twitter px-4 py-2 shadow-sm ring-1 ring-inset ring-neutral-content hover:bg-twitter-400 focus:outline-offset-0"
                  >
                    <span className="sr-only">Sign in with Twitter</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="white" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="inline-flex h-11 w-full justify-center rounded-md bg-neutral px-4 py-2 shadow-sm ring-1 ring-inset ring-neutral-content hover:bg-neutral-focus focus:outline-offset-0"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <Image
                      src={'/Github_Logo_White.png'}
                      alt="GitHub Logo"
                      width={75}
                      height={31}
                    />
                  </a>
                </div>
                <div>
                  <Link
                    href="#"
                    className="inline-flex h-11 w-full justify-center rounded-md bg-blurple px-4 py-2 shadow-sm ring-1 ring-inset ring-neutral-content hover:bg-blurple-600 focus:outline-offset-0"
                    onClick={() => {
                      void signIn('discord');
                    }}
                  >
                    <span className="sr-only">Sign in with Discord</span>
                    <Image
                      src={'/discord-logo-white.svg'}
                      alt="Discord Logo"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
