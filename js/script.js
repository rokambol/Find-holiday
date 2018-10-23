
// global variables insert in menu after continent is choose
var childLi1="<option value='childLi1'>Choose...</option> <option value='1'>Washington</option> <option value='2'>New York</option> <option value='3'>Toronto</option> <option value='4'>Monreal</option> <option value='5'>Quebec City</option> <option value='6'>Vancouver</option>";
var childLi2="<option value='childLi2'>Choose...</option> <option value='7'>Rio de Jenairo</option> <option value='8'>Buenos Aires</option> <option value='9'>Montivideo</option> <option value='10'>Falkland Islands</option> <option value='11'>Rio Grande</option> <option  value='12'>Santiago</option>";
var childLi3="<option value='childLi3'>Choose...</option> <option value= '13'>London</option> <option value='14'>Paris</option> <option value='15'>Copenhagen</option> <option value='16'>Moscow</option> <option value='17'>Rome</option> <option value='18'>Athens</option>";
var childLi4="<option value='childLi4'>Choose...</option> <option value= '19'>Casablanka</option> <option value='20'>Cairo</option> <option value='21'>Lagos</option> <option value='22'>Johannesburg</option> <option value='23'>Cape Town</option> <option value='24'>Entebbe</option>";
var childLi5="<option value='childLi5'>Choose...</option> <option value= '25'>Dubai</option> <option value='26'>Mumbai</option> <option value='27'>Colombo</option> <option value='28'>Kuala Lumpur</option> <option value='29'>Hong Kong</option> <option value='30'>Tokyo</option>";
var childLi6="<option value='childLi6'>Choose...</option> <option value='31'>Perth</option> <option value= '32'>Melbourne</option> <option value= '33'>Sydney</option> <option value='34'>Queenstown</option> <option value='35'>Auckland</option> <option value='36'>Nadi</option>";

