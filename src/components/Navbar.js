import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo black">
        <div className="logo-img">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 5370 5370">
          <g id="circle" fill="#808080" stroke="none">
            <path d="M2380 5355 c-329 -40 -612 -125 -903 -272 -668 -337 -1159 -929 -1373 -1652 -117 -394 -136 -848 -54 -1272 75 -391 262 -797 518 -1129 90 -116 306 -335 427 -433 322 -260 748 -463 1137 -542 357 -72 724 -74 1080 -5 405 78 829 278 1163 547 121 98 337 317 427 433 482 624 668 1405 518 2181 -77 401 -275 825 -539 1154 -387 484 -972 840 -1570 955 -256 50 -594 64 -831 35z m515 -350 c206 -14 477 -81 690 -170 818 -343 1369 -1117 1424 -2003 74 -1178 -739 -2223 -1898 -2438 -262 -48 -590 -48 -852 0 -1050 195 -1831 1077 -1898 2144 -74 1178 739 2222 1898 2438 210 39 371 46 636 29z"/>
            </g>
            <g id="valknut" fill="#808080" stroke="none">
            <path d="M1952 4462 c2 -5 269 -459 593 -1010 l590 -1002 244 0 c217 0 242 2 237 16 -3 8 -262 453 -575 987 -312 535 -573 982 -580 995 -12 22 -13 22 -262 22 -138 0 -249 -4 -247 -8z"/>
            <path d="M2970 4461 c0 -6 265 -459 589 -1008 l589 -998 241 -3 c132 -1 241 -1 241 1 0 2 -136 235 -303 518 -166 283 -433 736 -592 1006 l-290 493 -237 0 c-142 0 -238 -4 -238 -9z"/>
            <path d="M1828 4263 c-47 -82 -150 -256 -229 -388 -139 -236 -409 -691 -706 -1194 l-151 -253 122 -204 c66 -112 123 -203 126 -204 3 0 72 114 155 253 82 138 222 374 311 522 339 569 662 1112 688 1156 l26 47 -122 205 c-68 114 -125 207 -128 207 -3 0 -44 -66 -92 -147z"/>
            <path d="M2831 4256 c-51 -85 -95 -163 -97 -173 -6 -22 234 -429 246 -417 4 5 51 80 104 167 l96 158 -122 202 c-67 111 -124 206 -128 210 -4 4 -49 -62 -99 -147z"/>
            <path d="M2297 3343 c-68 -115 -238 -399 -377 -633 -139 -234 -344 -578 -456 -765 l-203 -340 247 -3 c189 -2 249 1 257 10 7 7 82 132 167 278 86 146 287 487 447 759 160 272 290 497 289 501 -12 29 -235 400 -240 400 -4 0 -63 -93 -131 -207z"/>
            <path d="M1160 2203 c-68 -115 -125 -211 -127 -215 -2 -5 86 -8 196 -8 l200 0 124 208 c68 114 122 210 120 215 -2 4 -91 7 -198 7 l-193 0 -122 -207z"/>
            <path d="M2272 2383 c-25 -37 -221 -370 -228 -388 -5 -13 135 -15 1157 -15 l1164 1 120 201 c66 111 121 207 123 215 3 11 -192 13 -1157 13 l-1160 0 -19 -27z"/>
            <path d="M3450 1923 c1 -5 43 -78 93 -163 l93 -155 247 -3 c136 -1 247 0 247 4 0 3 -43 78 -97 165 l-96 159 -244 0 c-133 0 -243 -3 -243 -7z"/>
            <path d="M1286 1542 c-3 -5 50 -104 116 -220 l121 -212 1167 0 1167 0 125 213 c69 116 123 215 121 220 -6 10 -2811 9 -2817 -1z"/>
            </g>
          </svg>
        </div>
        <p>.netHeim</p>
      </div>
      <div className="menu-bar">
        <a href="#1"><i className="material-icons home grey-text"></i></a>
        <a href="#1"><i className="material-icons me grey-text"></i></a>
        <a href="#1"><i className="material-icons skills grey-text"></i></a>
        <a href="#1"><i className="material-icons work grey-text"></i></a>
        <a href="#1"><i className="material-icons contact grey-text"></i></a>
      </div>
      <ul className="social">
        <a href="www.twitter.com"><i className="fab fa-twitter grey-text"></i></a>
        <a href="www.facebook.com"><i className="fab fa-facebook-f grey-text"></i></a>
        <a href="www.telegram.com"><i className="fab fa-telegram-plane grey-text"></i></a>
        <a href="www.viber.com"><i className="fab fa-viber grey-text"></i></a>
        <a href="www.instagram.com"><i className="fab fa-instagram grey-text"></i></a>
        <a href="www.whatsapp.com"><i className="fab fa-whatsapp grey-text"></i></a>
      </ul>
    </nav>
  );
}
 
export default Navbar;