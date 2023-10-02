import React from "react";
import Camera from "../../assets/images/canon1.png"
import SmartTv from "../../assets/images/smart-tv.png"

const HomeSection3 = () => {
  return (
    
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="col-12">
                <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                  <div className="d-flex  align-items-center">
                    <div>
                      <h6>Cameras</h6>
                      <p>10</p>
                    </div>
                    <img src={Camera} alt="camera" />
                  </div>
                  <div className="d-flex  align-items-center">
                    <div>
                      <h6>Cameras</h6>
                      <p>10</p>
                    </div>
                    <img src={Camera} alt="camera" />
                  </div>
                  <div className="d-flex  align-items-center">
                    <div>
                      <h6>Smart TV</h6>
                      <p>10 items</p>
                    </div>
                    <img src={SmartTv} alt="camera" />
                  </div>
                  <div className="d-flex  align-items-center">
                    <div>
                      <h6>Cameras</h6>
                      <p>10 items</p>
                    </div>
                    <img src={Camera} alt="camera" />
                  </div>
                  <div className="d-flex  align-items-center">
                    <div>
                      <h6>Cameras</h6>
                      <p>10</p>
                    </div>
                    <img src={Camera} alt="camera" />
                  </div>
                  <div className="d-flex  align-items-center">
                    <div>
                      <h6>Cameras</h6>
                      <p>10</p>
                    </div>
                    <img src={Camera} alt="camera" />
                  </div>
                  <div className="d-flex  align-items-center">
                    <div>
                      <h6>Smart TV</h6>
                      <p>10</p>
                    </div>
                    <img src={SmartTv} alt="camera" />
                  </div>
                  <div className="d-flex  align-items-center">
                    <div>
                      <h6>Cameras</h6>
                      <p>10</p>
                    </div>
                    <img src={Camera} alt="camera" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default HomeSection3;
