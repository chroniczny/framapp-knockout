'use strict';

var shouter = new ko.subscribable(); // defined globally 'post-box' to pas messages between different view models
var mvm = new MainViewModel();

ko.applyBindings(mvm);