// global variables show submenu1 when choose is made
var listmenuItems = [
["<h2>Our Recommendation: </h2> <li>International Spy Museum</li> <li>Madame Tussauds DC</li> <li>George Washington's Mount Vernon</li> <li>National Geographic Museum</li> <li>Newseum</li>"],
["<h2>Our Recommendation: </h2> <li>Hyatt Place Washington DC</li> <li>Avenue Suites Georgetown</li> <li>State Plaza Hotel</li> <li>The Hamilton Hotel</li> <li>The Melrose Georgetown Hotel</li>"],
["<h2>Our Recommendation: </h2> <li>McCormick & Schmick's Seafood & Steaks</li> <li>Ted's Bulletin</li> <li>Le Diplomate</li> <li>The Capital Grille</li> <li>Ambar Capitol Hill</li>"],
["<h2>Our Recommendation: </h2> <li>One World Observatory</li> <li>Empire State Building</li> <li>9/11 Memorial</li> <li>Top of the Rock</li> <li>St. Patrick's Cathedral</li>"],
["<h2>Our Recommendation: </h2> <li>The Chatwal, a Luxury Collection Hotel</li> <li>The Lowell Hotel</li> <li>The Peninsula New York</li> <li>The Carlyle, A Rosewood Hotel</li> <li>The Surrey</li>"],
["<h2>Our Recommendation: </h2> <li>Tableside Italian Cook Shoppe</li> <li>Manchi</li> <li>Eleven Madison Park</li> <li>21 Club</li> <li>Gramercy Tavern</li>"],
["<h2>Our Recommendation: </h2> <li>EdgeWalk at the CN Tower</li> <li>Casa Loma</li> <li>Ripley's Aquarium of Canada</li> <li>CN Tower</li> <li>Toronto Zoo</li>"],
["<h2>Our Recommendation: </h2> <li>Hilton Toronto</li> <li>Sheraton Centre Toronto Hotel</li> <li>Delta Hotels by Marriott Toronto</li> <li>InterContinental Toronto Centre</li> <li>The Omni King Edward Hotel</li>"],
["<h2>Our Recommendation: </h2> <li>Cafe Diplomatico Restaurant & Pizzeria</li> <li>George Restaurant</li> <li>Canoe Restaurant et Bar</li> <li>Alo</li> <li>Donatello Restaurant</li>"],
["<h2>Our Recommendation: </h2> <li>Pointe-à-Callière Museum</li> <li>Notre-Dame Basilica</li> <li>Montreal Botanical Garden</li> <li>Parc Jean-Drapeau</li> <li>Saint Joseph's Oratory</li>"],
["<h2>Our Recommendation: </h2> <li>Le Centre Sheraton Montreal Hotel</li> <li>Hotel Bonaventure Montréal</li> <li>Residence Inn by Marriott</li> <li>Delta Hotels by Marriott </li> <li>Fairmont The Queen Elizabeth</li>"],
["<h2>Our Recommendation: </h2> <li>Modavie</li> <li>Lola 45</li> <li>Europea</li> <li>Le Club Chasse et Pêche</li> <li>BOUILLON BILK</li>"],
["<h2>Our Recommendation: </h2> <li>Legendre Clinic</li> <li>Terrasse Dufferin</li> <li>Petit Champlain</li> <li>Citadelle of Quebec</li> <li>Quebec City Mural</li>"],
["<h2>Our Recommendation: </h2> <li>Marriott Downtown</li> <li>Best Western Plus City Centre</li> <li>Hôtel Champlain Vieux Québec</li> <li>Courtyard by Marriott</li> <li>Fairmont Le Château Frontenac</li>"],
["<h2>Our Recommendation: </h2> <li>La Planque</li> <li>La Pizzaio</li> <li>Légende</li> <li>Le Continental</li> <li>Le Toast</li>"],
["<h2>Our Recommendation: </h2> <li>Science World</li> <li>FlyOver Canada</li> <li>VanDusen Botanical Garden</li> <li>Seawall</li> <li>Vancouver Lookout</li>"],
["<h2>Our Recommendation: </h2> <li>Fairmont Waterfront, Vancouver</li> <li>Fairmont Hotel Vancouver</li> <li>Pan Pacific Hotel Vancouver</li> <li>Pinnacle Hotel Harbourfront</li> <li>Hotel Le Soleil</li>"],
["<h2>Our Recommendation: </h2> <li>Origo Club</li> <li>Spice World Hotpot Restaurant</li> <li>Fanny Bay Oyster Bar & Shellfish Market</li> <li>Cardero's Restaurant</li> <li>Bauhaus Restaurant</li>"],
["<h2>Our Recommendation: </h2> <li>Christ the Redeemer</li> <li>Copacabana</li> <li>Ipanema</li> <li>Sugarloaf Mountain</li> <li>Jardim Botanico</li>"],
["<h2>Our Recommendation: </h2> <li>Belmond Copacabana Palace</li> <li>Sol Ipanema Hotel</li> <li>Sheraton Grand Rio Hotel & Resort</li> <li>Hilton Rio De Janeiro Copacabana</li> <li>Windsor Excelsior Hotel</li>"],
["<h2>Our Recommendation: </h2> <li>CT Boucherie</li> <li>Restaurant Estrelas da Babilonia</li> <li>Restaurante Marius Degustare</li> <li>La Bocca Bar & Trattoria</li> <li>Prana</li>"],
["<h2>Our Recommendation: </h2> <li>Plaza Dorrego</li> <li>Japanese Gardens</li> <li>Costanera Sur Ecological Reserve</li> <li>Tango Show</li> <li>Palacio Barolo</li>"],
["<h2>Our Recommendation: </h2> <li>Mine Hotel Boutique</li> <li>CasaCalma Hotel</li> <li>Four Seasons Hotel</li> <li>Miravida Soho Hotel & Wine Bar</li> <li>Legado Mítico</li>"],
["<h2>Our Recommendation: </h2> <li>St. Regis Restaurant</li> <li>The Argentine Experience</li> <li>Chila</li> <li>Steaks by Luis</li> <li>Gran Paraiso</li>"],
["<h2>Our Recommendation: </h2> <li>Montevideo sign</li> <li>Artillery Group # 5</li> <li>Artigas Mausoleum</li> <li>Overview of Montevideo Rambla</li> <li>Puerto Buquebus Montevideo</li>"],
["<h2>Our Recommendation: </h2> <li>Hyatt Centric Montevideo</li> <li>Smart Hotel</li> <li>Sheraton Montevideo Hotel</li> <li>Hilton Garden Inn Montevideo</li> <li>Mercure Montevideo Punta Carretas</li>"],
["<h2>Our Recommendation: </h2> <li>Restaurant Tandory</li> <li>La Perdiz</li> <li>La Cocina de Pedro</li> <li>1921 Restaurant</li> <li>La Fonda</li>"],
["<h2>Our Recommendation: </h2> <li>Gypsy Cove</li> <li>Race Point</li> <li>Cliff Point</li> <li>Falkland Islands Tourist Board</li> <li>Cape Pembroke</li>"],
["<h2>Our Recommendation: </h2> <li>The Waterfront Hotel</li> <li>Malvina House Hotel</li> <li>Sea Lion Lodge</li> <li>Darwin House</li> <li>Shorty's Motel</li>"],
["<h2>Our Recommendation: </h2> <li>The Narrows Bar</li> <li>The Waterfront Kitchen Cafe</li> <li>Victory bar</li> <li>Globe Tavern</li> <li>Deano's Bar</li>"],
["<h2>Our Recommendation: </h2> <li>Rio Grande Wild and Scenic River</li> <li>Wildwoods Beach Ball Sign</li> <li>Cape May Inlet Marina</li> <li>Cape May Beach</li> <li>Beach Pier</li>"],
["<h2>Our Recommendation: </h2> <li>Starlux Hotel</li> <li>ICONA Diamond Beach - Wildwood Crest </li> <li>Holly Beach Hotel</li> <li>Sea Scape Inn</li> <li>Marlee Motel</li>"],
["<h2>Our Recommendation: </h2> <li>Don Pepe</li> <li>Asia Buffet & Sushi Bar</li> <li>Mi vida cafe</li> <li>El Verde BBQ</li> <li>W Sushi Bar</li>"],
["<h2>Our Recommendation: </h2> <li>Sky Costanera</li> <li>Granjaventura</li> <li>Santiago Metropolitan Park</li> <li>Quinta Normal Park</li> <li>Chilean National Zoo</li>"],
["<h2>Our Recommendation: </h2> <li>Hotel Luciano K</li> <li>Hyatt Place Santiago/Vitacura</li> <li>Four Points by Sheraton Santiago</li> <li>The Singular Santiago, Lastarria Hotel</li> <li>Hotel Plaza San Francisco</li>"],
["<h2>Our Recommendation: </h2> <li>Bocanáriz</li> <li>Chipe Libre-Républica Independiente del Pisco</li> <li>Peumayén Ancestral Food</li> <li>Fuente Alemana</li> <li>Castillo Parque Forestal</li>"],
["<h2>Our Recommendation: </h2> <li>The View from The Shard</li> <li>London Dungeon</li> <li>Sea Life London Aquarium</li> <li>Tower of London</li> <li>London Eye</li>"],
["<h2>Our Recommendation: </h2> <li>Apex City of London Hotel</li> <li>DoubleTree by Hilton</li> <li>Threadneedles, Autograph Collection</li> <li>Dorsett City</li> <li>The Ned</li>"],
["<h2>Our Recommendation: </h2> <li>Darwin Brasserie</li> <li>Chamberlain's Restaurant & Events</li> <li>La Dame de Pic London</li> <li>Brasserie Blanc</li> <li>M Threadneedle Street</li>"],
["<h2>Our Recommendation: </h2> <li>Eiffel Tower</li> <li>Notre-Dame de Paris</li> <li>Arc de Triomphe</li> <li>Jardin du Luxembourg</li> <li>Panthéon</li>"],
["<h2>Our Recommendation: </h2> <li>Pullman Paris Tour Eiffel</li> <li>Hotel Novotel Paris les Halles</li> <li>Four Seasons Hotel George V</li> <li>Hôtel Joke - Astotel</li> <li>Hotel Mercure Paris Montmartre Sacre Coeur</li>"],
["<h2>Our Recommendation: </h2> <li>Le Cinq</li> <li>Il était un square</li> <li>Restaurant Le Gabriel</li> <li>Pur' - Jean-François Rouquette</li> <li>Cook'n Saj</li>"],
["<h2>Our Recommendation: </h2> <li>Rundetaarn</li> <li>Rosenborg Castle Gardens</li> <li>Christiansborg Palace</li> <li>Tivoli Gardens</li> <li>Experimentarium</li>"],
["<h2>Our Recommendation: </h2> <li>Skt Petri</li> <li>Nimb Hotel</li> <li>Absalon Hotel</li> <li>Hotel SP34</li> <li>Best Western Hotel Hebron</li>"],
["<h2>Our Recommendation: </h2> <li>Geranium</li> <li>Restaurant Radio</li> <li>Kokkeriet, Copenhagen</li> <li>Restaurant Marv & Ben</li> <li>Noma</li>"],
["<h2>Our Recommendation: </h2> <li>Moscow Kremlin</li> <li>Red Square</li> <li>Palace of Facets</li> <li>World Clock Fountain</li> <li>Center of Moscow Circle</li>"],
["<h2>Our Recommendation: </h2> <li>Hotel National, a Luxury Collection Hotel</li> <li>Hilton Moscow Leningradskaya</li> <li>Izmailovo Vega</li> <li>Metropol Hotel</li> <li>Four Seasons Hotel</li>"],
["<h2>Our Recommendation: </h2> <li>Mari Vanna</li> <li>Cafe Pushkin</li> <li>Grand Cafe Dr. Jhivago</li> <li>Shinok</li> <li>LavkaLavka</li>"],
["<h2>Our Recommendation: </h2> <li>Campo de' Fiori</li> <li>Palazzo Valentini</li> <li>Janiculum</li> <li>Roman Forum</li> <li>Spanish Steps</li>"],
["<h2>Our Recommendation: </h2> <li>Hotel NH Collection Roma Giustiniano</li> <li>UNAHOTELS Decò Roma</li> <li>The Tribune Hotel</li> <li>Rome Times Hotel</li> <li>Hotel Quirinale</li>"],
["<h2>Our Recommendation: </h2> <li>Antico Arco</li> <li>Armando al Pantheon</li> <li>L'Arcangelo</li> <li>Trattoria Da Cesare al Casaletto</li> <li>Colline Emiliane</li>"],
["<h2>Our Recommendation: </h2> <li>Arch of Hadrian</li> <li>National Garden</li> <li>National Observatory</li> <li>Byzantine and Christian Museum</li> <li>Goulandris Museum of Cycladic Art</li>"],
["<h2>Our Recommendation: </h2> <li>Royal Olympic Hotel</li> <li>Centrotel Athens Hotel</li> <li>Meliá Athens</li> <li>Attalos Hotel</li> <li>Hotel Grande Bretagne</li>"],
["<h2>Our Recommendation: </h2> <li>Aleria Restaurant</li> <li>OROSCOPO restaurant</li> <li>Funky Gourmet</li> <li>Balcony Restaurant & Bar</li> <li>GB Roof Garden</li>"],
["<h2>Our Recommendation: </h2> <li>Museum of Moroccan Judaism</li> <li>Mahkama du Pacha</li> <li>Voyage Sud Ouest</li> <li>Bouskoura forest</li> <li>Mohamed V Square</li>"],
["<h2>Our Recommendation: </h2> <li>Hotel Sofitel Casablanca</li> <li>Hyatt Regency</li> <li>Pestana Casablanca</li> <li>Four Seasons Hotel</li> <li>Grand Mogador City center - Luxury Hotel</li>"],
["<h2>Our Recommendation: </h2> <li>Restaurant Le Basmane</li> <li>Le Petit Rocher Restaurant</li> <li>Restaurant Al-Mounia</li> <li>Rick's Café Casablanca</li> <li>Le Relais de Paris</li>"],
["<h2>Our Recommendation: </h2> <li>Cairo Tower</li> <li>Giza pyramid complex</li> <li>Great Sphinx of Giza</li> <li>Khan el-Khalili</li> <li>Wadi Degla</li>"],
["<h2>Our Recommendation: </h2> <li>Kempinski Nile Hotel Garden</li> <li>Conrad Cairo</li> <li>Ramses Hilton</li> <li>Freedom Hostel</li> <li>Hotel Sofitel Cairo Nile</li>"],
["<h2>Our Recommendation: </h2> <li>The Osmanly Restaurant</li> <li>Zitouni</li> <li>Sequoia</li> <li>Left Bank</li> <li>Ristorante Tuscany</li>"],
["<h2>Our Recommendation: </h2> <li>Freedom Park</li> <li>Tafawa Balewa Square</li> <li>Jhalobia Recreation Park and Garden</li> <li>erra Kulture, Victoria Island</li> <li>Nigerian National Museum</li>"],
["<h2>Our Recommendation: </h2> <li>The George Lagos Hotel</li> <li>The Wheatbaker Lagos</li> <li>Oakspring Hotel & Luxury Suites</li> <li>The Blowfish Hotel</li> <li>The Avenue Suites</li>"],
["<h2>Our Recommendation: </h2> <li>Bungalow's</li> <li>Jevinik Restaurant - Victoria Island</li> <li>Hard Rock Cafe</li> <li>RSVP Victoria Island</li> <li>Ocean Basket Victoria</li>"],
["<h2>Our Recommendation: </h2> <li>Wits Origins Centre Museum</li> <li>SAB World of Beer</li> <li>Gold Reef City</li> <li>Johannesburg Zoo</li> <li>Hashtag Escape</li>"],
["<h2>Our Recommendation: </h2> <li>Protea Hotel by Marriott</li> <li>Four Seasons Hotel The Westcliff</li> <li>African Pride Melrose Arch</li> <li>Crowne Plaza Johannesburg</li> <li>Monarch Hotel</li>"],
["<h2>Our Recommendation: </h2> <li>Jamie's Italian</li> <li>Marble Restaurant</li> <li>moyo Melrose Arch</li> <li>DW Eleven - 13</li> <li>Restaurante Parreirinha</li>"],
["<h2>Our Recommendation: </h2> <li>Silvermine Nature Reserve</li> <li>Table Mountain National Park</li> <li>District Six Museum</li> <li>Two Oceans Aquarium</li> <li>Kensington Place</li>"],
["<h2>Our Recommendation: </h2> <li>Radisson Blu Le Vendome Hotel</li> <li>Taj Cape Town</li> <li>Hilton Cape Town City Centre</li> <li>Belmond Mount Nelson Hotel</li> <li>The Table Bay hotel</li>"],
["<h2>Our Recommendation: </h2> <li>Black Sheep Restaurant</li> <li>La Colombe Restaurant</li> <li>Addis in Cape</li> <li>The Foodbarn Restaurant</li> <li>The Hussar Grill Camps Bay</li>"],
["<h2>Our Recommendation: </h2> <li>Wild Frontiers Uganda Safaris</li> <li>Uganda Wildlife Conservation</li> <li>Chimpanzee Trust Head Office</li> <li>Water Front Beach</li> <li>Kitubulu forest and beach</li>"],
["<h2>Our Recommendation: </h2> <li>Protea Hotel by Marriott</li> <li>Best Western Premier Garden Hotel</li> <li>Lake Victoria Hotel</li> <li>2 Friends Beach Hotel</li> <li>Viavia Entebbe</li>"],
["<h2>Our Recommendation: </h2> <li>Faze 3</li> <li>Anna's Corner</li> <li>Cafe Javas</li> <li>Thai Garden Entebbe</li> <li>Thammaphon Thai Restaurant</li>"],
["<h2>Our Recommendation: </h2> <li>Dubai Aquarium & Underwater Zoo</li> <li>Downtown Slide</li> <li>Dubai Ice Rink</li> <li>Jumaira Public Beach</li> <li>Dubai Marina Walk - Emaar</li>"],
["<h2>Our Recommendation: </h2> <li>Burj Al Arab Jumeirah</li> <li>JW Marriott Marquis Hotel</li> <li>Grand Hyatt</li> <li>Jumeirah Emirates Towers Hotel</li> <li>Palace Downtown</li>"],
["<h2>Our Recommendation: </h2> <li>The Talk Restaurant</li> <li>Armani/Ristorante</li> <li>Wavebreaker</li> <li>Armani / Amal</li> <li>Indego by Vineet</li>"],
["<h2>Our Recommendation: </h2> <li>Red Carpet Wax Museum</li> <li>Chota Kashmir The Boating Club</li> <li>Mahakali Caves</li> <li>Gateway of India</li> <li>Band Stand</li>"],
["<h2>Our Recommendation: </h2> <li>The Orchid Hotel Mumbai Vile Parle</li> <li>Hilton Mumbai International</li> <li>The Oberoi, Mumbai</li> <li>The Taj Mahal Palace</li> <li>Four Seasons Hotel</li>"],
["<h2>Our Recommendation: </h2> <li>Shree Thaker Bhojanalay</li> <li>Momo Cafe</li> <li>Celini</li> <li>Seasonal Tastes</li> <li>Lake View Cafe</li>"],
["<h2>Our Recommendation: </h2> <li>Viharamahadevi Park</li> <li>Gangaramaya Park</li> <li>Field Ornithology Group</li> <li>Galle Face Green</li> <li>Hempel Galleries</li>"],
["<h2>Our Recommendation: </h2> <li>Mövenpick Hotel Colombo</li> <li>Hilton Colombo</li> <li>Cinnamon Grand Colombo</li> <li>OZO Colombo</li> <li>Fairway Colombo</li>"],
["<h2>Our Recommendation: </h2> <li>Graze Kitchen</li> <li>Ministry of Crab</li> <li>Nuga Gama</li> <li>Ikoi Tei by WIP</li> <li>The Gallery Café</li>"],
["<h2>Our Recommendation: </h2> <li>Kuala Lumpur Tower</li> <li>Royal Selangor Visitor Centre</li> <li>Merdeka Square</li> <li>Aquaria KLCC</li> <li>Central Market</li>"],
["<h2>Our Recommendation: </h2> <li>Shangri-La Hotel</li> <li>Hotel Istana Kuala Lumpur</li> <li>Pullman Kuala Lumpur</li> <li>Sunway Putra Hotel</li> <li>Seri Pacific Hotel</li>"],
["<h2>Our Recommendation: </h2> <li>Fuego, Troika Sky Dining</li> <li>Dining In The Dark KL</li> <li>Quivo Restaurant</li> <li>Drift Dining and Bar</li> <li>El Cerdo KL</li>"],
["<h2>Our Recommendation: </h2> <li>Golden Bauhinia Square</li> <li>Nan Lian Garden</li> <li>Avenue of Stars</li> <li>The Peak Neighbourhood</li> <li>Hong Kong Disneyland</li>"],
["<h2>Our Recommendation: </h2> <li>The Ritz-Carlton, Hong Kong</li> <li>The Landmark, Mandarin Oriental</li> <li>The Upper House</li> <li>The Murray</li> <li>The Langham</li>"],
["<h2>Our Recommendation: </h2> <li>Asia Village</li> <li>Ping Pong St Katharine Docks</li> <li>New City</li> <li>Silk Road</li> <li>New Asia</li>"],
["<h2>Our Recommendation: </h2> <li>Tokyo DisneySea</li> <li>Tokyo Skytree</li> <li>Ameya-Yokochō</li> <li>Tokyo Tower</li> <li>Shinjuku Gyo-en</li>"],
["<h2>Our Recommendation: </h2> <li>The Peninsula Tokyo</li> <li>The Ritz-Carlton, Tokyo</li> <li>The Tokyo Station Hotel</li> <li>Four Seasons Hotel</li> <li>Conrad Tokyo</li>"],
["<h2>Our Recommendation: </h2> <li>Malay Asian Cuisine</li> <li>Ganesha</li> <li>Nobu</li> <li>plate tokyo</li> <li>Asian kebab</li>"],
["<h2>Our Recommendation: </h2> <li>Swan Bells</li> <li>Kings Park</li> <li>Elizabeth Quay</li> <li>Perth Cultural Centre</li> <li>Penguin Island</li>"],
["<h2>Our Recommendation: </h2> <li>Parmelia Hilton</li> <li>Duxton Hotel</li> <li>Novotel Perth Langley</li> <li>Miss Maud Hotel</li> <li>Hyatt Regency Perth</li>"],
["<h2>Our Recommendation: </h2> <li>C Restaurant</li> <li>Friends Restaurant</li> <li>Mister Walker Restaurant</li> <li>Petition</li> <li>Annalakshmi Restaurant</li>"],
["<h2>Our Recommendation: </h2> <li>Australian Forest Walk</li> <li>Central Big Clock</li> <li>Yarra River</li> <li>Madame Brussels Lane</li> <li>Statue of Joan of Arc</li>"],
["<h2>Our Recommendation: </h2> <li>InterContinental Melbourne</li> <li>The Victoria Hotel</li> <li>Adelphi Hotel</li> <li>Pegasus Apart'Hotel</li> <li>Grand Hyatt</li>"],
["<h2>Our Recommendation: </h2> <li>Maha</li> <li>Tipo 00</li> <li>Sezar Restaurant</li> <li>Coda</li> <li>Longrain Restaurant</li>"],
["<h2>Our Recommendation: </h2> <li>The Sydney Fernery</li> <li>Mrs Macquarie's Chair</li> <li>Madame Tussauds</li> <li>Parliament House</li> <li>Wild Life Sydney</li>"],
["<h2>Our Recommendation: </h2> <li>The Westin Sydney</li> <li>InterContinental</li> <li>Harbour Marriott Hotel at Circular Quay</li> <li>Amora Hotel Jamison</li> <li>The Grace Hotel</li>"],
["<h2>Our Recommendation: </h2> <li>Tetsuya's</li> <li>Bennelong Restaurant and Bar</li> <li>est.</li> <li>Fortune Village Chinese Restaurant</li> <li>Fish at the Rocks</li>"],
["<h2>Our Recommendation: </h2> <li>Nomad Safaris</li> <li>Skyline Queenstown</li> <li>KJet Queenstown</li> <li>Fear Factory Queenstown</li> <li>Tiki Trail</li>"],
["<h2>Our Recommendation: </h2> <li>Novotel Queenstown Lakeside</li> <li>Crowne Plaza</li> <li>Mercure Queenstown Resort</li> <li>Heritage Queenstown</li> <li>Sofitel Queenstown and Spa</li>"],
["<h2>Our Recommendation: </h2> <li>Vknow Restaurant & Wine Bar</li> <li>The Bunker Restaurant & Bar</li> <li>Botswana Butchery</li> <li>Rata</li> <li>Joe's Garage</li>"],
["<h2>Our Recommendation: </h2> <li>Auckland Zoo</li> <li>Butterfly Creek</li> <li>AJ Hackett SkyWalk & SkyJump</li> <li>Kelly Tarlton's Sea Life Aquarium</li> <li>Sky Tower</li>"],
["<h2>Our Recommendation: </h2> <li>Cordis, Auckland</li> <li>SKYCITY Grand Hotel</li> <li>Sofitel Auckland Viaduct Harbour</li> <li>Rydges Auckland</li> <li>Pullman Auckland</li>"],
["<h2>Our Recommendation: </h2> <li>Federal Delicatessen</li> <li>The Grove Restaurant</li> <li>Depot</li> <li>Sid at The French Cafe</li> <li>Cassia</li>"],
["<h2>Our Recommendation: </h2> <li>Garden of the Sleeping Giant</li> <li>Aquarius On The Beach</li> <li>Zip Fiji Nadi</li> <li>Sleeping Giant Zipline</li> <li>Orchid Falls</li>"],
["<h2>Our Recommendation: </h2> <li>Aquarius On The Beach</li> <li>Ramada Suites By Wyndham Wailoaloa </li> <li>Hilton Fiji Beach Resort and Spa</li> <li>Hibiscus Apartments Fiji</li> <li>Radisson Blu Resort Fiji</li>"],
["<h2>Our Recommendation: </h2> <li>Daikoku Restaurant (Fiji) Ltd.</li> <li>Habibi Fiji</li> <li>Sentai Seafood Restaurant</li> <li>Tu's Place</li> <li>Cafe O Fiji</li>"],
];

