//Deps.autorun(function () {
//  var current = Router.current();
//
//  Deps.afterFlush(function () {
//    $('#wrapper').scrollTop(0);
//    $(window).scrollTop(0);
//  });
//});
Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/',  {
    name: 'home',
    template: 'index',
    onAfterAction: function () {
            SEO.set({
                title: "Welcome to OneAston",
                meta: {
                    'description': "Our mission is to provide value added function and services around leading wealth management software platforms and in-house solutions. We specialise in the Temenos Wealthsuite including T24 and Triple'A Plus solutions",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "Welcom to OneAston",
                    'description': "Our mission is to provide value added function and services around leading wealth management software platforms and in-house solutions. We specialise in the Temenos Wealthsuite including T24 and Triple'A Plus solutions",
                    'images':"/ip-News.jpg"
                }
            });
        }
});
Router.route('/private_banking', {
    layoutTemplate: 'layout2',
    template: 'private_banking',
      onAfterAction: function () {
            SEO.set({
                title: "Private Banking",
                meta: {
                    'description': "Our mission is to provide value added function and services around leading wealth management software platforms and in-house solutions. We specialise in the Temenos Wealthsuite including T24 and Triple'A Plus solutions",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "Private Banking",
                    'description': "Our mission is to provide value added function and services around leading wealth management software platforms and in-house solutions. We specialise in the Temenos Wealthsuite including T24 and Triple'A Plus solutions",
                    'images':"/ip-News.jpg"
                }
            });
        }
});
Router.route('/products', {
    layoutTemplate: 'layout2',
    template: 'products',
     onAfterAction: function () {
            SEO.set({
                title: "OneAston Products",
                meta: {
                    'description': "Explore Our Products Extending the capability of your Wealth Platform",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "OneAston Products",
                    'description': "Explore Our Products Extending the capability of your Wealth Platform",
                    'images':"/ip-News.jpg"
                }
            });
        }
});
Router.route('products/one_view', {
    layoutTemplate: 'layout2',
    template: 'one_view',
    name:'one_view',
    onAfterAction: function () {
            SEO.set({
                title: "OneView OneAston Product",
                meta: {
                    'description': "Comprehensive collateral management, monitoring, simulation and reporting to achieve effective credit exposure management.",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "OneView OneAston Product",
                    'description': "Comprehensive collateral management, monitoring, simulation and reporting to achieve effective credit exposure management.",
                    'images':"/ip-News.jpg"
                }
            });
        }
});
Router.route('products/one_ledger', {
    layoutTemplate: 'layout2',
    template: 'one_ledger',
    name:'one_ledger',
    onAfterAction: function () {
            SEO.set({
                title: "OneLedger OneAston Product",
                meta: {
                    'description': "Generating general ledger postings from transactions in front office systems for integration with the core banking platform.",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "OneLedger OneAston Product",
                    'description': "Generating general ledger postings from transactions in front office systems for integration with the core banking platform.",
                    'images':"/ip-News.jpg"
                }
            });
        }
});
Router.route('products/one_event', {
    layoutTemplate: 'layout',
    template: 'one_event',
    name:'one_event',
    onAfterAction: function () {
            SEO.set({
                title: "OneEvent OneAston Product",
                meta: {
                    'description': "Managing the front and back office workflows for the processing of both elective and mandatory corporate actions",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "OneEvent OneAston Product",
                    'description': "Managing the front and back office workflows for the processing of both elective and mandatory corporate actions",
                    'images':"/ip-News.jpg"
                }
            });
        }
});
Router.route('products/one_notify', {
    layoutTemplate: 'layout2',
    template: 'one_notify',
    name:'one_notify',
    onAfterAction: function () {
            SEO.set({
                title: "OneNotify OneAston Product",
                meta: {
                    'description': "Enhancing client and internal communication by creating notification messages from events in the core banking platform and sending these by SMS, WeChat or Email.",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "OneNotify OneAston Product",
                    'description': "Enhancing client and internal communication by creating notification messages from events in the core banking platform and sending these by SMS, WeChat or Email.",
                    'images':"/ip-News.jpg"
                }
            });
        }
});
Router.route('application_support', {
    layoutTemplate: 'layout2',
    template: 'application_support',
    name:'application_support',
     onAfterAction: function () {
            SEO.set({
                title: "Application Support",
                meta: {
                    'description': "Application Management Support Ensuring your business continuity through quality support services",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "Application Support",
                    'description': "Application Management Support Ensuring your business continuity through quality support services",
                    'images':"/ip-News.jpg"
                }
            });
        }
});
Router.route('wealth_managment', {
    layoutTemplate: 'layout2',
    template: 'wealth_managment',
    name:'wealth_managment',
     onAfterAction: function () {
            SEO.set({
                title: "Wealth Managment",
                meta: {
                    'description': "The Wealth Management Focus. Leveraging a solid understanding across The Wealth Management Industry.",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "Wealth Managment",
                    'description': "The Wealth Management Focus. Leveraging a solid understanding across The Wealth Management Industry.",
                    'images':"/ip-News.jpg"
                }
            });
        }
});
Router.route('superannuation', {
    layoutTemplate: 'layout2',
    template: 'superannuation',
    name:'superannuation',
     onAfterAction: function () {
            SEO.set({
                title: "Superannuation & Pensions",
                meta: {
                    'description': "implementing core platforms for supporting retirement wealth management.",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "Wealth Managment",
                    'description': "implementing core platforms for supporting retirement wealth management.",
                    'images':"/ip-News.jpg"
                }
            });
        }
});

