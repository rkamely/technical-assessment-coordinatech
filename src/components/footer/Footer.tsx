import VerticalDivider from "../../ui-components/divider/VerticalDivider.tsx";
import {CallIcon} from "./../../assets/icons/CallIcon.tsx"
import {LocationIcon} from "./../../assets/icons/LocationIcon.tsx"
import {TelegramIcon} from "./../../assets/icons/TelegramIcon.tsx"
import {YoutubeIcon} from "./../../assets/icons/YoutubeIcon.tsx"
import {WhatsappIcon} from "../../assets/icons/WhatsappIcon.tsx";
import {TwitterIcon} from "../../assets/icons/TwitterIcon.tsx";


const Footer = () => {

  return (
    <footer className={`flex flex-col gap-10 py-8 w-full max-w-[1240px] mx-auto px-4 `}>

      <div className={`flex flex-col lg:flex-row items-center justify-between gap-8`}>

        <div
          className={`w-full lg:max-w-[856px] flex flex-col gap-4 bg-bg-02 rounded-3xl grow h-auto md:h-[198px] p-4 md:p-8`}>
          <h3 className={`text-Body2-Black-LienHeight md:text-H4-Bold-lineHeight text-primary-purple-03`}>
            Contact Us
          </h3>
          <div className={`flex justify-between items-center text-primary-purple-03`}>
            <span className={`text-Body3-Bold md:text-Body2-Medium-lineHeight`}>Support team</span>
            <a href={'tel:+98192141722'} className={`flex justify-center items-center gap-2`}>
              <span className={`text-Body4-Medium-lineHeight md:text-Body2-Medium-lineHeight`}>+1 - 921-417-22</span>
              <CallIcon className={`hidden xsm:block size-4 md:size-6`}/>
            </a>
          </div>
          <div className={`flex justify-between items-center text-primary-purple-03 gap-2 `}>
            <span className={`text-Body3-Bold md:text-Body2-Medium-lineHeight text-nowrap`}>Postal Code</span>
            <div className={`flex justify-center items-center gap-2`}>
              <span className={`text-Body4-Medium-lineHeight md:text-Body2-Medium-lineHeight `}>lorem street - lorem avenue</span>
              <LocationIcon className={`hidden xsm:block size-4 md:size-6`}/>

            </div>
          </div>
        </div>

        <div
          className={`flex flex-col justify-between w-full lg:w-[370px] p-4 md:p-8 h-auto md:h-[198px] bg-bg-02 rounded-3xl`}>
          <h3 className={`text-Body2-Black-LienHeight md:text-H4-Bold-lineHeight text-primary-purple-03`}>
            Social Media
          </h3>
          <div className={`flex items-center justify-center gap-4 mt-4`}>
            <TelegramIcon/>
            <VerticalDivider/>
            <YoutubeIcon/>
            <VerticalDivider/>
            <WhatsappIcon/>
            <VerticalDivider/>
            <TwitterIcon/>
          </div>
        </div>

      </div>
    </footer>
  )
}
export default Footer