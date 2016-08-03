
Router.configure({
  layoutTemplate: 'layout'

  //template: 'DefaultTemplate'

  // .
  // .
  // .
});
Router.route('/',  {
    name: 'home',
    template: 'index'
 // this.render('index');
});
Router.route('/private_banking', {
    layoutTemplate: 'layout2',
    template: 'private_banking'
});
Router.route('/products', {
    layoutTemplate: 'layout2',
    template: 'products'
});
Router.route('products/one_view', {
    layoutTemplate: 'layout2',
    template: 'one_view',
    name:'one_view'
});
Router.route('products/one_ledger', {
    layoutTemplate: 'layout2',
    template: 'one_ledger',
    name:'one_ledger'
});
Router.route('products/one_event', {
    layoutTemplate: 'layout',
    template: 'one_event',
    name:'one_event'
});
Router.route('products/one_notify', {
    layoutTemplate: 'layout2',
    template: 'one_notify',
    name:'one_notify'
});
Router.route('application_support', {
    layoutTemplate: 'layout2',
    template: 'application_support',
    name:'application_support'
});
Router.route('news/bank_of_montreal', {
    layoutTemplate: 'layout2',
    template: 'news1',
    name:'news1'
});
Router.route('news/oneAston_becomes', {
    layoutTemplate: 'layout2',
    template: 'news2',
    name:'news2'
});
Router.route('news/testing_services', {
    layoutTemplate: 'layout2',
    template: 'news3',
    name:'news3'
});
Router.route('contact', {
    layoutTemplate: 'layout2',
    template: 'contact',
    name:'contact'
});