define(["stackmob"],function(e){var t=window.location.href,n=t.search("http://hollagram_html5_requirejs.stackmob339.stackmobapp.com");return n===0?(e.init({publicKey:"e3cbec6f-4ecc-4b2f-88e2-e8f4d4f13731",apiVersion:1}),console.log("init production")):(e.init({publicKey:"454b65bb-ad94-4699-9f3f-5e3b90b13370",apiVersion:0}),console.log("init dev")),e});