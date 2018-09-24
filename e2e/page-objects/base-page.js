var BasePage = function(){    
/* Navigation Pane elements */
  this.hamburgerButton = () =>  $('.nb-menu');
  this.expandedNavPane = () => $('nb-sidebar.menu-sidebar.start.expanded');
  this.collapsedNavPane = () => $('nb-sidebar.compacted');
  this.ngxAdminLogo = () => $('div.logo');
};
module.exports = BasePage;
