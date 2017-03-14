import MobileDetect from './extensions/mobileDetect';


function getLazyLoadConfig(userAgent){
  const mobileDetect = new MobileDetect(userAgent),
    config = {
      lazyLoadOpts: {
        offsetVertical: 30,
        lazyHeight: 100
      }
    };

  console.log('mobileDetect: mobile', mobileDetect.mobile());
  console.log('mobileDetect: isMobile', mobileDetect.isMobile());
  console.log('mobileDetect: isPhone', mobileDetect.isPhone());
  console.log('mobileDetect: isTablet', mobileDetect.isTablet());

  if(!mobileDetect.isMobile())
    return config;

  if(mobileDetect.isPhone()){
    config.lazyLoadOpts.offsetVertical = 300;
    config.lazyLoadOpts.lazyHeight = 500;
  }
  else {
    config.lazyLoadOpts.offsetVertical = 150;
    config.lazyLoadOpts.lazyHeight = 250;
  }

  return config;
}

function routeConfigFactory({userAgent, overrides = {}} = {}){
  return Object.assign({}, getLazyLoadConfig(userAgent), overrides)
}

function getRouteConfig(req){
  return routeConfigFactory({userAgent: req.headers['user-agent']});
}

export {
  routeConfigFactory,
  getRouteConfig
}