// location data for each city with name
var locations = [
      ['Washington DC', 38.893558, -77.063383, 1],
      ['New York', 40.773882, -74.019295, 2],
      ['Toronto', 43.697069, -79.383891, 3],
      ['Monreal', 45.605755, -73.538326, 4],
      ['Quebec City', 46.867889, -71.226519, 5],
      ['Vancouver', 49.384010, -123.156729, 6],
      ['Rio de Jenairo', -22.922876, -43.462457, 7],
      ['Buenos Aires', -34.604760, -58.426976, 8],
      ['Montivideo', -34.902597, -56.172354, 9],
      ['Falkland Islands (Islas Malvinas)', -51.746976, -58.910415, 10],
      ['Rio Grande', -53.763299, -67.696776, 11],
      ['Santiago', -33.439446, -70.667641, 12],
      ['London',51.409136, -0.062758, 13],
      ['Paris', 48.856871, 2.335072, 14],
      ['Copenhagen', 55.678157, 12.578024, 15],
      ['Moscow', 55.754242, 37.599643, 16],
      ['Rome', 41.901298, 12.488610, 17],
      ['Athens', 37.996834, 23.725499, 18],
      ['Casablanka', 33.575700, -7.593175, 19],
      ['Cairo', 30.019941, 31.209710, 20],
      ['Lagos', 6.526206, 3.374584, 21],
      ['Johannesburg', -26.199541, 28.044828, 22],
      ['Cape Town', -33.932501, 18.455402, 23],
      ['Entebbe', 0.052616, 32.464036, 24],
      ['Dubai', 25.215561, 55.273019, 25],
      ['Mumbai', 19.084794, 72.883234, 26],
      ['Colombo', 6.926264, 79.861009, 27],
      ['Kuala Lumpur', 3.137818, 101.689046, 28],
      ['Hong Kong', 22.337251, 114.183957, 29],
      ['Tokyo', 35.710376, 139.732444, 30],
      ['Perth', -32.023278, 115.892434, 31],
      ['Melbourne', -37.817348, 144.940379, 32],
      ['Sydney', -33.864985, 151.185559, 33],
      ['Queenstown', -45.050422, 168.720692, 34],
      ['Auckland', -36.870763, 174.697222, 35],
      ['Nadi', -17.757309, 177.445846,36]
    ];
    
