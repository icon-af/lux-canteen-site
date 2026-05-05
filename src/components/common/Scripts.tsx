"use client";

import Script from "next/script";

export default function Scripts() {
  return (
    <>
      {/* Core jQuery and Bootstrap */}
      <Script src="/plugins/jquery-1.12.4.min.js" strategy="beforeInteractive" />
      <Script src="/plugins/bootstrap4/js/bootstrap.min.js" strategy="afterInteractive" />
      
      {/* Carousel and Slider plugins */}
      <Script src="/plugins/owl-carousel/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/plugins/slick/slick/slick.min.js" strategy="afterInteractive" />
      <Script src="/plugins/slick-animation.min.js" strategy="afterInteractive" />
      
      {/* Layout plugins */}
      <Script src="/plugins/imagesloaded.pkgd.js" strategy="afterInteractive" />
      <Script src="/plugins/masonry.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/plugins/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/plugins/jquery.matchHeight-min.js" strategy="afterInteractive" />
      <Script src="/plugins/sticky-sidebar/dist/sticky-sidebar.min.js" strategy="afterInteractive" />
      
      {/* UI Enhancement plugins */}
      <Script src="/plugins/jquery-bar-rating/dist/jquery.barrating.min.js" strategy="afterInteractive" />
      <Script src="/plugins/lightGallery-master/dist/js/lightgallery-all.min.js" strategy="afterInteractive" />
      <Script src="/plugins/jquery-ui/jquery-ui.min.js" strategy="afterInteractive" />
      <Script src="/plugins/jquery.slimscroll.min.js" strategy="afterInteractive" />
      <Script src="/plugins/select2/dist/js/select2.full.min.js" strategy="afterInteractive" />
      
      {/* Maps */}
      <Script src="/plugins/gmap3.min.js" strategy="afterInteractive" />
      <Script 
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDxflHHc5FlDVI-J71pO7hM1QJNW1dRp4U&region=GB" 
        strategy="afterInteractive" 
      />
      
      {/* Main theme JavaScript */}
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}