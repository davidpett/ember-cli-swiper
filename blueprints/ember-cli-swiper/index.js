module.exports = {
  description: 'add swiper bower package',

  normalizeEntityName() {
  },

  afterInstall() {
    return this.addBowerPackageToProject('swiper', 'davidpett/Swiper#master');
  }

};