// global map variables so it can be used to manipolate zoom level
var  map = new google.maps.Map(document.getElementById('map'));
 
/*initial load default map center when page is loaded */
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 23.658426, lng: -31.762902},
          zoom: 1
        });
        
        // JQuery function help code below to execute after page is loaded 
$(document).ready(function() {
    $.getJSON( "data/locations.json", function( data ) {
        var d = JSON.parse(data);
        console.log(d.locations);
        locations=d.locations;
    });
       // set marker on the Map 
   function markerSet () {
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
       for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })
      (marker, i));
    }
    }
    
 /*function newLocation() to use in next fuction block for new map center */
 function newLocation(newLat,newLng)
{
	map.setCenter({
		lat : newLat,
		lng : newLng
		
	});
}
// set different zoom on each map
$('#inlineFormCustomSelect').on('change', function() {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    if (valueSelected == 1) {
         map.setZoom(4);
    }else if (valueSelected == 2){
       map.setZoom(3);
    }else if (valueSelected == 3){
        map.setZoom(4);
    }else if (valueSelected == 4) {
         map.setZoom(3);
    }else if (valueSelected == 5){
         map.setZoom(5);
    }else if (valueSelected ==6) {
         map.setZoom(4);
    }else {
         map.setZoom(1);
    }
});

  /*function to change each continent from dropdown menu to new location */

 $('#inlineFormCustomSelect').on('change', function (){
 var value =  $('#inlineFormCustomSelect').val();
 
 // #inlineFormCustomSelect value ==1
  if (value == 1) {
       newLocation(49.020956,-103.076235), 
       markerSet ();
// load #subMenu with variables on the list according to value
      $('#subMenu').empty();
      $('#subMenu').append(childLi1);
      $('#listMenu').empty();
      $('#subMenu').on('change', function (){
      var valueSub = $('#subMenu').val();
       if ( valueSub == 1) {
           newLocation(38.893558, -77.063383);
           $('#listMenu').empty();
// load #subMenu1 with array index according to value
      $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[0]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[1]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[2]);
          }
      });
      }else if (valueSub == 2) {
          newLocation(40.773882, -74.019295);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[3]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[4]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[5]);
          }
      });
      }else if (valueSub == 3) {
          newLocation(43.697069, -79.383891);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[6]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[7]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[8]);
          }
      });
      }else if (valueSub == 4) {
          newLocation(45.605755, -73.538326);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[9]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[10]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[11]);
          }
      });
      }else if (valueSub == 5) {
          newLocation(46.867889, -71.226519);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[12]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[13]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[14]);
          }
      });
      }else if (valueSub == 6) {
          newLocation(49.384010, -123.156729);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[15]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[16]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[17]);
          }
      });
      }
      });
      
