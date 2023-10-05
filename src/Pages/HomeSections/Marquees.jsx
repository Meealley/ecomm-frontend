import React from "react";
import Marquee from "react-fast-marquee";
import AppleLogo from "../../assets/images/apple-logo.png"
import Samsung from '../../assets/images/samsung.webp'
import Hp from '../../assets/images/hp.webp'
import Huawei from '../../assets/images/Huawei.webp'
import Intel from '../../assets/images/intel.webp'
import Vivo from '../../assets/images/vivo.webp'
import Lenovo from '../../assets/images/lenovo.webp'
import Drugfield from '../../assets/images/drugfield.webp'

const Marquees = () => {
  return (
    <section className="marque-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={AppleLogo} className="marq-img" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Samsung} className="marq-img" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Hp} className="marq-img" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Huawei} className="marq-img" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Intel} className="marq-img" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Vivo} className="marq-img" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Drugfield} className="marq-img" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Lenovo} className="marq-img" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquees;
