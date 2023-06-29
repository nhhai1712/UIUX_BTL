import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/signin.module.css";
import Link from "next/link";
const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRePassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if(password !== re_password){
      alert("Password and Re-Password are not the same");
    }else{
      router.push("/homepage");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="user-auth-color h-screen flex justify-center items-center">
      <div className="rounded-xl bg-white w-[600px] h-[700px]">
        <div className="m-5">
          <Image className="ml-60" src="/management.png" alt="" width={60} height={60}/>
          <div className="text-center">
            <b className="inline-block font-bold text-2xl">
              Sign up to EasyManage
            </b>
            <br></br>
            <span>{`Already have an account? `}</span>
            <b className="font-semibold">
              <Link href="/signin">Sign in</Link>
            </b>
          </div>
        </div>

        <div className={styles.signIn__wrapper}>
          <div className={styles.signIn__google}>
            <img className={styles.signIn__google__img} src="/google.png" alt=""  />
            <div className={styles.signIn__google__title}>Sign up with Google</div>
          </div>
            
          <div className={styles.signIn__facebook}>
            <img className={styles.signIn__facebook__img} src="/facebook.png" alt=""  />
            <button className={styles.signIn__facebook__title}>Sign up with Facebook</button>     
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
          <div className={styles.signIn__password}>
            <div className={styles.signIn__title}>
              Confirm Password
            </div>
            <div className={styles.signIn__password__holder}>
              <input className={styles.signIn__password__input} type="password" value={re_password} placeholder="Enter Confirm Password" 
              required onChange={(e) => setRePassword(e.target.value)}/>
            </div>
          </div>
          <button className={styles.signIn__btn} type="submit">
            Sign up
          </button>
        </div>
      </div>
    </div>
    </form>
  );
};

export default Signup;