// #inlineFormCustomSelect value == 2
} else if (value == 2) {
     newLocation(-33.139444, -65.501989), 
     markerSet ();
     $('#subMenu').empty();
     $('#subMenu').append(childLi2);
     $('#subMenu').on('change', function (){
      var valueSub = $('#subMenu').val();
       if ( valueSub == 7) {
           newLocation(-22.922876, -43.462457);
           $('#listMenu').empty();
// load #subMenu1 with array index according to value
      $('#listMenu').on('change', function () {
          var valueSub1 =  $('#listMenu').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[18]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[19]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[20]);
          }
      });
      }else if (valueSub == 8) {
          newLocation(-34.604760, -58.426976);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[21]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[22]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[23]);
          }
      });
      }else if (valueSub == 9) {
          newLocation(-34.902597, -56.172354);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[24]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[25]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[26]);
          }
      });
      }else if (valueSub == 10) {
          newLocation(-51.746976, -58.910415);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[27]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[28]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[29]);
          }
      });
      }else if (valueSub == 11) {
          newLocation(-53.763299, -67.696776);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[30]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[31]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[32]);
          }
      });
      }else if (valueSub == 12) {
          newLocation()
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[33]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[34]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[35]);
          }
      });
      }
      });
     
// #inlineFormCustomSelect value ==3
} else if (value == 3) {
    newLocation(50.720127, 16.191343),
    markerSet (-33.439446, -70.667641);
    $('#subMenu').empty();
    $('#subMenu').append(childLi3);
    $('#subMenu').on('change', function (){
      var valueSub = $('#subMenu').val();
       if ( valueSub == 13) {
           newLocation(51.409136, -0.062758);
           $('#listMenu').empty();
// load #subMenu1 with array index according to value
      $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 7) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[36]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[37]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[38]);
          }
      });
      }else if (valueSub == 14) {
          newLocation(48.856871, 2.335072);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[39]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[40]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[41]);
          }
      });
      }else if (valueSub == 15) {
          newLocation(55.678157, 12.578024);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[42]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[43]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[44]);
          }
      });
      }else if (valueSub == 16) {
          newLocation(55.754242, 37.599643);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[45]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[46]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[47]);
          }
      });
      }else if (valueSub == 17) {
          newLocation(41.901298, 12.488610);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[48]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[49]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[50]);
          }
      });
      }else if (valueSub == 18) {
          newLocation(37.996834, 23.725499);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[51]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[52]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[53]);
          }
      });
      }
      });
    
    
