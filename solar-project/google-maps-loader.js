let googleMapsPromise;

export const googleMapsLoader = {
  load() {
    if (!googleMapsPromise) {
      googleMapsPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCtaUmk_jYxmd-tHYC8UDCdc9JiaWMVcSw`; // แทนที่ด้วย API key ของคุณ
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (window.google && window.google.maps) {
            resolve();
          } else {
            reject(new Error('Google Maps failed to load'));
          }
        };
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
    return googleMapsPromise;
  }
};

