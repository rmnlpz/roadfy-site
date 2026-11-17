/* Idioma do site: o do navegador, com troca manual.
 * O português está no próprio HTML (e é o que aparece sem JavaScript).
 * En/es vivem aqui, por chave: data-i18n (texto), data-i18n-alt, data-i18n-aria.
 * Idioma não suportado cai em inglês. A escolha manual fica no localStorage. */
(function () {
  var D = {
 "en": {
  "nav_features": "Features",
  "nav_notes": "Three ratings",
  "nav_privacy": "Privacy",
  "nav_cta": "Get the app",
  "badge": "Made by riders",
  "h1": "Every ride becomes <span class=\"verde\">a map</span> worth telling.",
  "hero_lead": "Record the trail by GPS, tell it like it really is, and discover routes from other riders before you leave home.",
  "cta_test": "Join the Android test",
  "cta_how": "See how it works",
  "soon": "Coming soon to Google Play · Android",
  "stat1": "records even without signal",
  "stat2b": "3 ratings",
  "stat2": "difficulty, surface and scenery",
  "stat3": "around your home stay hidden",
  "stat4b": "0 ads",
  "stat4": "no ad tracking either",
  "rec_label": "Record",
  "rec_h2": "Switch on, ride, <span class=\"verde\">forget your phone.</span>",
  "rec_lead": "Trails are places with no coverage, and the system closes apps whenever it feels like it. In Roadfy, every GPS point is saved on the device the instant it arrives.",
  "rec_1": "Survives a dark screen, a low battery and the app being closed.",
  "rec_2": "No signal? Upload happens on its own later, once you're back online.",
  "rec_3": "Publish from the couch, days later. The ride is still yours.",
  "ride_label": "The ride",
  "ride_h2": "See <span class=\"verde\">where you've been.</span>",
  "ride_lead": "Finished? Roadfy reads your GPS and tells the story of the way: towns in order, state, highways and the altitude profile of the climb.",
  "ride_1": "Track over the satellite map, with photos from the way.",
  "ride_2": "Distance, time, climb and speed, all in the summary.",
  "ride_3": "State highways identified automatically.",
  "routes_label": "Routes",
  "routes_h2": "Discover the way <span class=\"verde\">before you leave home.</span>",
  "routes_lead": "Search by postal code, city, state or name. See the track on the map, the stops, what the bike needs and the rating from people who rode it.",
  "routes_1": "<b>Route map.</b> Every marker is a route. Tap it and the track shows up instantly.",
  "routes_2": "<b>Most ridden, best rated, newest.</b> Sort it however suits your weekend.",
  "routes_3": "<b>A route belongs to no one.</b> It outlives whoever added it, and its gallery is made of photos from the people who rode it.",
  "routes_4": "<b>Plan from your couch.</b> Mark the stops, and the path between them is recorded when you ride it.",
  "notes_label": "Honest ratings",
  "notes_h2": "Three ratings, <span class=\"verde\">not one.</span>",
  "notes_lead": "A trail can be hard, rough and beautiful all at once. A single star hides exactly what makes someone decide whether to go.",
  "n1_h": "Difficulty",
  "n1_p": "From 1 to 5, from Sunday cruise to hardcore. Filter by how far you're willing to go.",
  "n2_h": "Surface quality",
  "n2_p": "Dirt, sand, rock, mud, grass or asphalt. Know what's under your tyres before you get there.",
  "n3_h": "Scenery",
  "n3_p": "The nature score. Because sometimes the road is worth more than the destination.",
  "share_label": "Share",
  "share_h2": "Your ride, <span class=\"verde\">story-ready.</span>",
  "share_lead": "A card with the map, the track, the difficulty and the day's numbers. It looks great without you doing anything, and speed only shows if you want it to.",
  "share_1": "Average, top speed and moving time, with a switch to hide them.",
  "share_2": "Rider profile: the bike, the helmet, the kilometres and the badges.",
  "share_3": "Clubs to ride together: route, date, meeting point and their own chat.",
  "priv_h2": "Your address <span class=\"verde\">doesn't come along.</span>",
  "priv_lead": "The start and end of a recording are often your front door. When you publish a public ride, the app cuts the first and last 300 metres before uploading. That stretch never leaves your device, and not even we can see it.",
  "priv_1": "On by default, and you decide trail by trail.",
  "priv_2": "A private profile hides your rides, and following becomes a request.",
  "priv_3": "Delete your account and everything it holds, in the app or by email.",
  "svg_aria": "A ride track with the start and the end cut off",
  "svg_cut": "300 m cut",
  "gal_label": "Inside the app",
  "gal_h2": "Everything in <span class=\"verde\">one app.</span>",
  "gal_aria": "App screenshots",
  "final_h2": "Your next ride <span class=\"verde\">is ready to be recorded.</span>",
  "final_lead": "Roadfy is coming to Google Play. Want in early, as a tester? Send us an email.",
  "ic_alt": "Roadfy icon",
  "foot_aria": "Footer",
  "foot_priv": "Privacy Policy (in Portuguese)",
  "foot_del": "Delete your account (in Portuguese)",
  "a_mapa": "Roadfy route map in satellite view, with a route track drawn in green",
  "a_feed": "Roadfy feed with a photo of a motorcycle on a trail and the ride summary: 86.2 km",
  "a_gravar": "Recording screen with timer, distance, climb and the Pause and Finish buttons",
  "a_role": "Ride screen with the green track on the satellite map, photos and stats",
  "a_onde": "Where you've been screen: altitude chart, 4 towns, 1 state and 2 highways",
  "a_estrada": "Dirt road at sunset seen from a motorcycle's handlebars",
  "a_rotas": "Route catalogue with search, filters and the card for the Poção, Santa Maria, Jacu route",
  "a_planejar": "Plan route screen with name, description, city and stops",
  "a_story": "Share screen with the ride card for stories: map, track, 86.2 km and 3h06",
  "a_piloto": "Rider profile with the bike, the helmet and 504.1 km ridden",
  "g_feed": "Feed",
  "g_mapa": "Route map",
  "g_role": "Ride",
  "g_onde": "Where you've been",
  "g_rotas": "Route catalogue",
  "g_gravar": "Recording",
  "g_plan": "Plan a route",
  "g_share": "Share",
  "g_piloto": "Rider profile",
  "_title": "Roadfy — trail riding app: record, rate and discover routes",
  "_desc": "Record your ride by GPS, rate the road on three scores and discover routes from other riders. Roadfy is the trail app made by people who ride.",
  "mail_subject": "I want to test Roadfy"
 },
 "es": {
  "nav_features": "Funciones",
  "nav_notes": "Tres notas",
  "nav_privacy": "Privacidad",
  "nav_cta": "Quiero la app",
  "badge": "Hecho por quien pilota",
  "h1": "Cada ruta se convierte en <span class=\"verde\">un mapa</span> para contar.",
  "hero_lead": "Graba la ruta por GPS, cuenta cómo es el camino de verdad y descubre rutas de otros motociclistas antes de salir de casa.",
  "cta_test": "Quiero probar en Android",
  "cta_how": "Ver cómo funciona",
  "soon": "Próximamente en Google Play · Android",
  "stat1": "graba incluso sin señal",
  "stat2b": "3 notas",
  "stat2": "dificultad, firme y belleza",
  "stat3": "de tu casa quedan fuera",
  "stat4b": "0 anuncios",
  "stat4": "ni rastreo publicitario",
  "rec_label": "Grabar",
  "rec_h2": "Enciende, pilota, <span class=\"verde\">olvida el móvil.</span>",
  "rec_lead": "Las rutas de monte son lugares sin cobertura, y el sistema cierra aplicaciones cuando quiere. En Roadfy, cada punto del GPS se guarda en el dispositivo en el instante en que llega.",
  "rec_1": "Sobrevive a la pantalla apagada, a la batería baja y a que se cierre la app.",
  "rec_2": "¿Sin red? El envío ocurre solo después, cuando haya señal.",
  "rec_3": "Publícala desde el sofá, días después. La ruta sigue siendo tuya.",
  "ride_label": "La salida",
  "ride_h2": "Mira <span class=\"verde\">por dónde pasaste.</span>",
  "ride_lead": "¿Terminaste? Roadfy lee tu GPS y cuenta el camino: ciudades en orden, estado, carreteras y el perfil de altitud de la subida.",
  "ride_1": "Trazado sobre el mapa satelital, con fotos del camino.",
  "ride_2": "Distancia, tiempo, desnivel y velocidad, todo en el resumen.",
  "ride_3": "Carreteras estatales identificadas automáticamente.",
  "routes_label": "Rutas",
  "routes_h2": "Descubre el camino <span class=\"verde\">antes de salir de casa.</span>",
  "routes_lead": "Busca por código postal, ciudad, estado o nombre. Mira el trazado en el mapa, las paradas, qué moto se necesita y la nota de quien ya la recorrió.",
  "routes_1": "<b>Mapa de rutas.</b> Cada marcador es una ruta. Tócalo y el trazado aparece al instante.",
  "routes_2": "<b>Más recorridas, mejor valoradas, recientes.</b> Ordena como mejor te venga el fin de semana.",
  "routes_3": "<b>Una ruta no es de nadie.</b> Sobrevive a quien la registró, y su galería son las fotos de quien la hizo.",
  "routes_4": "<b>Planifica sin moverte.</b> Marca las paradas y el camino entre ellas se graba cuando lo recorras.",
  "notes_label": "Valoración de verdad",
  "notes_h2": "Tres notas, <span class=\"verde\">no una.</span>",
  "notes_lead": "Una ruta puede ser difícil, de mal firme y preciosa a la vez. Una sola estrella esconde justo lo que hace que alguien decida si va o no.",
  "n1_h": "Dificultad",
  "n1_p": "De 1 a 5, del paseo dominguero al hardcore. Filtra hasta dónde te atreves a llegar.",
  "n2_h": "Calidad del firme",
  "n2_p": "Tierra, arena, piedra, barro, hierba o asfalto. Sabe qué hay bajo tus ruedas antes de llegar.",
  "n3_h": "Belleza",
  "n3_p": "La nota de naturaleza. Porque a veces el camino vale más que el destino.",
  "share_label": "Compartir",
  "share_h2": "Tu ruta, <span class=\"verde\">lista para la story.</span>",
  "share_lead": "Una tarjeta con el mapa, el trazado, la dificultad y los números del día. Queda bien sin que hagas nada, y la velocidad solo aparece si tú quieres.",
  "share_1": "Media, máxima y tiempo en movimiento, con un interruptor para ocultarlos.",
  "share_2": "Perfil de piloto: la moto, el casco, los kilómetros y las insignias.",
  "share_3": "Clubes para rodar juntos: ruta, fecha, punto de encuentro y chat propio.",
  "priv_h2": "Tu dirección <span class=\"verde\">no se va contigo.</span>",
  "priv_lead": "El inicio y el final de una grabación suelen ser la puerta de tu casa. Al publicar una ruta pública, la app recorta los primeros y los últimos 300 metros antes de enviarla. Ese tramo no sale de tu dispositivo, y ni nosotros podemos verlo.",
  "priv_1": "Viene activado de fábrica, y tú decides ruta a ruta.",
  "priv_2": "Un perfil privado oculta tus rutas, y seguir pasa a ser una solicitud.",
  "priv_3": "Elimina tu cuenta y todo lo que guarda, desde la app o por correo.",
  "svg_aria": "Trazado de una ruta con el inicio y el final recortados",
  "svg_cut": "300 m recortados",
  "gal_label": "Por dentro",
  "gal_h2": "Todo en <span class=\"verde\">una sola app.</span>",
  "gal_aria": "Capturas de pantalla de la aplicación",
  "final_h2": "Tu próxima ruta <span class=\"verde\">ya se puede registrar.</span>",
  "final_lead": "Roadfy llega pronto a Google Play. ¿Quieres entrar antes, como probador? Escríbenos un correo.",
  "ic_alt": "Icono de Roadfy",
  "foot_aria": "Pie de página",
  "foot_priv": "Política de Privacidad (en portugués)",
  "foot_del": "Eliminar tu cuenta (en portugués)",
  "a_mapa": "Mapa de rutas de Roadfy en satélite, con el trazado de una ruta en verde",
  "a_feed": "Feed de Roadfy con la foto de una moto en una ruta y el resumen: 86,2 km",
  "a_gravar": "Pantalla de grabación con cronómetro, distancia, desnivel y los botones Pausar y Finalizar",
  "a_role": "Pantalla de la ruta con el trazado verde sobre el mapa satelital, fotos y estadísticas",
  "a_onde": "Pantalla Por dónde pasaste: gráfico de altitud, 4 ciudades, 1 estado y 2 carreteras",
  "a_estrada": "Camino de tierra al atardecer visto desde el manillar de una moto",
  "a_rotas": "Catálogo de rutas con búsqueda, filtros y la tarjeta de la ruta Poção, Santa Maria, Jacu",
  "a_planejar": "Pantalla Planificar ruta con nombre, descripción, ciudad y paradas",
  "a_story": "Pantalla de compartir con la tarjeta de la ruta para stories: mapa, trazado, 86,2 km y 3h06",
  "a_piloto": "Perfil del piloto con la moto, el casco y 504,1 km recorridos",
  "g_feed": "Feed",
  "g_mapa": "Mapa de rutas",
  "g_role": "Ruta",
  "g_onde": "Por dónde pasaste",
  "g_rotas": "Catálogo de rutas",
  "g_gravar": "Grabación",
  "g_plan": "Planificar ruta",
  "g_share": "Compartir",
  "g_piloto": "Perfil de piloto",
  "_title": "Roadfy — app de rutas en moto: graba, valora y descubre rutas",
  "_desc": "Graba tu ruta por GPS, valora el camino con tres notas y descubre rutas de otros motociclistas. Roadfy es la app de rutas hecha por quien pilota.",
  "mail_subject": "Quiero probar Roadfy"
 },
 "pt": {
  "_title": "Roadfy — trilha de moto: grave, avalie e descubra rotas",
  "_desc": "Grave o rolê por GPS, avalie o caminho em três notas e descubra rotas de outros motociclistas. O Roadfy é o app de trilha feito por quem pilota.",
  "mail_subject": "Quero testar o Roadfy"
 }
};
  var SUP = ['pt', 'en', 'es'];
  var HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };
  var orig = new WeakMap();

  function guardar(el, k, v) {
    var o = orig.get(el) || {};
    if (!(k in o)) { o[k] = v; orig.set(el, o); }
    return o[k];
  }
  function escolher() {
    try { var s = localStorage.getItem('lang'); if (SUP.indexOf(s) > -1) return s; } catch (e) {}
    var l = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < l.length; i++) {
      var c = String(l[i]).toLowerCase().slice(0, 2);
      if (SUP.indexOf(c) > -1) return c;
    }
    return 'en';
  }
  function aplicar(lang) {
    var d = D[lang] || {};
    document.documentElement.lang = HTML_LANG[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var o = guardar(el, 'h', el.innerHTML);
      el.innerHTML = d[el.getAttribute('data-i18n')] || o;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var o = guardar(el, 'alt', el.getAttribute('alt'));
      el.setAttribute('alt', d[el.getAttribute('data-i18n-alt')] || o);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var o = guardar(el, 'aria', el.getAttribute('aria-label'));
      el.setAttribute('aria-label', d[el.getAttribute('data-i18n-aria')] || o);
    });
    var base = 'mailto:contato@roadforyou.com?subject=';
    document.querySelectorAll('[data-mail-subject]').forEach(function (el) {
      el.setAttribute('href', base + encodeURIComponent(d.mail_subject || D.pt.mail_subject));
    });
    document.title = d._title || D.pt._title;
    var m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', d._desc || D.pt._desc);
    document.querySelectorAll('.idiomas button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
  }

  aplicar(escolher());
  document.querySelectorAll('.idiomas button').forEach(function (b) {
    b.addEventListener('click', function () {
      var l = b.getAttribute('data-lang');
      try { localStorage.setItem('lang', l); } catch (e) {}
      aplicar(l);
    });
  });
})();