// #inlineFormCustomSelect value == 4
} else if (value == 4) {
    newLocation(3.575398, 23.046812), 
    markerSet ();
    $('#subMenu').empty();
    $('#subMenu').append(childLi4);
    $('#subMenu').on('change', function (){
      var valueSub = $('#subMenu').val();
       if ( valueSub == 19) {
           newLocation(33.575700, -7.593175);
           $('#listMenu').empty();
// load #subMenu1 with array index according to value
      $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[54]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[55]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[56]);
          }
      });
      }else if (valueSub == 20) {
          newLocation(30.019941, 31.209710);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[57]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[58]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[59]);
          }
      });
      }else if (valueSub == 21) {
          newLocation( 6.526206, 3.374584);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[60]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[61]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[62]);
          }
      });
      }else if (valueSub == 22) {
          newLocation(-26.199541, 28.044828);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[63]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[64]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[65]);
          }
      });
      }else if (valueSub == 23) {
          newLocation(-33.932501, 18.455402);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[66]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[67]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[68]);
          }
      });
      }else if (valueSub == 24) {
          newLocation(0.052616, 32.464036);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[69]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[70]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[71]);
          }
      });
      }
      
   }); 
// #inlineFormCustomSelect value == 5
} else if (value == 5) {
    newLocation(29.168012, 103.906187), 
    markerSet ();
    $('#subMenu').empty();
    $('#subMenu').append(childLi5);
    $('#subMenu').on('change', function (){
      var valueSub = $('#subMenu').val();
       if ( valueSub == 25) {
           newLocation(25.215561, 55.273019);
           $('#listMenu').empty();
// load #subMenu1 with array index according to value
      $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[72]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[73]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[74]);
          }
      });
      }else if (valueSub == 26) {
          newLocation(19.084794, 72.883234);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[75]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[76]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[77]);
          }
      });
      }else if (valueSub == 27) {
          newLocation(6.926264, 79.861009);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[78]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[79]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[80]);
          }
      });
      }else if (valueSub == 28) {
          newLocation(3.137818, 101.689046);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[81]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[82]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[83]);
          }
      });
      }else if (valueSub == 29) {
          newLocation(22.337251, 114.183957);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[84]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[85]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[86]);
          }
      });
      }else if (valueSub == 30) {
          newLocation(35.710376, 139.732444);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[87]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[88]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[89]);
          }
      });
      }
      });
    
