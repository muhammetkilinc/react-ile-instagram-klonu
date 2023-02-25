import { useNavigate, useLocation, Link } from "react-router-dom";
import { register } from "../../firebase.js";
import { Formik, Form } from "formik";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Separator from "../../components/Separator";
import { RegisterSchema } from "../../validation";
import logo from "../../assets/logo/logo1.png";
import { AiFillFacebook } from "react-icons/ai";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    const response = await register(values);
    console.log(response);
    if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
    }
  };

  return (
    <div className="w-[350px] grid gap-y-3">
      <div className="bg-white border px-[40px] pt-10 pb-6">
        <a
          href="https://www.instagram.com/"
          className="flex justify-center mb-4"
        >
          <img src={logo} alt="logo" className="h-[51px]" />
        </a>

        <p className="text-[17px] font-semibold text-[#8e8e8e] text-center mb-6">
          Arkadaşlarının fotoğraf ve
          <br /> videolarını görmek için kaydol.
        </p>

        <Button>
          <AiFillFacebook size={20} /> Facebook ile Giriş Yap
        </Button>

        <Separator />

        <Formik
          validationSchema={RegisterSchema}
          initialValues={{
            email: "",
            full_name: "",
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form className="grid gap-y-1.5">
              <Input name="email" label="E-posta" />
              <Input name="full_name" label="Adı Soyadı" />
              <Input name="username" label="Kullanıcı adı" />
              <Input type="password" name="password" label="Şifre" />
              <p className="text-xs text-center text-[#8e8e8e] py-2">
                Hizmetimizi kullanan kişiler senin iletişim bilgilerini <br />
                Instagram'a yüklemiş olabilir.
                <a
                  href="https://www.facebook.com/help/instagram/261704639352628"
                  className="text-[#00379B]"
                >
                  Daha Fazla Bilgi Al
                </a>
                <br />
                <br />
                Kaydolarak,{" "}
                <a
                  href="https://help.instagram.com/581066165581870/?locale=tr_TR"
                  className="text-[#00379B]"
                >
                  Koşullarımızı
                </a>
                ,{" "}
                <a
                  href="https://www.facebook.com/privacy/policy"
                  className="text-[#00379B]"
                >
                  Gizlilik İlkemizi
                </a>{" "}
                ve{" "}
                <a
                  href="https://help.instagram.com/1896641480634370/"
                  className="text-[#00379B]"
                >
                  Çerezler İlkemizi{" "}
                </a>
                kabul etmiş olursun.
              </p>
              <Button
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
              >
                Kaydol
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="bg-white border p-4 text-sm text-center">
        Hesabın var mı?{" "}
        <Link to="/auth/login" className="font-semibold text-brand">
          Giriş yap
        </Link>
      </div>
    </div>
  );
}
