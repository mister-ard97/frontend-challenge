import React from 'react';
import iconCalendar from 'assets/images/icon/ic_calendar.png';
import iconEngine from 'assets/images/icon/ic_engine.png';

const TypeCarComponent = ({ vehicleData }) => {
  const vehicleList = vehicleData.slice(0, 4);
  return (
    <div className="row mx-0">
      <div className="col-12 px-0">
        <div className="main-content">
          <div className="d-flex flex-column flex-sm-row">
            <div className="main-item">
              <img
                src={vehicleList[0].thumbnailPicture}
                alt="img-car"
                title="img-car"
              />
              <p className="mb-0">
                {vehicleList[0].manufacturer}{' '}
                <span>{vehicleList[0].model}</span>
              </p>
              <div className="box-image mb-0">
                <img src={iconCalendar} alt="ic_cal" title="ic_cal" />
                <span className="ml-2">{vehicleList[0].yearProduction}</span>
              </div>
              <div className="box-image mb-0">
                <img src={iconEngine} alt="ic_engine" title="ic_engine" />
                <span className="ml-2">{vehicleList[0].engine}</span>
              </div>
              <p className="price">${vehicleList[0].price.toLocaleString()}</p>
            </div>

            <div className="d-flex flex-column secondary-box">
              {vehicleList.map((vehicleItem, id) => {
                if (id !== 0) {
                  const {
                    manufacturer,
                    thumbnailPicture,
                    model,
                    yearProduction,
                    engine,
                    price,
                    productId,
                  } = vehicleItem;
                  return (
                    <div key={productId} className="secondary-item">
                      <img
                        src={thumbnailPicture}
                        alt={`${manufacturer}${id}`}
                        title={`${manufacturer}${id}`}
                      />
                      <div className="item-box">
                        <p className="mb-0">
                          {manufacturer} <span>{model}</span>
                        </p>
                        <div className="box-image mb-0">
                          <img src={iconCalendar} alt="ic_cal" title="ic_cal" />
                          <span className="ml-2">{yearProduction}</span>
                        </div>
                        <div className="box-image mb-0">
                          <img src={iconEngine} alt="ic_cal" title="ic_cal" />
                          <span className="ml-2">{engine}</span>
                        </div>
                        <p className="price">${price.toLocaleString()}</p>
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeCarComponent;
