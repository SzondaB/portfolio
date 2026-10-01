import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'adversarial-neural-networks',

    title:
      'Versengő neurális hálózatok biztonsági rendszerekben történő alkalmazható\u00ADságának vizsgálata',

    shortTitle:
      'Versengő neurális hálózatok',

    description:
      'Kutatási projekt, amely versengő neurális hálózatok segítségével vizsgálja a titkosított kommunikáció során kialakuló mintázatok felismerését és azok kihasználhatóságát.',

    fullDescription:
      'A szakdolgozat keretében egy Alice–Bob–Eve alapú neurális kommunikációs rendszert vizsgáltam. A kutatás középpontjában annak elemzése állt, hogy egy kulcs nélkül működő támadó neurális hálózat milyen minőségben és milyen hatékonysággal képes egy titkosított üzenet dekódolására, valamint milyen rejtett mintázatokat képes felismerni és kihasználni a kommunikáció során.',

    technologies: [
      'Python',
      'PyTorch',
      'Neural Networks',
      'Machine Learning'
    ],

    category: 'Kutatási projekt',

    status: 'active',

    featured: true,

    highlights: [
      'Alice–Bob–Eve neurális kommunikációs architektúra',
      'Versengő tanítási folyamat',
      'Mintázatfelismerés vizsgálata Eve szempontjából',
      'Nonce-alapú kommunikáció vizsgálata',
      'MultiEve megközelítés',
      'Bitwise accuracy és hard bit error alapú kiértékelés'
    ],

    sections: [
      {
        title: 'A projekt célja',
        content:
          'A kutatás célja annak vizsgálata volt, hogy versengő neurális hálózatok milyen módon alkalmazhatók titkosított kommunikációs rendszerekben. Kiemelt szerepet kapott annak elemzése, hogy Eve képes-e a kommunikáció során kialakuló rejtett mintázatok felismerésére és ezek felhasználására a dekódolási teljesítmény javítása érdekében.'
      },

      {
        title: 'Alice, Bob és Eve',
        content:
          'Alice feladata az üzenet kulcs segítségével történő kódolása, Bob feladata az eredeti üzenet visszaállítása ugyanazon kulcs birtokában, míg Eve kulcs nélkül próbálja rekonstruálni az üzenetet. A három hálózat egymással versengő tanítása során Alice célja a megbízható kommunikáció kialakítása, miközben Eve dekódolási képességét igyekszik korlátozni azáltal, hogy fokozatosan bonyolítja a kódolási módszereit ügyelve arra is, hogy Bob dekódolási képessége ne csökkenjen.'
      },

      {
        title: 'Mintázatfelismerés',
        content:
          'A kutatás egyik legfontosabb kérdése az volt, hogy Eve milyen rejtett struktúrákat vagy ismétlődő mintázatokat tud felismerni a titkosított kommunikációban. Ezek a mintázatok potenciálisan felhasználhatók a kulcs nélküli dekódolás hatékonyságának javítására.'
      },

      {
        title: 'Továbbfejlesztések',
        content:
          'A rendszer több változatban is vizsgálatra került. A nonce-alapú kommunikáció célja a statikus mintázatok kialakulásának csökkentése volt, míg a MultiEve megközelítés több, eltérő támadó hálózat alkalmazásával próbálta vizsgálni a kialakult kommunikáció biztonságát.'
      }
    ]
  },

  {
    id: 'ai-chess',

    title:
      'AI-alapú sakk alkalmazás',

    description:
      'Folyamatosan fejlesztett sakkalkalmazás, amely klasszikus keresési algoritmusokat és neurális hálózatokat ötvöz a játékállások kiértékeléséhez és a lépések kiválasztásához.',

    fullDescription:
      'A projekt célja egy saját sakkalkalmazás és mesterséges intelligenciával működő ellenfél fejlesztése. A rendszer klasszikus sakkalgoritmusokat és neurális hálózat alapú álláskiértékelést kombinál, miközben lehetőséget biztosít önjátékból származó adatok előállítására és a modell további tanítására.',

    technologies: [
      'Python',
      'PyTorch',
      'Pygame',
      'python-chess',
      'Minimax',
      'Alpha-Beta Pruning'
    ],

    category:
      'Mesterséges intelligencia',

    status: 'active',

    highlights: [
      'Saját grafikus sakkfelület',
      'Minimax keresés',
      'Alpha-beta pruning',
      'Neurális álláskiértékelés',
      'Self-play alapú tanítás'
    ],

    sections: [
      {
        title: 'A projekt célja',
        content:
          'A projekt egy folyamatosan fejlesztett sakkalkalmazás, amelyben a klasszikus keresési algoritmusokat neurális hálózat alapú kiértékeléssel kombinálom. A hosszabb távú cél egy egyre erősebb és adaptívabb sakkellenfél létrehozása.'
      },

      {
        title: 'Keresési algoritmus',
        content:
          'Az AI a minimax algoritmust és alpha-beta pruningot használja a lehetséges lépések vizsgálatára. Ez lehetővé teszi, hogy több lépésre előre elemezze az állásokat, miközben a kevésbé releváns keresési ágakat elhagyja.'
      },

      {
        title: 'Neurális hálózat',
        content:
          'A neurális modell feladata a sakkállások értékének becslése. A hálózat PyTorch segítségével készült, és megfelelő hardver esetén CUDA gyorsítást is képes használni.'
      },

      {
        title: 'Self-play',
        content:
          'A rendszer képes saját maga ellen játszmákat generálni. Az ezekből előállított tanítási minták felhasználhatók a neurális kiértékelő modell továbbfejlesztésére.'
      }
    ]
  },

  {
    id: 'portfolio',

    title:
      'Személyes portfólió weboldal',

    description:
      'React és TypeScript alapú interaktív portfólió, amely bemutatja a projektjeimet, tanúsítványaimat és szakmai hátteremet.',

    fullDescription:
      'Saját fejlesztésű React és TypeScript alapú portfólió weboldal, amelynek célja a szakmai hátterem, projektjeim, tanúsítványaim és önéletrajzom egységes, interaktív felületen történő bemutatása. A fejlesztés során kiemelt figyelmet fordítottam a komponensalapú felépítésre, az újrafelhasználhatóságra, a reszponzív megjelenésre és a letisztult felhasználói élményre.',

    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'CSS Modules'
    ],

    category: 'Webfejlesztés',

    status: 'active',

    highlights: [
      'React és TypeScript alapú komponensarchitektúra',
      'Interaktív és animált felhasználói felület',
      'Adatvezérelt projektoldalak',
      'Interaktív tanúsítványkártyák PDF előnézettel',
      'Önéletrajz előnézet és letöltés',
      'Reszponzív kialakítás'
    ],

    sections: [
      {
        title: 'A projekt célja',
        content:
          'A projekt célja egy saját, modern portfólió weboldal létrehozása, amely egységes felületen mutatja be a szakmai hátteremet, projektjeimet, tanúsítványaimat és önéletrajzomat. A weboldal kialakításánál fontos szempont volt, hogy az információk könnyen áttekinthetők legyenek, miközben az oldal vizuálisan is egységes és interaktív marad.'
      },

      {
        title: 'Komponensalapú felépítés',
        content:
          'Az alkalmazás React és TypeScript használatával készült. A különböző funkciókat és megjelenítési elemeket újrafelhasználható komponensekre bontottam, míg a projektekhez tartozó adatokat külön adatstruktúrában tárolom. Ennek köszönhetően új projektek hozzáadásakor nincs szükség minden esetben külön projektoldal létrehozására.'
      },

      {
        title: 'Interaktív felület',
        content:
          'A felület kialakításánál fontos szempont volt, hogy az animációk és interaktív elemek támogassák a tartalom bemutatását anélkül, hogy túlzsúfolttá tennék az oldalt. A weboldal többek között dinamikus háttereket, görgetéshez kapcsolódó megjelenési effekteket és különböző interaktív felületi elemeket használ.'
      },

      {
        title: 'Tanúsítványok és önéletrajz',
        content:
          'A megszerzett tanúsítványok külön interaktív kártyákon jelennek meg. A kártyák megfordíthatók, így közvetlenül az oldalon tekinthető meg az eredeti PDF dokumentum, valamint lehetőség van annak külön megnyitására és letöltésére. Az önéletrajz számára szintén külön felület készült PDF előnézettel és letöltési lehetőséggel.'
      }
    ]
  },

  {
    id: 'funnel-analytics',

    title:
      'Funnel Analytics Mini App',

    description:
      'Kampányok konverziós folyamatainak vizsgálatára készült frontend alkalmazás automatikus mutatókkal és egyszerű döntéstámogató insight rendszerrel.',

    fullDescription:
      'Vue 3 és Vite alapú frontend alkalmazás marketingkampányok konverziós folyamatainak elemzésére. A rendszer kampány- és lépésszintű adatokból automatikusan számít konverziós és lemorzsolódási mutatókat, azonosítja a problémás lépéseket, valamint szabályalapú insightokat generál az eredmények értelmezésének támogatására.',

    technologies: [
      'Vue',
      'JavaScript',
      'Vite'
    ],

    category: 'Frontend',

    status: 'completed',

    highlights: [
      'Kampányok és funnel lépések áttekintése',
      'Conversion rate automatikus számítása',
      'Drop-off rate és drop-off count meghatározása',
      'Leggyengébb funnel lépés azonosítása',
      'Szabályalapú insight rendszer',
      'Vue 3 alapú komponensarchitektúra'
    ],

    sections: [
      {
        title: 'A projekt célja',
        content:
          'A projekt célja egy egyszerűen használható analitikai felület létrehozása volt, amely marketingkampányok funnel adataiból automatikusan meghatározza a legfontosabb konverziós mutatókat, és segít felismerni a folyamat problémás pontjait.'
      },

      {
        title: 'Funnel elemzés',
        content:
          'Az alkalmazás kampányonként több egymást követő lépést kezel. A lépésekhez tartozó adatok alapján kiszámítja többek között a conversion rate, drop-off rate és drop-off count értékeket, valamint meghatározza a kampány teljes konverziós arányát.'
      },

      {
        title: 'Insight rendszer',
        content:
          'A kiszámított mutatók alapján az alkalmazás szabályalapú insightokat generál. A rendszer képes például alacsony teljes konverzió vagy kiemelkedően magas lemorzsolódás felismerésére, valamint az adatok alapján releváns figyelmeztetések és javaslatok megjelenítésére.'
      },

      {
        title: 'Felhasználói felület',
        content:
          'A Vue 3 alapú felület két fő panelből épül fel: az egyik a kampányok kiválasztását, a másik az adott kampány funnel lépéseinek és eredményeinek áttekintését biztosítja. A felület kialakításánál a gyors áttekinthetőség és az elemzési eredmények egyértelmű megjelenítése volt a fő szempont.'
      }
    ]
  },

  {
    id: 'book-exchange',

    title:
      'Könyvkölcsönző és könyvcsere rendszer',

    description:
      'Full-stack webalkalmazás könyvek kezelésére, vásárlására és felhasználók közötti tranzakciók lebonyolítására.',

    fullDescription:
      'React és Spring Boot alapú full-stack webalkalmazás könyvek kezelésére, megosztására és felhasználók közötti tranzakciók lebonyolítására. A rendszer külön frontend és backend rétegből épül fel, MySQL adatbázissal, felhasználói hitelesítéssel és jogosultságkezeléssel.',

    technologies: [
      'React',
      'Spring Boot',
      'Java',
      'MySQL'
    ],

    category: 'Full Stack',

    status: 'completed',

    highlights: [
      'React alapú frontend',
      'Spring Boot REST API',
      'JWT-alapú autentikáció',
      'MySQL adatbázis',
      'Privát és publikus könyvek kezelése',
      'Könyvvásárlási folyamat',
      'Bejövő és kimenő csereajánlatok kezelése'
    ],

    sections: [
      {
        title: 'A projekt célja',
        content:
          'A projekt célja egy olyan full-stack webalkalmazás létrehozása volt, amelyben a felhasználók saját könyveiket kezelhetik, más felhasználók könyveit böngészhetik, valamint könyvekhez kapcsolódó tranzakciókat kezdeményezhetnek.'
      },

      {
        title: 'Frontend és backend',
        content:
          'A kliensoldali alkalmazás React használatával készült, míg a backend Spring Boot alapú REST API-t biztosít. A két réteg HTTP kéréseken keresztül kommunikál egymással, az alkalmazás adatait pedig MySQL adatbázis tárolja.'
      },

      {
        title: 'Felhasználók és hitelesítés',
        content:
          'A rendszer felhasználói bejelentkezést és védett műveleteket támogat. A hitelesített kérések JWT token használatával érik el a backend megfelelő végpontjait, így a felhasználóhoz kötött könyvek és tranzakciók elkülönítve kezelhetők.'
      },

      {
        title: 'Könyvek kezelése',
        content:
          'A felhasználók saját könyveiket kezelhetik, valamint beállíthatják, hogy azok privát vagy publikus állapotban legyenek. A publikus könyvek más felhasználók számára is böngészhetők, míg a saját profilhoz kapcsolódó felületen külön kezelhetők a privát és nyilvánosan elérhető könyvek.'
      },

      {
        title: 'Tranzakciók',
        content:
          'Az alkalmazás támogatja a felhasználók közötti könyvekhez kapcsolódó tranzakciókat. A rendszerben kezelhetők a bejövő és kimenő ajánlatok, azok elfogadása vagy elutasítása, valamint külön vásárlási folyamat is rendelkezésre áll.'
      }
    ]
  }
]