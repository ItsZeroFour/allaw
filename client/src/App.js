import Header from "./components/header/Header";
import Head from "./components/head/Head";
import Supervisor from "./components/supervisor/Supervisor";
import Advantages from "./components/advantages/Advantages";
import Services from "./components/services/Services";
import Companies from "./components/companies/Companies";
import AdvantagesSecond from "./components/advantages_second/AdvantagesSecond";
import Price from "./components/price/Price";
import SinglePrice from "./components/single_price/SinglePrice";
import Slider from "./components/slider/Slider";
import About from "./components/about/About";
import ContactUs from "./components/contact_us/ContactUs";
import Team from "./components/team/Team";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_CMS_URL}/api/delovoe-pravo?populate=*`
      );

      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      {data ? (
        <div className="page">
          <Header
            phone={data.phone}
            companyName={data.company_name}
            headerButton1={data.header_button_1_text}
            headerButton2={data.header_button_2_text}
            headerButton3={data.header_button_3_text}
            logo={data.logo.url}
          />

          <main>
            <Head
              title={data.title}
              subTitle={data.sub_title}
              buttonText={data.contact_us_button_text}
            />
            <Supervisor
              leader_name={data.leader_name}
              leader_role={data.leader_role}
              leader_text_1={data.leader_text_1}
              leader_text_2={data.leader_text_2}
              leader_age={data.leader_age}
              leader_age_desc={data.leader_age_desc}
              leader_photo={data.team_img_1.url}
            />
            <Advantages
              advTitle={data.text_advantages_title}
              text_advantages_1={data.text_advantages_1}
              text_advantages_2={data.text_advantages_2}
              text_advantages_3={data.text_advantages_3}
            />
            <Services
              services__title={data.services__title}
              services_item_1={data.services_item_1}
              services_item_2={data.services_item_2}
              services_item_3={data.services_item_3}
            />
            <Companies
              services_adv_1={data.services_adv_1}
              services_adv_2={data.services_adv_2}
              services_adv_3={data.services_adv_3}
              services_adv_4={data.services_adv_4}
              services_list_item_1={data.services_list_item_1}
              services_list_item_2={data.services_list_item_2}
              services_list_item_3={data.services_list_item_3}
              services_list_item_4={data.services_list_item_4}
              services_list_item_5={data.services_list_item_5}
              services_list_item_6={data.services_list_item_6}
              services_list_item_7={data.services_list_item_7}
              services_list_item_8={data.services_list_item_8}
              services_button_text={data.services_button_text}
              services_notfound_title={data.services_notfound_title}
              advantage_2_title={data.advantage_2_title}
            />
            <AdvantagesSecond
              advantage_2_item_1={data.advantage_2_item_1}
              advantage_2_item_2={data.advantage_2_item_2}
              advantage_2_item_3={data.advantage_2_item_3}
              advantage_2_item_4={data.advantage_2_item_4}
              advantage_2_item_5={data.advantage_2_item_5}
              advantage_2_item_6={data.advantage_2_item_6}
            />
            <Price
              price_title={data.price_title}
              price_item_1_name={data.price_item_1_name}
              price_item_1_desc={data.price_item_1_desc}
              price_item_1_price={data.price_item_1_price}
              price_item_2_name={data.price_item_2_name}
              price_item_2_desc={data.price_item_2_desc}
              price_item_2_price={data.price_item_2_price}
              price_item_3_name={data.price_item_3_name}
              price_item_3_desc={data.price_item_3_desc}
              price_item_3_price={data.price_item_3_price}
              price_item_4_name={data.price_item_4_name}
              price_item_4_desc={data.price_item_4_desc}
              price_item_4_price={data.price_item_4_price}
              price_item_5_name={data.price_item_5_name}
              price_item_5_desc={data.price_item_5_desc}
              price_item_5_price={data.price_item_5_price}
              price_not_title={data.price_not_title}
              price_not_desc={data.price_not_desc}
              single_price_title={data.single_price_title}
            />
            <SinglePrice
              single_price_item_1_title={data.single_price_item_1_title}
              single_price_item_1_item_1={data.single_price_item_1_item_1}
              single_price_item_1_price_1={data.single_price_item_1_price_1}
              single_price_item_1_item_2={data.single_price_item_1_item_2}
              single_price_item_1_price_2={data.single_price_item_1_price_2}
              single_price_item_1_item_3={data.single_price_item_1_item_3}
              single_price_item_1_price_3={data.single_price_item_1_price_3}
              single_price_item_2_title={data.single_price_item_2_title}
              single_price_item_2_item_1={data.single_price_item_2_item_1}
              single_price_item_2_price_1={data.single_price_item_2_price_1}
              single_price_item_2_item_2={data.single_price_item_2_item_2}
              single_price_item_2_price_2={data.single_price_item_2_price_2}
              single_price_item_2_item_3={data.single_price_item_2_item_3}
              single_price_item_2_price_3={data.single_price_item_2_price_3}
              single_price_item_3_title={data.single_price_item_3_title}
              single_price_item_3_price={data.single_price_item_3_price}
              single_price_item_4_title={data.single_price_item_4_title}
              single_price_item_4_price={data.single_price_item_4_price}
              any_questions_title={data.any_questions_title}
              any_questions_button_text={data.any_questions_button_text}
            />
            <Slider
              slider_item_1_title={data.slider_item_1_title}
              slider_item_1_text={data.slider_item_1_text}
              slider_item_2_title={data.slider_item_2_title}
              slider_item_2_text={data.slider_item_2_text}
              slider_item_3_title={data.slider_item_3_title}
              slider_item_3_text={data.slider_item_3_text}
              slider_item_4_title={data.slider_item_4_title}
              slider_item_4_text={data.slider_item_4_text}
            />
            <About
              about_title={data.about_title}
              about_text={data.about_text}
              about_subtitle={data.about_subtitle}
              about_desc={data.about_desc}
              slider_button_text={data.slider_button_text}
            />
            <ContactUs contact_us_title={data.contact_us_title} />
            <Team
              contact_us_text={data.contact_us_text}
              team_img_1={data.team_img_1.url}
              team_name_1={data.team_name_1}
              team_speciality_1={data.team_speciality_1}
              team_img_2={data.team_img_2.url}
              team_name_2={data.team_name_2}
              team_speciality_2={data.team_speciality_2}
              team_img_3={data.team_img_3.url}
              team_name_3={data.team_name_3}
              team_speciality_3={data.team_speciality_3}
              team_img_4={data.team_img_4.url}
              team_name_4={data.team_name_4}
              team_speciality_4={data.team_speciality_4}
              team_img_5={data.team_img_5.url}
              team_name_5={data.team_name_5}
              team_speciality_5={data.team_speciality_5}
            />
          </main>

          <Footer
            companyName={data.company_name}
            logo={data.logo.url}
            phone_reception={data.phone_reception}
            phone_director={data.phone_director}
            vk_link={data.vk_link}
            email={data.email}
          />
        </div>
      ) : (
        <div className="load-wrapper">
          <div className="box-wrapper">
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
          <p>Загрузка...</p>
        </div>
      )}
    </div>
  );
}

export default App;
