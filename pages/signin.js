import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/signin.module.css";
import Link from "next/link";
import userData from '../public/data/user.json';

const Signin = (props) => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = userData.users.find(u => u.email === email);
    if (!user) {
      alert("Email is incorrect");
    }else if(password !== user.password){
      alert("Password is incorrect");
    }else{
      router.push("/homepage");
    };
    // if(email === "test@gmail.com" && password === "123456"){
    //   router.push("/homepage");
    // }else{
    //   alert("Email or password is incorrect");
    // }
  };
  const signUp = () => {
    router.push("/signup");
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="user-auth-color h-screen flex justify-center items-center">
      <div className="rounded-xl bg-white w-[600px] h-[700px]">
        <div className="m-5">
          <Image className="ml-60" src="/management.png" alt="" width={60} height={60}/>
          <div className="text-center">
            <b className="inline-block font-bold text-2xl">
              Sign in to EasyManage
            </b>
            <br></br>
            <span>{`Don’t have an account? `}</span>
            <b className="font-semibold">
              <Link href="/signup">Sign up</Link>
            </b>
          </div>
        </div>

        <div className={styles.signIn__wrapper}>
          <div className={styles.signIn__google}>
            <img className={styles.signIn__google__img} src="/google.png" alt=""  />
            <div className={styles.signIn__google__title}>Sign in with Google</div>
          </div>
            
          <div className={styles.signIn__facebook}>
            <img className={styles.signIn__facebook__img} src="/facebook.png" alt=""  />
            <div className={styles.signIn__facebook__title}>Sign in with Facebook</div>     
          </div>
          <div className={styles.signIn__orHolder}>
            <div className={styles.signIn__line}></div>
            <div className={styles.signIn__or}>OR</div>
            <div className={styles.signIn__line}></div>
          </div>
          <div className={styles.signIn__email}>
              <div className={styles.signIn__email__title}>
              Email
            </div>
            <div className={styles.signIn__input__email__holder}>
              <input className={styles.signIn__input__email} type="email" value={email} placeholder="Enter Email" 
              required onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className={styles.signIn__password}>
            <div className={styles.signIn__title}>
              Password
            </div>
            <div className={styles.signIn__password__holder}>
              <input className={styles.signIn__password__input} type="password" value={password} placeholder="Enter Password" 
              required onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
          <div className={styles.signIn__password__option}>
            <div className={styles.signIn__checkBox}>
            <input  type="checkbox"/>
            <label>Remember me</label>
            </div>
            <button className={styles.signIn__forgorPass}>   
              <Link href="/forgotpass">Forgot password</Link>
            </button>
            
          </div>
          <button className={styles.signIn__btn} type="submit">
            Sign in
          </button>
        </div>
      </div>
    </div>
    </form>
  );
};

export default Signin;