// #inlineFormCustomSelect value == 6
} else if (value == 6) {
    newLocation(-34.397, 150.644), 
    markerSet();
    $('#subMenu').empty();
    $('#subMenu').append(childLi6);
    $('#subMenu').on('change', function (){
      var valueSub = $('#subMenu').val();
       if ( valueSub == 31) {
           newLocation(-32.023278, 115.892434);
           $('#listMenu').empty();
// load #subMenu1 with array index according to value
      $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[90]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[91]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[92]);
          }
      });
      }else if (valueSub == 32) {
          newLocation(-37.817348, 144.940379);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[93]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[94]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[95]);
          }
      });
      }else if (valueSub == 33) {
          newLocation(-33.864985, 151.185559);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[96]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[97]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[98]);
          }
      });
      }else if (valueSub == 34) {
          newLocation(-45.050422, 168.720692);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[99]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[100]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[101]);
          }
      });
      }else if (valueSub == 35) {
          newLocation(-36.870763, 174.697222);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[102]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[103]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[104]);
          }
      });
      }else if (valueSub == 36) {
          newLocation(-17.757309, 177.445846);
          $('#listMenu').empty();
          $('#subMenu1').on('change', function () {
          var valueSub1 =  $('#subMenu1').val();
          if (valueSub1 == 1) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[105]);
          }else if (valueSub1 == 2) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[106]); 
          }else if (valueSub1 == 3) {
              $('#listMenu').empty();
              $('#listMenu').append(listmenuItems[107]);
          }
      });
      }
      });
    
// back to coordinate in unitMap()
} else { 
    newLocation(23.658426, -31.762902),markerSet();
}
});

$('#subMenu').on('change', function () {
   var value =  $('#subMenu').val();
   if (value == 1) {
       map.setZoom(10);
   }else{
       map.setZoom(10);
   }});

});
}