import MobileDetect from './extensions/mobileDetect';


function getLazyLoadConfig(userAgent){
  const mobileDetect = new MobileDetect(userAgent),
    config = {
      lazyLoadOpts: {
        offset: 30,
        height: 100
      }
    };

  console.log('mobileDetect: mobile', mobileDetect.mobile());
  console.log('mobileDetect: isMobile', mobileDetect.isMobile());
  console.log('mobileDetect: isPhone', mobileDetect.isPhone());
  console.log('mobileDetect: isTablet', mobileDetect.isTablet());

  if(!mobileDetect.isMobile())
    return config;

  if(mobileDetect.isPhone()){
    config.lazyLoadOpts.offset = 300;
    config.lazyLoadOpts.height = 500;
  }
  else {
    config.lazyLoadOpts.offset = 150;
    config.lazyLoadOpts.height = 250;
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
