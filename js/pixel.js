var pixelId = '8569429083102717';

function cargarPixel() {
    const pixelPuntana = `
        <!-- Meta Pixel Code -->
        <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"
        /></noscript>
        <!-- End Meta Pixel Code -->
    
        `;

    // Inyectar el contenido de pixelPuntana en el DOM
    const div = document.createElement('div');
    div.innerHTML = pixelPuntana;
    document.head.appendChild(div);

    // Ejecutar el código dentro del script manualmente
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    window.fbq = window.fbq || function() {
        (window.fbq.q = window.fbq.q || []).push(arguments);
    };
    fbq('init', pixelId);
    fbq('track', 'PageView');
}

