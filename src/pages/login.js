import { useRef, useEffect } from "react";
import Input from "../components/Input";
import {AiFillFacebook} from 'react-icons/ai'
import {useNavigate, useLocation} from 'react-router-dom'
import { login } from "../firebase.js";
import { Formik, Form } from "formik";
import { LoginSchema } from "../validation";

//img screenshots
import screenshot1 from "../assets/slider/screenshot1.png";
import screenshot2 from "../assets/slider/screenshot2.png";
import screenshot3 from "../assets/slider/screenshot3.png";
import screenshot4 from "../assets/slider/screenshot4.png";

//logo
import logo from "../assets/logo/logo1.png";

//icons
import iconGooglePlay from "../assets/icons/iconGooglePlay.png";
import iconMicrosoft from "../assets/icons/iconMicrosoft.png";

export default function Login() {
  
  const images = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4
]
    
    const navigate = useNavigate()
    const location = useLocation()

  const ref = useRef()


  useEffect(() => {
    let images = ref.current.querySelectorAll('img'),
    total = images.length,
    current = 0
    const imageSlider = () => {
        images[(current > 0 ? current : total ) - 1].classList.add('opacity-0')



      images[current].classList.remove('opacity-0')
      current = current === total - 1 ? 0 : current + 1
    }
    imageSlider()
    let interval = setInterval(imageSlider, 5000);
    return() => {
      clearInterval(interval)
    }

  }, [ref])

  const handleSubmit = async (values, actions) => {
   await login(values.username, values.password)
    navigate(location.state?.return_url || '/', {
      replace: true
    })
  }
  


  return (
    <div className="h-full w-full flex flex-warp overflow-auto items-center gap-x-8 justify-center ">
        
      <div className="hidden md:block w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div className="w-[250px] h-[538px] absolute top-[27px] right-[17px]" ref={ref}>
          {images.map((image, key) => (
            <img key={key} src={image} className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" alt="" />
          ))}
        </div>
      </div>

      <div className="w-[350px] grid gap-y-3">


      <div className="bg-white border px-[40px] pt-10 pb-6">
        <a href="https://www.instagram.com/" className="flex justify-center mb-8">
          <img src={logo} alt="logo" className="h-[51px]" />
          </a>
          <Formik validationSchema={LoginSchema} initialValues={{
            username: '',
            password: ''
          }} onSubmit={handleSubmit}>
            {({isSubmitting, isValid, dirty}) => (
              <Form className="grid gap-y-1.5">
              <Input name="username" label="Kullanıcı adı veya e-posta" />
              <Input type="password" name="password" label="Şifre" />
    
              <button type="submit" disabled={!isValid || !dirty || isSubmitting } className="h-[30px] mt-1 rounded bg-brand text-white text-sm font-medium disabled:opacity-50">Giriş yap</button>
    
              <div className="flex items-center my-2.5 mb-3.5">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="px-4 text-[13px] font-medium text-gray-400">YA DA</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
    
              <a href="https://www.instagram.com/" className="flex mb-2.5 justify-center items-center gap-x-2 text-sm font-semibold text-facebook">
                <AiFillFacebook size={20} /> Facebook ile Giriş Yap
              </a>
    
              <a href="https://www.instagram.com/" className="flex justify-center items-center text-link text-xs">
                Şifreni mi unuttun?
              </a>
              </Form>
            )}
          </Formik>
      </div>

      <div className="bg-white border p-4 text-sm text-center">
      Hesabın yok mu? <a href="https://www.instagram.com/" className="font-semibold text-brand">Kaydol</a>
      </div>

      <div className="p-4 -mt-2.5 text-sm text-center">
      Uygulamayı indir.
      <div className="flex items-center justify-center mt-4">
        <img src={iconGooglePlay} className="w-[120px] h-[40px] mr-2 rounded-sm" alt="" />
        <img src={iconMicrosoft} className="w-[120px] h-[40px] rounded-sm" alt="" />
      </div>
      </div>

      </div>
    </div>
  );
}