Router.route('news/temenos_partner', {
    layoutTemplate: 'layout2',
    template: 'news1',
    name:'news1'
});
Router.route('news/bank_of_montreal', {
    layoutTemplate: 'layout2',
    template: 'news2',
    name:'news2'
});
Router.route('news/digital_channel', {
    layoutTemplate: 'layout2',
    template: 'news3',
    name:'news3'
});
Router.route('contact', {
    layoutTemplate: 'layout2',
    template: 'contact',
    name:'contact',
    onAfterAction: function () {
            SEO.set({
                title: "Contact OneAston",
                meta: {
                    'description': "OneAston in Action There is no substitute for Experience",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "Contact OneAston",
                    'description': "OneAston in Action There is no substitute for Experience",
                    'images':"/ip-News.jpg"
                }
            });
        }
});
Router.route('about', {
    layoutTemplate: 'layout2',
    template: 'about',
    name:'about',
    onAfterAction: function () {
            SEO.set({
                title: "About OneAston",
                meta: {
                    'description': "OneAston Misson",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "Contact OneAston",
                    'description': "OneAston in Action There is no substitute for Experience",
                    'images':"/ip-News.jpg"
                }
            });
        }
});
Router.route('careers', {
    layoutTemplate: 'layout2',
    template: 'careers',
    name:'careers',
    onAfterAction: function () {
            SEO.set({
                title: "Careers",
                meta: {
                    'description': "OneAston Careers",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "OneAston Careers",
                    'description': "OneAston in Action There is no substitute for Experience",
                    'images':"/ip-News.jpg"
                }
            });
        }
});
Router.route('case_studies', {
    layoutTemplate: 'layout2',
    template: 'case_studies',
    name:'case_studies',
    onAfterAction: function () {
            SEO.set({
                title: "Case Studies",
                meta: {
                    'description': "OneAston in Action There is no substitute for Experience",
                    'images':"/ip-News.jpg"
                },
                og: {
                    'title': "Case Studies",
                    'description': "OneAston in Action There is no substitute for Experience",
                    'images':"/ip-News.jpg"
                }
            });
        }
    
});
Router.route('press', {
    layoutTemplate: 'layout2',
    template: 'press',
    name:'press'
});
