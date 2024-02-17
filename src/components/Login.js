import React, { useRef, useState } from 'react'
import { auth } from '../utils/firebase'
import { validateData } from '../utils/formValidation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'

const Login = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch()

    const name = useRef()
    const email = useRef()
    const password = useRef()

    const handleToggleBtn = () => {
        setIsLogin(!isLogin)
    }

    const handleSignIn = () => {
        const message = validateData(email.current.value, password.current.value)
  setErrorMessage(message)

  if(message) return;

  if(!isLogin) {
    //sign up logic

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
  
  const user = userCredential.user;
   updateProfile(user, {
   displayName: name.current.value, photoURL: ""
   }).then(() => {
    // Profile updated!
    const {uid, email, displayName, photoURL} = auth.currentUser
    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))


   }).catch((error) => {
    // An error occurred
   // ...
    });
  
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  setErrorMessage(errorCode + "-" + errorMessage)
});

  } else {
    // sign in logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
    })
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  setErrorMessage(errorCode + "-" + errorMessage)
});

  }
    }
  return (
    <div className=''>
      <section className=''>
  <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
    <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
      
      <h2 class="text-center text-2xl font-bold leading-tight text-black">
       {isLogin ? "Sign in" : "Sign up to create account"} 
      </h2>
      <p class="mt-2 text-center text-base text-gray-600">
      {isLogin ? "Dont have an account" : "Already have an account?"}
        <button
          class="font-medium text-black transition-all duration-200 hover:underline"
          onClick={handleToggleBtn}
        >
            {isLogin ? "Sign UP" : "Sign In"}
          
        </button>
      </p>
      <form action="#" method="POST" class="mt-8 " onSubmit={(e) => e.preventDefault()}>
        <div class="space-y-5 ">
         {!isLogin && ( <div>
            <label for="name" class="text-base font-medium text-gray-900">
              
              Full Name
            </label>
            <div class="mt-2">
              <input
                ref={name}
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Full Name"
                id="name"
              />
            </div>
          </div>)}
          <div>
            <label for="email" class="text-base font-medium text-gray-900">
              
              Email address
            </label>
            <div class="mt-2">
              <input
                ref={email}
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
                id="email"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="text-base font-medium text-gray-900">
                
                Password
              </label>
            </div>
            <div class="mt-2">
              <input
                ref={password}
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              onClick={handleSignIn}
            >
                {isLogin ? "Sign In" :"Create Account"}
              
              
            </button>
          </div>
        </div>
      </form>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Login
