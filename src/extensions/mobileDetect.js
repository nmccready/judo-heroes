import MobileDetect from 'mobile-detect';

MobileDetect.prototype.isMobile = function isMobile(){
  return !!this.mobile();
}

MobileDetect.prototype.isPhone = function isPhone(){
  return !!this.phone();
}

MobileDetect.prototype.isTablet = function isTablet(){
  return !!this.tablet();
}

module.exports = MobileDetect;
