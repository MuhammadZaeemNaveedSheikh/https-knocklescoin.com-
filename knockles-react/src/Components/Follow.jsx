import Twitter from "../static/Twitter.png";
import Telegram from "../static/Telegram.png";
import Dex from "../static/DEX CHART.png";
import Contract from "../static/CONTRACT.png";

const Follow = () => {
  return (
    <div className="follow section" id="follow">
      <a
        className="font-baalo font-bold text-[40px] lg:text-[80px]"
        href={process.env.REACT_APP_TWITTER_LINK}
        target="_blank"
        rel="noreferrer"
        id="follow_1"
      >
        Twitter
      </a>
      <a
        className="font-baalo font-bold text-[40px] lg:text-[80px]"
        href={process.env.REACT_APP_TELEGRAM_LINK}
        target="_blank"
        rel="noreferrer"
        id="follow_2"
      >
        Telegram
      </a>
      <a
        className="font-baalo font-bold text-[40px] lg:text-[80px]"
        href={process.env.REACT_APP_DEX_LINK}
        target="_blank"
        rel="noreferrer"
        id="follow_3"
      >
        {" "}
        DexChart{" "}
      </a>

      <a
        className="font-baalo font-bold text-[40px] lg:text-[80px]"
        href={process.env.REACT_APP_CONTRACT_LINK}
        target="_blank"
        rel="noreferrer"
        id="follow_4"
      >
        Etherscan
      </a>
      <img src={Twitter} className="follow_img_1" alt="" />
      <img src={Telegram} className="follow_img_2" alt="" />
      <img src={Dex} className="follow_img_3" alt="" />
      <img src={Contract} className="follow_img_4" alt="" />
    </div>
  );
};
export default Follow;
