var pixelId = '8569429083102717';

function cargarPixel() {
    // Verifica si el pixel ya está cargado
    if (!window.fbq) {
        // Crear el script para cargar el pixel
        const scriptPixel = document.createElement('script');
        scriptPixel.async = true;
        scriptPixel.src = "https://connect.facebook.net/en_US/fbevents.js";

        // Inicializar el pixel
        const pixelInit = document.createElement('script');
        pixelInit.innerHTML = `
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
        `;

        // Agregar scripts al <head>
        document.head.appendChild(scriptPixel);
        document.head.appendChild(pixelInit);

        // Inyectar el <noscript> para navegadores sin JS
        const noscript = document.createElement('noscript');
        noscript.innerHTML = `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" />`;
        document.body.appendChild(noscript);
    }
}


function verificarPixel() {
    // Verifica si la función fbq está definida
    if (typeof window.fbq !== 'undefined') {
        console.log("El Pixel de Meta ya está cargado.");
        return true; // El pixel ya está cargado
    } else {
        console.log("El Pixel de Meta NO está cargado.");
        return false; // El pixel no está cargado
    }
}

