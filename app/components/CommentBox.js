import React, { Component } from 'react';

window.fbAsyncInit = () => {
  FB.init({
    appId      : '521375034735921',
    xfbml      : true,
    version    : 'v2.6'
  });
};

(function(d, s, id) {
   let js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

let href;
(__DEV__) ? href='runow.herokuapp.com' : 'localhost:3000'

export default ({}) => {
  return (
    <div className="fb-comments" data-href="" data-numposts="10" data-order-by="reverse_time"></div>
  )
}
