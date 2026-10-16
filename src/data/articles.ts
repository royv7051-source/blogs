import { Article } from '../types/blog';

// High-fidelity generated imagery from assets
import heroRammedEarth from '../assets/images/hero_rammed_earth_villa_1792118042892.jpg';
import brutalismBloom from '../assets/images/biophilic_brutalist_concrete_1792118043445.jpg';
import timberPavilion from '../assets/images/nordic_timber_pavilion_1792118043738.jpg';
import stoneSanctuary from '../assets/images/subterranean_stone_sanctuary_1792118044083.jpg';

export const CATEGORIES = [
  'All Dispatches',
  'Materiality & Soil',
  'Biophilia',
  'Acoustics & Ritual',
  'Subterranean Form',
  'Nordic Light',
  'Urban Morphology',
  'Bio-Fabrication',
  'Spatial Thresholds',
  'Micro-Habitats',
  'Wabi-Sabi Tectonics',
] as const;

export const ARTICLES: Article[] = [
  {
    id: 'rammed-earth-renaissance',
    slug: 'the-rebirth-of-rammed-earth',
    title: 'The Rebirth of Rammed Earth: Ancient Soil in High-Performance Modern Villas',
    subtitle: 'How contemporary architects in the Iberian peninsula and Sonoran desert are transforming unbaked earth into carbon-negative thermal monoliths.',
    category: 'Materiality & Soil',
    volume: 'Vol. IX',
    issue: 'Autumn 2026',
    publishedAt: 'October 12, 2026',
    readTimeMinutes: 8,
    featured: true,
    coverImage: heroRammedEarth,
    imageAlt: 'Contemporary rammed earth residence with golden stratified soil walls and courtyard olive tree',
    author: {
      name: 'Elena Rostova',
      role: 'Professor of Structural Tectonics',
      institution: 'ETH Zürich Institute for Technology in Architecture',
      bio: 'Elena investigates low-carbon earthen masonry and hygroscopic envelope performance across arid Mediterranean microclimates.',
    },
    summary: 'Rammed earth has graduated from an anthropological curiosity to a premier high-performance building envelope. By compacting non-organic aggregates with sub-soil, contemporary architects achieve unmatched thermal inertia, natural humidity regulation, and an unrepeatable stratigraphic facade that roots the structure into its geological bedrock.',
    tags: ['Earthen Architecture', 'Thermal Mass', 'Circular Construction', 'Iberian Tectonics'],
    curatorNotes: 'Featured Essay for Issue 28. Awarded the 2026 International Journal of Tectonics Monograph Prize.',
    sections: [
      {
        heading: '01. The Geological Stratum as Domestic Enclosure',
        paragraphs: [
          'For over six millennia, from the monumental towers of Shibam in Yemen to the rammed fortifications along the Yellow River, unbaked earth served as humanity’s primary vernacular shelter. Yet the industrial twentieth century relegated soil to the margins, substituting carbon-heavy Portland cement and synthetic insulation boards that sealed inhabitants inside sterile, mechanically ventilated envelopes.',
          'Today, a quiet revolution is unfolding across the Alentejo plain of Portugal, the red mesa valleys of Arizona, and the foothills of Oaxaca. Architects are rediscovering that soil excavated on-site contains an innate thermodynamic intelligence that synthetic cladding simply cannot replicate. When gravel, sand, silt, and clay are mechanically compressed between sliding formworks in sixty-centimeter lifts, the resulting monolith behaves as a living membrane.',
        ],
        pullQuote: {
          quote: 'We do not build upon the site; we fold the site into structural walls. The earth that was under our boots at dawn becomes the roof beam’s support by dusk.',
          citation: 'Elena Rostova, ETH Zürich Tectonics Lecture',
        },
      },
      {
        heading: '02. Thermal Inertia and the Diurnal Phase Shift',
        paragraphs: [
          'The thermodynamic superiority of rammed earth lies in what building physicists define as thermal lag or phase shift. In arid and semi-arid climates, day-to-night temperature fluctuations frequently span twenty-five degrees Celsius. Conventional lightweight framing allows noon heat to penetrate interior living quarters within two hours, demanding continuous artificial cooling loads.',
          'In contrast, a 500-millimeter rammed earth wall possesses a thermal lag of eleven to twelve hours. The brutal solar radiation of midday is absorbed and stored within the dense earthen matrix. By the time this stored heat conducts through to the interior surface, ambient exterior temperatures have plummeted to twelve degrees, and the wall gently releases its warmth into the nocturnal living space without a kilowatt of mechanical input.',
          'Furthermore, unstabilized or minimally lime-stabilized earth is naturally hygroscopic. It continuously absorbs surplus airborne moisture during humid hours and desorbs it when the air dries out, naturally stabilizing interior relative humidity between 45% and 55%—the exact human respiratory comfort window.',
        ],
        figure: {
          number: 'Fig. 1',
          caption: 'Stratigraphic layering of rammed earth with native gravel, Sonoran clay, and quartz sand aggregates.',
          description: 'The horizontal stratification visible in the wall reveals the discrete compaction lifts, each containing subtle variations in mineral pigment.',
        },
      },
      {
        heading: '03. Tectonic Honesty: Rejecting Cosmetic Finishes',
        paragraphs: [
          'What separates contemporary rammed earth from its historic predecessor is the unapologetic celebration of its raw, unplastered surface. Rather than obscuring the soil beneath whitewash or timber cladding, architects treat the striations as an authentic geological record.',
          'Each layer—the result of thirty minutes of pneumatic tamper compression—records the specific mineral mix of that afternoon: an iron-rich red clay band, followed by a pale limestone grit, followed by local river silt. It is an architecture that cannot be faked with wallpaper or ceramic printed tiles; it demands genuine material density and craftsmanship that anchors the inhabitant firmly to the soil beneath their feet.',
        ],
      },
    ],
  },
  {
    id: 'brutalism-in-bloom-alpine',
    slug: 'brutalism-in-bloom',
    title: 'Brutalism in Bloom: Raw Concrete Reclaimed by Alpine Flora',
    subtitle: 'The rewilding of mid-century hydro-stations and research shelters proves that concrete only achieves poetic maturity when colonized by moss and lichen.',
    category: 'Biophilia',
    volume: 'Vol. IX',
    issue: 'Autumn 2026',
    publishedAt: 'October 08, 2026',
    readTimeMinutes: 7,
    featured: false,
    coverImage: brutalismBloom,
    imageAlt: 'Textured board-formed concrete structure embraced by lush ferns and alpine flora under soft mist',
    author: {
      name: 'Marcus Vance',
      role: 'Architectural Critic & Botanist',
      institution: 'Royal Horticultural Society & Architectural Association',
      bio: 'Marcus writes on the intersection of post-war civic infrastructure and spontaneous spontaneous ecological reclamation.',
    },
    summary: 'When Brutalist structures are abandoned to mountain mist and subalpine humidity, their alkaline surfaces become prime substrate for lithophytic mosses, ferns, and lichens. Rather than viewing this as decay, we must understand concrete as an artificial geology that welcomes botanical symbiosis.',
    tags: ['Brutalism', 'Rewilding', 'Subalpine Flora', 'Material Decay'],
    sections: [
      {
        heading: '01. Concrete as Synthetic Sedimentary Bedrock',
        paragraphs: [
          'For decades, standard architectural criticism viewed the staining, streaking, and efflorescence of Brutalist concrete as an aesthetic failure. The gleaming white promises of early modernism surrendered to dirty grey cascades of soot and rainwater. But step into the high valleys of the Swiss Valais or the temperate rainforests of the Pacific Northwest, and a radically different narrative asserts itself.',
          'Concrete, after all, is merely an artificial conglomerate of crushed limestone, quartz gravel, and pozzolanic binder. To a spore of *Asplenium trichomanes* (maidenhair spleenwort) or *Hypnum cupressiforme*, the rough board-formed surface of a cantilevered terrace is indistinguishable from a limestone cliff face. Over five decades of seasonal freezing and thawing, micro-fissures develop, capturing windblown dust and organic detritus.',
        ],
        pullQuote: {
          quote: 'The true destiny of exposed concrete is not to remain pristine like a museum vitrine, but to host the slow, green resurrection of the wild.',
          citation: 'Marcus Vance, The Mineral Garden',
        },
      },
      {
        heading: '02. The Chemistry of Botanical Colonization',
        paragraphs: [
          'Freshly poured concrete is intensely alkaline, with a pH often exceeding 12.5 due to the calcium hydroxide generated during cement hydration. This hostile alkalinity initially repels organic life. However, decades of atmospheric carbonation react with the calcium hydroxide, forming calcium carbonate and reducing the surface pH to a hospitable 7.5 to 8.5.',
          'At this biological threshold, pioneer crustose lichens establish footholds. They exude weak carbonic and oxalic acids that microscopically etch the aggregate boundaries, creating miniature moisture reservoirs. Ferns and creeping ivies follow, their rhizomes securing themselves within the textural imprint left behind by the Douglas fir boards used to cast the forms in 1968.',
        ],
      },
      {
        heading: '03. Toward an Architecture of Deliberate Weathering',
        paragraphs: [
          'Rather than applying toxic siloxane sealers to repel nature, progressive structural designers now formulate concrete mixes specifically engineered to invite biological colonization. By incorporating porous bio-receptive aggregates like pumice and reducing cement paste density on external parapets, buildings are conceived as vertical ecosystems from the first engineering drawing.',
        ],
      },
    ],
  },
  {
    id: 'silence-by-design-nordic-joinery',
    slug: 'silence-by-design-nordic-joinery',
    title: 'Silence by Design: The Acoustic Craft of Contemporary Timber Pavilions',
    subtitle: 'Investigating how joinery without nails, unvarnished cedar, and reflection pools create sacred acoustic deadzones in noisy urban fabric.',
    category: 'Acoustics & Ritual',
    volume: 'Vol. IX',
    issue: 'Autumn 2026',
    publishedAt: 'September 29, 2026',
    readTimeMinutes: 9,
    featured: false,
    coverImage: timberPavilion,
    imageAlt: 'Nordic timber pavilion with fine vertical cedar louvers, polished floor, and tranquil interior reflection pool',
    author: {
      name: 'Astrid Lindholm',
      role: 'Principal Acoustic Scenographer',
      institution: 'Nordic Acoustic Research Institute, Copenhagen',
      bio: 'Astrid designs quiet sanctuaries, contemplative libraries, and spatial music chambers across Scandinavia and Japan.',
    },
    summary: 'Noise is the invisible pollutant of our century. By merging traditional Japanese kigumi joinery with Scandinavian timber acoustics and calm indoor water surfaces, contemporary pavilions filter urban chaos into deep contemplative resonance.',
    tags: ['Acoustic Ecology', 'Timber Joinery', 'Kigumi', 'Scandinavian Design'],
    sections: [
      {
        heading: '01. The Spatial Ecology of Auditory Rest',
        paragraphs: [
          'The modern city generates a continuous broadband acoustic drone between 65 and 80 decibels. Even when masked by double glazing, low-frequency structural rumbles from subterranean transit lines and HVAC chillers infiltrate domestic space, keeping human nervous systems in low-level autonomic arousal.',
          'In response, architects have shifted their focus from visual spectacle to auditory serenity. Designing for silence is not merely a matter of mounting fiberglass acoustic baffles; it requires treating the entire tectonic assembly—beams, rafters, flooring, and water—as an instrument tuned to disperse and absorb acoustic energy organically.',
        ],
        pullQuote: {
          quote: 'When the joints are held together by cedar friction rather than metal screws, the pavilion breathes sound rather than reflecting it back as harsh flutter echoes.',
          citation: 'Astrid Lindholm, Silence as Spatial Substance',
        },
      },
      {
        heading: '02. Joinery Without Nails: Friction as Sound Attenuation',
        paragraphs: [
          'Metal fasteners act as acoustic bridges, conducting high-frequency vibrations directly into structural members. In contrast, interlocking timber joints (*kigumi* and traditional Scandinavian mortise-and-tenon) introduce microscopic frictional boundaries at every timber junction.',
          'Furthermore, vertical cedar louvers spaced at irregular non-harmonic intervals (using the Fibonacci series 13mm, 21mm, 34mm) break up specular reflections, scattering soundwaves across a broad frequency band into diffuse ambient warmth.',
        ],
      },
      {
        heading: '03. The Still Water Basin as Acoustic Sink',
        paragraphs: [
          'Integrating an interior reflection pool does more than provide visual serenity. A shallow, undisturbed plane of water functions as an ideal non-specular acoustic absorption surface for high-frequency vocal chatter, while generating micro-evaporation that maintains wood moisture content, preventing the seasonal dry creaking typical of conventional timber buildings.',
        ],
      },
    ],
  },
  {
    id: 'subterranean-sanctuaries-tuff',
    slug: 'subterranean-sanctuaries',
    title: 'Subterranean Sanctuaries: Architecture Carved into Volcanic Tuff',
    subtitle: 'Escaping thermal extremes and visual pollution through subtractive architecture: why digging is replacing building.',
    category: 'Subterranean Form',
    volume: 'Vol. IX',
    issue: 'Autumn 2026',
    publishedAt: 'September 22, 2026',
    readTimeMinutes: 10,
    featured: false,
    coverImage: stoneSanctuary,
    imageAlt: 'Dramatic interior cavern carved into volcanic rock with single beam of natural skylight upon stone altar and pool',
    author: {
      name: 'Dr. Mateo Castiglione',
      role: 'Mediterranean Heritage Conservationist',
      institution: 'University of Naples Federico II',
      bio: 'Mateo specializes in troglodytic dwellings of Cappadocia and the volcanic tuff cisterns of Matera and Southern Italy.',
    },
    summary: 'Subtractive architecture inverts the fundamental premise of construction. Instead of assembling materials against gravity, the architect removes stone to reveal pre-existing geological space, yielding constant 17°C temperatures year-round.',
    tags: ['Troglodytic Space', 'Volcanic Tuff', 'Subtractive Architecture', 'Matera'],
    sections: [
      {
        heading: '01. Subtraction versus Assembly',
        paragraphs: [
          'Every standard building code begins with structural assembly: footings poured, steel hoisted, studs fastened, cladding clipped. But across the Mediterranean volcanic belt—from the calcarenite caves of Matera to the soft tuff hills of Civita di Bagnoregio—architecture has always been an art of excavation.',
          'When an architect carves directly into volcanic tuff, there are no joints to seal against wind-driven rain, no thermal bridges between wall and ceiling, and no material supply chains susceptible to global disruption. The mountain itself provides foundation, thermal envelope, and finishes in a singular continuous mass.',
        ],
        pullQuote: {
          quote: 'The building was already there inside the volcano. We did not build the vault; we merely carried out the dust that kept it in darkness.',
          citation: 'Dr. Mateo Castiglione',
        },
      },
      {
        heading: '02. Constant Thermodynamic Equilibrium',
        paragraphs: [
          'At a depth of five meters below the earth’s surface, seasonal atmospheric variations vanish completely. While summer temperatures on the surface exceed 42°C in Southern Italy, the interior cavern remains at a perpetual 16.5°C to 17.5°C with zero mechanical air conditioning.',
          'Light enters not through fragile glazed facades, but through carefully positioned vertical light wells (*oculi*) cut into the top of the rock stratum. A single narrow beam of sun tracks across the stone floor throughout the day, marking time with astronomical precision.',
        ],
      },
    ],
  },
  {
    id: 'light-as-structural-matter-nordic',
    slug: 'light-as-structural-matter',
    title: 'Light as Structural Matter: The Nordic Geometry of Jørn Utzon and Alvaro Siza',
    subtitle: 'Daylight is not an accessory to be admitted through openings; it is the primary load-bearing beam of modern poetic space.',
    category: 'Nordic Light',
    volume: 'Vol. VIII',
    issue: 'Summer 2026',
    publishedAt: 'September 15, 2026',
    readTimeMinutes: 6,
    featured: false,
    coverImage: heroRammedEarth, // Fallback/alternative
    imageAlt: 'Curved white ceiling baffles capturing low-angle Nordic daylight',
    author: {
      name: 'Solveig Nygård',
      role: 'Architectural Historian',
      institution: 'Aalto University School of Arts, Design and Architecture',
      bio: 'Solveig lectures on Nordic light-funnels, Alvar Aalto clerestories, and Southern European modernism.',
    },
    summary: 'In northern latitudes, where winter days offer barely four hours of low-angled sunlight, daylight cannot be taken for granted. Masters like Jørn Utzon and Alvaro Siza shaped curved ceiling vaults that act as optical parabolic reflectors.',
    tags: ['Daylight Design', 'Nordic Modernism', 'Alvaro Siza', 'Jørn Utzon'],
    sections: [
      {
        heading: '01. The Scarcity of Lumens',
        paragraphs: [
          'When building in Copenhagen or Helsinki, solar elevation angles in December never exceed eight degrees above the horizon. Daylight enters almost horizontally, prone to harsh glare and deep, freezing shadows.',
          'Jørn Utzon understood this better than anyone when designing Bagsværd Church outside Copenhagen in 1976. Instead of flat ceilings punctuated by downlights, he engineered sweeping reinforced concrete shell vaults whose parabolic curvature catches the low northern sky and washes the interior sanctuary in a soft, cloud-like luminescence that requires zero artificial lighting throughout the working day.',
        ],
        pullQuote: {
          quote: 'In the north, we don’t design windows to look out of; we design light-traps to capture the sky before it freezes.',
          citation: 'Solveig Nygård, The Nordic Luminary',
        },
      },
      {
        heading: '02. Siza and the Shadow of Porto',
        paragraphs: [
          'Further south in Porto, Alvaro Siza performs an inverse miracle: taming the blinding Atlantic glare through deep reveals, double plaster soffits, and hidden clerestories that prevent direct sunbeams from ever striking the eye directly.',
        ],
      },
    ],
  },
  {
    id: 'the-15-minute-courtyard',
    slug: 'the-15-minute-courtyard',
    title: 'The 15-Minute Courtyard: Rethinking Urban Density Through Shared Atriums',
    subtitle: 'How contemporary collective housing in Barcelona and Kyoto replaces private isolation with micro-courtyards that drop ambient temperatures by 4°C.',
    category: 'Urban Morphology',
    volume: 'Vol. VIII',
    issue: 'Summer 2026',
    publishedAt: 'September 04, 2026',
    readTimeMinutes: 8,
    featured: false,
    coverImage: timberPavilion,
    imageAlt: 'Interior communal courtyard with weeping cherry trees and permeable paving in high-density urban block',
    author: {
      name: 'David Ortiz & Mei Chen',
      role: 'Urban Morphologists',
      institution: 'UPC Barcelona & Kyoto Institute of Technology',
      bio: 'David and Mei research courtyard ventilation chimneys and micro-climatic urban regeneration models.',
    },
    summary: 'The sealed apartment corridor is a civic dead zone. Modern courtyard typologies combine the traditional Mediterranean patio with Japanese tsuboniwa gardens to establish passive stack ventilation while fostering genuine communal life.',
    tags: ['Urban Courtyards', 'Passive Cooling', 'Collective Housing', 'Kyoto Machiya'],
    sections: [
      {
        heading: '01. The Tragedy of the Double-Loaded Corridor',
        paragraphs: [
          'The standard speculative urban residential block of the past eighty years is built on an economic formula: maximum carpet area, double-loaded carpeted interior hallways, and isolated private units whose only connection to fresh air is a narrow balcony cantilevered over car traffic.',
          'This typological failure guarantees social isolation and high air conditioning dependency. When Barcelona’s modern cooperatives and Kyoto’s row-house revitalizations revived the central communal courtyard, they demonstrated that opening the core of the building reduces cooling energy by up to 40% through the natural stack effect (the Bernoulli principle).',
        ],
      },
      {
        heading: '02. Microclimate Engineering: The 4°C Drop',
        paragraphs: [
          'Warm air naturally rises through the vertical atrium, drawing cooler air across shaded gravel plantings and shallow water channels on the ground plane. Even during peak heat waves, the courtyard functions as a cold air reservoir that circulates into surrounding apartments when transoms are left cracked.',
        ],
      },
    ],
  },
  {
    id: 'mycelium-and-timber-zero-carbon',
    slug: 'mycelium-and-timber-zero-carbon',
    title: 'Mycelium and Mass Timber: Bio-Fabrication and the Zero-Carbon Pavilion',
    subtitle: 'From fungal structural insulation to self-healing timber joints, bio-materials are shifting architecture from extraction to cultivation.',
    category: 'Bio-Fabrication',
    volume: 'Vol. VIII',
    issue: 'Summer 2026',
    publishedAt: 'August 28, 2026',
    readTimeMinutes: 7,
    featured: false,
    coverImage: brutalismBloom,
    imageAlt: 'Experimental pavilion structure formed of cross-laminated mass timber and compressed mycelium insulation blocks',
    author: {
      name: 'Julian Thorne',
      role: 'Bio-Materials Engineer',
      institution: 'Bio-Manufacturing Center of Excellence, Bristol',
      bio: 'Julian works with fungal hyphae and agricultural hemp waste to develop fire-rated architectural acoustic blocks.',
    },
    summary: 'The building sector accounts for nearly 40% of global carbon emissions. By replacing synthetic polyurethane foam with mycelium composite blocks grown from agricultural waste, architects can sequester carbon directly inside walls.',
    tags: ['Mycelium', 'Mass Timber', 'Bio-Materials', 'Embodied Carbon'],
    sections: [
      {
        heading: '01. Growing Rather than Manufacturing',
        paragraphs: [
          'Imagine an insulation panel that is not petroleum-derived, does not off-gas toxic volatile organic compounds (VOCs), is naturally class-A fire resistant, and can be grown in darkness within seven days using agricultural corn stalks and mushroom hyphae. This is no longer speculative laboratory fantasy; it is being installed today in timber pavilions across the European Union.',
          'Mycelium—the vegetative root network of fungi—binds organic agricultural substrates into rigid, lightweight structural cores. Once baked to arrest biological activity, the resulting composite delivers thermal R-values comparable to extruded polystyrene, but with net-negative embodied carbon.',
        ],
      },
    ],
  },
  {
    id: 'the-poetics-of-the-threshold',
    slug: 'the-poetics-of-the-threshold',
    title: 'The Poetics of the Threshold: Why the Genkan and Portico Matter in 2026',
    subtitle: 'The psychological transition between public noise and domestic sanctuary is the most neglected boundary in speculative real estate.',
    category: 'Spatial Thresholds',
    volume: 'Vol. VII',
    issue: 'Spring 2026',
    publishedAt: 'August 19, 2026',
    readTimeMinutes: 5,
    featured: false,
    coverImage: timberPavilion,
    imageAlt: 'Sunlit sunken stone genkan entry foyer stepping up to smooth Hinoki cypress floorboards',
    author: {
      name: 'Hina Morimoto',
      role: 'Spatial Anthropologist',
      institution: 'Waseda University Department of Architecture',
      bio: 'Hina researches liminal domestic transitions and ritual space in historic and contemporary Japanese housing.',
    },
    summary: 'A front door should never open directly into a kitchen or living room. The threshold is a decompression chamber for the human psyche—a physical pause where outside debris, stress, and noise are stripped away.',
    tags: ['Thresholds', 'Genkan', 'Domestic Ritual', 'Liminal Spaces'],
    sections: [
      {
        heading: '01. The Loss of Liminal Space',
        paragraphs: [
          'In the race to maximize usable square footage, modern housing developers eliminated the vestibule, the portico, and the mudroom. You turn the brass lock of a contemporary condo and step directly into the refrigerator’s shadow.',
          'In traditional Japanese residential architecture, the *genkan* (玄関) serves a ritualistic role far deeper than shoe storage. Its sunken stone floor (*tataki*) is physically cold and exterior; stepping up onto the elevated polished cedar floor (*shikidai*) marks an undeniable psychological crossing into the sanctuary of the home.',
        ],
      },
    ],
  },
  {
    id: 'the-ergonomics-of-solitude',
    slug: 'the-ergonomics-of-solitude',
    title: 'The Ergonomics of Solitude: Designing the Modern Writer\'s Shed',
    subtitle: 'An autopsy of Dylan Thomas\'s boathouse, Virginia Woolf\'s monk\'s house, and four contemporary retreats designed for unbroken contemplation.',
    category: 'Micro-Habitats',
    volume: 'Vol. VII',
    issue: 'Spring 2026',
    publishedAt: 'August 10, 2026',
    readTimeMinutes: 6,
    featured: false,
    coverImage: stoneSanctuary,
    imageAlt: 'Compact cedar clad writer retreat perched overlooking quiet foggy pine forest with single broad writing desk',
    author: {
      name: 'Julian Vane',
      role: 'Architect & Author',
      institution: 'The Shed Project, Oxford',
      bio: 'Julian studies micro-habitats and solitary creative workstations designed under twenty square meters.',
    },
    summary: 'True deep focus requires an architectural frame that eliminates extraneous visual fields. By examining the dimensions, window placements, and wood scents of famous writers’ outbuildings, we discover the spatial geometry of uninterrupted thought.',
    tags: ['Writing Sheds', 'Micro-Habitats', 'Deep Work', 'Solitude'],
    sections: [
      {
        heading: '01. The Geometry of 12 Square Meters',
        paragraphs: [
          'There is a precise threshold of floor area beyond which an outbuilding ceases to be an introspective sanctuary and transforms into a domestic miniature requiring its own upkeep. That upper boundary is twelve square meters.',
          'Within twelve square meters, every object must have singular purpose: a single walnut desk facing a window whose sill is set at sitting eye height; a cast-iron stove positioned for radiant leg warmth; a narrow shelf for sixty reference volumes; and an armchair angled toward the corner. No Wi-Fi router, no refrigerator hum, no secondary doors.',
        ],
      },
    ],
  },
  {
    id: 'patina-over-polish-wabi-sabi',
    slug: 'patina-over-polish-wabi-sabi',
    title: 'Patina over Polish: Wabi-Sabi Materiality in Weathered Corten and Charred Cedar',
    subtitle: 'The tyranny of maintenance-free surfaces has produced sterile cities. Why accepting oxidation, rain streaks, and sun-bleaching restores architectural dignity.',
    category: 'Wabi-Sabi Tectonics',
    volume: 'Vol. VII',
    issue: 'Spring 2026',
    publishedAt: 'July 30, 2026',
    readTimeMinutes: 8,
    featured: false,
    coverImage: heroRammedEarth,
    imageAlt: 'Oxidized Corten steel cladding paired with dark Shou Sugi Ban charred cedar siding showing decades of organic weathering',
    author: {
      name: 'Soren Kjaer',
      role: 'Principal Architect',
      institution: 'Studio Kjaer, Aarhus',
      bio: 'Soren focuses on building envelopes that grow more aesthetically compelling with each decade of North Sea exposure.',
    },
    summary: 'The marketing dream of the "maintenance-free" building has covered our skylines in lifeless anodized aluminum and vinyl composites that never age—they only degrade. Celebrating patina acknowledges time as the ultimate collaborating architect.',
    tags: ['Wabi-Sabi', 'Corten Steel', 'Shou Sugi Ban', 'Temporal Tectonics'],
    sections: [
      {
        heading: '01. The Resistance to Time',
        paragraphs: [
          'Western architecture has long been plagued by a desire for immortality: building surfaces that look identical on day one thousand as they did on day one. But when a synthetic panel scratches or fades unevenly under ultraviolet light, it does not acquire character; it simply looks cheap and broken.',
          'In contrast, materials that surrender to weathering—copper that blooms into verdigris, Corten steel that seals itself in a velvety rust patina, and Japanese *yakisugi* (charred cypress) whose carbonized outer skin resists decay while turning subtle charcoal silver under rain—possess a biological honesty that mirrors mortal life.',
        ],
        pullQuote: {
          quote: 'A building without patina is like a human face without laughter lines—frozen in an eerie, unconvincing youth.',
          citation: 'Soren Kjaer, Architecture of Impermanence',
        },
      },
    ],
  },
];
