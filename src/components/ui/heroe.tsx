
import style from "./heroe.module.css";


export default function Heroe({ speakers}: {speakers:string}) {

  return (
    <section className=" flex w-[300px] h-[300px] mb-20 justify-center transition ease-in md:w-[500px] md:h-[500px]">
     
      {speakers === "agent" && (<div className={style.animationLeft}>

        <svg
          data-name="Layer 1"
          width="738.57785"
          height="506.29416"
          viewBox="0 0 738.57785 506.29416"
        >
          <path
            d="M474.02018,702.1619H460.09205a6.68516,6.68516,0,0,1-6.67764-6.6775V579.39881a6.68516,6.68516,0,0,1,6.67764-6.6775h13.92813a6.68516,6.68516,0,0,1,6.67764,6.6775V695.4844A6.68516,6.68516,0,0,1,474.02018,702.1619Z"
            transform="translate(-230.71108 -196.85292)"
            fill="#3b82f6"
          />
          <path
            d="M439.86656,702.1619H425.93815a6.68516,6.68516,0,0,1-6.67763-6.6775V579.39881a6.68516,6.68516,0,0,1,6.67763-6.6775h13.92841a6.685,6.685,0,0,1,6.67749,6.6775V695.4844A6.685,6.685,0,0,1,439.86656,702.1619Z"
            transform="translate(-230.71108 -196.85292)"
            fill="#3b82f6"
          />
          <circle cx="223.25596" cy="174.37148" r="55.45452" fill="#3b82f6" />
          <path
            d="M485.30494,389.63c3.50718-.7945,7.872-1.78382,10.76527-4.92163a8.84311,8.84311,0,0,0,2.13407-7.15228,5.94869,5.94869,0,0,0-2.93123-4.401c-2.06076-1.14347-4.70871-.98411-7.32646.38154l-1.27694-21.61067-2.17088.1279L486,377.45988l1.6051-1.15859c1.861-1.3428,4.57564-2.37529,6.61255-1.245a3.82216,3.82216,0,0,1,1.83974,2.84585,6.68374,6.68374,0,0,1-1.5861,5.33172c-2.25164,2.44174-5.70106,3.38069-9.647,4.27537Z"
            transform="translate(-230.71108 -196.85292)"
            fill="#2f2e41"
          />
          <rect
            x="497.58092"
            y="350.52042"
            width="11.71244"
            height="2.17469"
            transform="translate(-289.30294 -92.63224) rotate(-11.17345)"
            fill="#2f2e41"
          />
          <rect
            x="461.312"
            y="357.6844"
            width="11.71244"
            height="2.17469"
            transform="matrix(0.98105, -0.19378, 0.19378, 0.98105, -291.37865, -99.52463)"
            fill="#2f2e41"
          />
          <path
            d="M467.60645,600.72363H402.95264a7.57572,7.57572,0,0,1-7.56739-7.56738V496.13379a56.31349,56.31349,0,0,1,56.24952-56.24951,57.90005,57.90005,0,0,1,57.834,57.83447V558.8623A41.90944,41.90944,0,0,1,467.60645,600.72363Z"
            transform="translate(-230.71108 -196.85292)"
            fill="#2f2e41"
          />
          <path
            d="M443.57086,346.81061c1.79017-5.36665,8.00837-7.43687,13.18105-7.59768,7.27136-.226,14.37052,2.35621,21.66459,1.20212,13.23169-2.09356,21.49166-14.84562,24.06616-27.05337,1.71715-8.14235,1.565-16.48929,1.3711-24.76321a1.65681,1.65681,0,0,0-2.70747-1.34272,26.49,26.49,0,0,0-10.70567,15.21048l3.16812.6553,1.66626-14.45119a1.653,1.653,0,0,0-1.09227-1.66176c-4.96317-1.7287-9.10075,2.17251-11.80128,5.86327-1.39853,1.91135-2.74038,3.99383-4.81852,5.23828a11.92114,11.92114,0,0,1-7.091,1.37328c-5.05618-.36551-9.84987-2.27608-14.803-3.22195a53.93221,53.93221,0,0,0-13.80183-.76734,58.03033,58.03033,0,0,0-25.82971,8.14935c-7.83772,4.72253-15.01313,11.47187-19.17288,19.7123-2.375,4.70483-3.66444,10.12022-2.35977,15.33526a15.5264,15.5264,0,0,0,8.82225,10.83069c1.94174.81291,2.998-2.2749,1.06939-3.08232-3.67373-1.538-6.005-5.1442-6.821-8.9415-.93261-4.33984.20925-8.83012,2.19762-12.71689,3.8722-7.56922,10.50017-13.86375,17.72467-18.2197a55.74589,55.74589,0,0,1,24.18981-7.80683,51.1496,51.1496,0,0,1,12.53762.54594c4.64544.77415,9.08931,2.43677,13.74509,3.17083,5.10944.80558,10.41154.097,14.06819-3.87894,2.68951-2.92437,6.01273-10.26463,11.075-8.50141l-1.09227-1.66176-1.66625,14.45118c-.20849,1.80814,2.70092,2.46194,3.16812.6553A23.79663,23.79663,0,0,1,503.30731,289.7l-2.70747-1.34272c.32148,13.71907.60932,28.88172-8.53495,40.12348-3.92287,4.82267-9.44351,8.35083-15.71751,8.913-7.06771.63335-14.00617-1.92522-21.08313-1.33433-6.11954.511-12.70347,3.46952-14.77571,9.68176-.66526,1.99436,2.41737,3.0628,3.08232,1.06938Z"
            transform="translate(-230.71108 -196.85292)"
            fill="#2f2e41"
          />
          <path
            d="M471.44378,395.56465c-.0084.1564-.01942.31331-.03564.47058a10.08992,10.08992,0,0,1-3.6708,6.8501l-11.5063,9.42306a10.16667,10.16667,0,0,1-14.289-1.42265l-28.88961-35.27619a10.16836,10.16836,0,0,1,1.42329-14.28895l11.50627-9.42241a10.1502,10.1502,0,0,1,14.2864,1.42251l28.8896,35.27619A10.08293,10.08293,0,0,1,471.44378,395.56465Z"
            transform="translate(-230.71108 -196.85292)"
            fill="#2f2e41"
          />
          <circle cx="204.0662" cy="177.38869" r="3.60527" fill="#fff" />
          <path
            d="M459.67624,378.644l-.00286.02322a6.26538,6.26538,0,0,1,4.917,6.88128L452.27249,486.46813a12.74791,12.74791,0,0,1-25.40055-1.71342,12.95474,12.95474,0,0,1,.09434-1.37521l12.318-100.91966a6.25885,6.25885,0,0,1,6.97071-5.45436Z"
            transform="translate(-230.71108 -196.85292)"
            fill="#3b82f6"
          />
          <circle cx="639.38101" cy="72.99986" r="46.19684" fill="#e4e4e4" />
          <path
            d="M875.493,289.24543c-2.99455-.08315-6.72144-.18709-9.5926-2.28446a7.36675,7.36675,0,0,1-2.89869-5.50082,4.95559,4.95559,0,0,1,1.68514-4.07,6.39516,6.39516,0,0,1,6.04927-.87089l-2.445-17.86783,1.79484-.24592,2.87436,21.00592-1.49883-.68777c-1.73766-.797-4.123-1.2026-5.6052.05a3.1841,3.1841,0,0,0-1.04415,2.62281,5.568,5.568,0,0,0,2.157,4.1014c2.23437,1.63207,5.205,1.8426,8.57434,1.93681Z"
            transform="translate(-230.71108 -196.85292)"
            fill="#2f2e41"
          />
          <rect
            x="618.9466"
            y="63.33947"
            width="9.75714"
            height="1.81164"
            fill="#2f2e41"
          />
          <rect
            x="649.74449"
            y="63.33947"
            width="9.75714"
            height="1.81164"
            fill="#2f2e41"
          />
          <path
            d="M870.09215,342.85292a73,73,0,1,1,73-73A73.08254,73.08254,0,0,1,870.09215,342.85292Zm0-144a71,71,0,1,0,71,71A71.08041,71.08041,0,0,0,870.09215,198.85292Z"
            transform="translate(-230.71108 -196.85292)"
            fill="#3f3d56"
          />
          <circle cx="575.39603" cy="251.7334" r="36.81818" fill="#e4e4e4" />
          <circle cx="701.75967" cy="251.7334" r="36.81818" fill="#cacaca" />
          <path
            d="M823.992,455.93886a4.66953,4.66953,0,0,1-4.85352-4.42627c-.00756-.09278-.01367-.18555-.01855-.27881H793.0941c-.00488.09326-.011.186-.01855.27881a4.67534,4.67534,0,0,1-5.06983,4.42187,4.93639,4.93639,0,0,1-4.89868-5.00732v-.19336a9.51081,9.51081,0,0,1,9.5-9.5h27a9.51081,9.51081,0,0,1,9.5,9.5v.19336a4.93639,4.93639,0,0,1-4.89868,5.00732C824.13658,455.93739,824.06432,455.93886,823.992,455.93886Z"
            transform="translate(-230.71108 -196.85292)"
            fill="#fff"
          />
          <path
            d="M940.93321,468.97938a9.62146,9.62146,0,0,1-1.83789-.17822,9.43833,9.43833,0,0,1-6.06079-4.0166l-15.08545-22.39307a9.51078,9.51078,0,0,1,2.57129-13.18652l.16064-.1084a4.93841,4.93841,0,0,1,6.88916,1.26563,4.69034,4.69034,0,0,1-.83447,6.67529q-.10876.08716-.2207.1709l14.541,21.585q.11976-.07177.24122-.14014a4.69166,4.69166,0,0,1,6.5,1.73389,4.936,4.936,0,0,1-1.41553,6.86035l-.16113.1084A9.43147,9.43147,0,0,1,940.93321,468.97938Z"
            transform="translate(-230.71108 -196.85292)"
            fill="#fff"
          />
          <path
            d="M689.19578,703.14708h-457.294a1.19069,1.19069,0,0,1,0-2.38137h457.294a1.19069,1.19069,0,0,1,0,2.38137Z"
            transform="translate(-230.71108 -196.85292)"
            fill="#3f3d56"
          />
        </svg>
      </div>)}
      {speakers === "user" && (<div className={style.animationRight}>
        <svg
          data-name="Layer 1"
          width="912.67004"
          height="469.17028"
          viewBox="0 0 912.67004 469.17028"
        >
          <path
            d="M807.07315,505.27169a2.80741,2.80741,0,0,1-2.03464-4.86593l.19236-.76476q-.038-.09188-.07643-.18358a7.5391,7.5391,0,0,0-13.90674.05167c-2.27452,5.4781-5.17037,10.96553-5.8834,16.75771a22.30361,22.30361,0,0,0,.39152,7.67061,89.41959,89.41959,0,0,1-8.13413-37.13874,86.30943,86.30943,0,0,1,.53535-9.6283q.4435-3.93126,1.23056-7.80653a90.45541,90.45541,0,0,1,17.93812-38.3373,24.07278,24.07278,0,0,0,10.0118-10.38735,18.36254,18.36254,0,0,0,1.67-5.0179c-.48739.06393-1.83779-7.3591-1.47018-7.81452-.67924-1.03072-1.895-1.54307-2.6368-2.54886-3.68944-5.0021-8.77254-4.12871-11.42613,2.66876-5.66869,2.861-5.72356,7.60577-2.24528,12.16916,2.2129,2.90325,2.517,6.83168,4.45862,9.93984-.1998.25572-.40755.50344-.60729.75916a91.03882,91.03882,0,0,0-9.50223,15.05379,37.84594,37.84594,0,0,0-2.25945-17.57871c-2.16269-5.21724-6.21632-9.61122-9.786-14.12153-4.28781-5.41757-13.08034-3.05323-13.83576,3.81439q-.01095.09974-.02141.19942.79533.44865,1.55706.95246a3.808,3.808,0,0,1-1.53532,6.92993l-.07766.012a37.89,37.89,0,0,0,.99877,5.66516c-4.5795,17.71008,5.3073,24.16046,19.42431,24.45023.31164.15978.61532.31957.92695.47144a92.9244,92.9244,0,0,0-5.00193,23.53931,88.1355,88.1355,0,0,0,.06393,14.23066l-.024-.16778a23.28924,23.28924,0,0,0-7.95037-13.44764c-6.11821-5.02589-14.76211-6.87666-21.36258-10.9165a4.37072,4.37072,0,0,0-6.69422,4.252q.01327.0882.027.17642a25.57809,25.57809,0,0,1,2.86848,1.38226q.79533.44877,1.55707.95246a3.8081,3.8081,0,0,1-1.53534,6.93l-.07771.01193c-.05591.008-.10388.016-.15973.02405a37.92279,37.92279,0,0,0,6.97545,10.92264c2.86344,15.46022,15.162,16.927,28.31754,12.42488h.008a92.89674,92.89674,0,0,0,6.24044,18.21781h22.2928c.08-.24769.15184-.5034.22378-.75113a25.329,25.329,0,0,1-6.16855-.36745c1.654-2.02957,3.308-4.07513,4.962-6.10463a1.38568,1.38568,0,0,0,.10388-.11986c.839-1.03867,1.68594-2.06946,2.52491-3.10817l.00045-.00126a37.10156,37.10156,0,0,0-1.08712-9.45126Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#f2f2f2"
          />
          <path
            d="M873.837,563.03888h-173.748a44.626,44.626,0,0,0-44.626,44.626v74.374h14V640.99945a44.626,44.626,0,0,1,44.626-44.626H859.837a44.626,44.626,0,0,1,44.626,44.626v41.03943h14v-74.374A44.626,44.626,0,0,0,873.837,563.03888Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#f2f2f2"
          />
          <ellipse
            cx="644.63817"
            cy="360.29683"
            rx="45.5"
            ry="6.5"
            fill="#e6e6e6"
          />
          <path
            d="M822.35966,577.1687H761.75538c-14.9607-14.33791-25.65759-28.156-17.09352-39.62591a12.43164,12.43164,0,0,1,12.43163-12.43164h69.928a12.43166,12.43166,0,0,1,12.43166,12.43164C842.71381,550.61217,836.88856,563.82278,822.35966,577.1687Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#f2f2f2"
          />
          <path
            d="M621.42012,362.97265c-72.3078-41.02032-44.64124-146.64965-124.07135-113-103.14221-24.56244-44.51508,78.03345-136.07135,113a31.92861,31.92861,0,0,0-31.92865,31.92859v.00006a31.92868,31.92868,0,0,0,33.0509,31.90894l11.9491-.42029v100.5827h234V426.39l11.9491.42029a31.92868,31.92868,0,0,0,33.0509-31.90894v-.00006A31.92861,31.92861,0,0,0,621.42012,362.97265Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#e6e6e6"
          />
          <path
            d="M599.09682,573.97265H380.60072a9.252,9.252,0,0,0-9.252,9.252v13.496a9.252,9.252,0,0,0,9.252,9.252h16.748v78h12v-78h156v78h12v-78h21.74805a9.252,9.252,0,0,0,9.25195-9.252v-13.496A9.252,9.252,0,0,0,599.09682,573.97265Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#e6e6e6"
          />
          <path
            d="M644.09682,551.97265h-6.69855a21.88983,21.88983,0,0,0,2.9505-11V412.97259a22,22,0,0,0-44,0V518.76715c-164.694-23.13257-57.36475-22.89874-206,.73627V412.97259a22,22,0,0,0-44,0V540.97265a21.88983,21.88983,0,0,0,2.9505,11H335.60072a9.252,9.252,0,0,0-9.252,9.252v13.496a9.252,9.252,0,0,0,9.252,9.252h308.4961a9.252,9.252,0,0,0,9.25195-9.252v-13.496A9.252,9.252,0,0,0,644.09682,551.97265Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#f2f2f2"
          />
          <path
            d="M333.3971,421.24777a14.98107,14.98107,0,0,0,16.23724-13.15169,14.37252,14.37252,0,0,0,.047-2.37545l91.61086-45.325-22.25538-26.59386-85.95815,58.61375a14.93954,14.93954,0,0,0-12.74872,13.04331,14.29707,14.29707,0,0,0,12.67622,15.752Q333.20136,421.232,333.3971,421.24777Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#ffb6b6"
          />
          <path
            d="M534.70272,338.99368s8.89657-17.65217-18.88207-24.05753-79.06455,15.16358-81.67413,17.62727.78019-.88272-7.47289-2.16582c-3.96269-.61608-11.873-7.32066-13.49745-1.67893s-1.17528,12.4171-5.92857,6.9325,13.97677,46.89339,13.97677,46.89339,2.4178-.38825,10.98569-4.931c4.81222-2.55147,4.863-13.14547,8.08261-10.18191s31.84534,2.46015,33.45419,2.06955,8.82168-13.67067,8.82168-13.67067Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#2f2e41"
          />
          <polygon
            points="242.511 452.241 227.26 449.061 232.263 388.722 254.773 393.414 242.511 452.241"
            fill="#ffb6b6"
          />
          <path
            d="M383.057,683.50529l-46.90018-9.77506.12358-.59307a18.64816,18.64816,0,0,1,22.059-14.45069l.00113.00023,9.92131-4.7141,14.62952,9.83116,4.09411.85324Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#2f2e41"
          />
          <polygon
            points="505.105 382.304 520.285 378.798 513.985 318.58 491.582 323.754 505.105 382.304"
            fill="#ffb6b6"
          />
          <path
            d="M651.55235,613.50529l46.67925-10.78084-.1363-.59027a18.64817,18.64817,0,0,0-22.36447-13.97324l-.00113.00026-10.02034-4.49977-14.41483,10.14332-4.07483.941Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#2f2e41"
          />
          <path
            d="M469.34877,458.97265l-2.61762,29.61649s-85.01825-27.30376-86.05279,36.92233c-.32959,20.46118-9.32959,99.46118-9.32959,99.46118l26,4s14-21,14-28,14-58,14-58l72.96671-7.17657c77.03329-4.82343,101.03329-6.82343,118.03329-61.82343,0,0,10.36446,73.58672,16.18223,79.29336s10.12447.03352,2.97112,7.37008-12.15335,4.33656-7.15335,7.33656,35-2,35-2c6.70007.75141-1.89178-106.47375-24.34515-138.1181-20.03577-28.23712-89.16531,60.49606-89.16531,60.49606Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#2f2e41"
          />
          <path
            d="M559.43323,332.99068s25.987-2.94966,31.52217,9.50449,19.48466,38.38666,19.48466,38.38666-7.1536,3.04727.1518-4.86965c3.27386-3.5479-2.76759-1.38379,1.38379-2.76758s5.53518,0,5.53518,0l13.83794,23.52449s-1.11317,5.36084-8.30276,5.53518,4.15138-6.919-5.53518,2.76759c-5.00155,5.00155-23.16206,11.90079-23.16206,11.90079L547.927,374.31079Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#2f2e41"
          />
          <path
            d="M477.4843,320.35446l26.26523-6.80611,12.2604-16.90992,29.11683,3.57942,6.1981,23.06532,20.72881,12.03223s-11.45708,121.181-8.73182,127.83489-3.88787,12.22041-12.23313,20.79782,6.934-.99326,8.87052,8.34505,16.05283,19.221,0,19.12293-104.3523,4.35929-101.58472-6.71107-5.8421-14.10032-1.66893-21.04108,6.9818-3.06215,5.57749-13.30422-.02052-17.161-.02052-22.69621,4.63653-55.8341,4.63653-55.8341Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#3b82f6"
          />
          <path
            d="M571.84563,511.624c5.00933,8.93926-23.20625,11.5685-53.77421,10.36461a20.27308,20.27308,0,0,0-2.89217-6.3378c-3.37646-4.8986.70575-38.04049-4.22056-41.38924,2.22789,5.39674-6.78062,41.26474-8.66256,46.78607-27.64818-2.21412-52.84709-7.2373-52.54262-13.21522.083-1.74359,5.85343-34.95465,8.64872-37.47316,2.78144-2.51852-.02771-50.06566,0-60.26421.01385-10.21241,15.194-85.28323,15.194-88.05082s35.97864-16.60553,35.97864-16.60553l15.22173,87.179,23.137-81.97594a48.9234,48.9234,0,0,0,7.79077,8.34423c4.63576,3.86076,23.0402,19.66375,23.0402,19.66375L563.00317,455.27586s7.45867,17.6019,7.07116,24.59a49.01375,49.01375,0,0,1-3.22418,16.20425C564.60841,502.64318,564.84364,499.11444,571.84563,511.624Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#2f2e41"
          />
          <path
            d="M596.603,270.64064a14.98108,14.98108,0,0,1,1.24609,20.85815,14.37223,14.37223,0,0,1-1.72177,1.63721l28.34632,98.20077-34.64457,1.513L575.10548,289.85661a14.93953,14.93953,0,0,1,1.02737-18.20995,14.29706,14.29706,0,0,1,20.17922-1.26973Q596.45935,270.50679,596.603,270.64064Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#ffb6b6"
          />
          <path
            d="M584.37272,384.47093c1.10612-.88119,35.58369-12.07483,35.58369-12.07483s14.64293,21.785,5.794,28.83452-28.17825,8.88743-28.17825,8.88743-8.1218-4.56952-7.93076-9.955S584.37272,384.47093,584.37272,384.47093Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#2f2e41"
          />
          <path
            d="M563.03918,283.53091l3.74791-27.60027c.5197-3.82715,3.1343-6.34025,5.82818-5.60192L579.315,252.165c2.69388.73833,4.46281,4.45286,3.94312,8.28l-3.74791,27.60026c-.5197,3.82715-3.1343,6.34025-5.82818,5.60193l-6.69978-1.83626C564.28842,291.07258,562.51948,287.35806,563.03918,283.53091Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#3f3d56"
          />
          <path
            d="M564.8963,281.92793l3.81965-25.24736c.52965-3.50089,2.43567-5.72295,4.24869-4.95316l4.50906,1.91449c1.813.76979,2.85719,4.24446,2.32754,7.74535l-3.81965,25.24736c-.52965,3.50089-2.43567,5.72294-4.24869,4.95316l-4.50906-1.9145C565.41082,288.90349,564.36666,285.42882,564.8963,281.92793Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#3b82f6"
          />
          <path
            d="M493.6339,255.70388c2.6049,21.01693,17.168,38.3457,38.34569,38.3457a38.34569,38.34569,0,0,0,38.3457-38.3457c0-21.17774-17.25873-36.38772-38.3457-38.3457C509.605,215.28064,490.2895,228.72077,493.6339,255.70388Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#2f2e41"
          />
          <circle cx="392.89352" cy="47.08117" r="34.00334" fill="#ffb6b6" />
          <path
            d="M501.00807,266.02772c1.0766,7.38894,7.37417,17.698,5.89934,17.698s-11.96089-30.46023-1.47484-32.44636c7.60606-1.44063,9.3062-.177,16.41492-3.25942l-1.00288.94392c4.70473,3.42162,11.253,1.31262,16.62133-.91439,5.38318-2.21226,11.91668-4.32126,16.63617-.91439,2.96443,2.13852,4.218,5.85505,6.06155,9.01121,1.84354,3.17093,5.25041,6.1648,8.76052,5.19145,2.817-.78171,4.43927-3.93787,4.42451-6.858s-3.81725-5.6981-2.53668-8.31809c3.795-7.76417.38221-13.05634-7.89042-16.70981q-4.51295-.68579-9.026-1.40111a25.60133,25.60133,0,0,1,5.66341-5.69284c-1.12089-2.28606-2.404-4.5868-4.572-5.85514-2.404-1.43054-5.38309-1.32738-8.17055-1.17985q-9.33564.48663-18.6567.97335c-4.60147.236-9.36516.51625-13.47992,2.62525-5.13248,2.63992-8.49506,7.78708-10.94333,13.02282C498.25013,243.71347,499.12024,253.182,501.00807,266.02772Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#2f2e41"
          />
          <path
            d="M143.32477,683.22233a1.18647,1.18647,0,0,0,1.19007,1.19h910.29a1.19,1.19,0,1,0,0-2.38h-910.29A1.1865,1.1865,0,0,0,143.32477,683.22233Z"
            transform="translate(-143.32477 -215.24205)"
            fill="#ccc"
          />
        </svg>
      </div>)
}    </section>
  );
}
