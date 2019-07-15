import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { chapters } from '../config/options';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  setActiveChapter = (newChapter) => {
    const { chapterName, updateChapter } = this.props;

    if (newChapter === chapterName) return;

    document.getElementById(newChapter).setAttribute('class', 'active');
    document.getElementById(chapterName).setAttribute('class', '');

    updateChapter(newChapter);
  }

   isElementOnScreen = (id) => {
     const element = document.getElementById(id);
     const bounds = element.getBoundingClientRect();
     return bounds.top < window.innerHeight && bounds.bottom > 0;
   }

  handleScroll = (e) => {
    const chapterNames = Object.keys(chapters);
    let i;

    for (i = 0; i < chapterNames.length; i += 1) {
      const chapterName = chapterNames[i];
      if (this.isElementOnScreen(chapterName)) {
        this.setActiveChapter(chapterName);
        break;
      }
    }
  }


  render() {
    return (
      <div id="features" onScroll={this.handleScroll}>
        <section id="marikina" className="active">
          <Typography variant="h3">Marikina City</Typography>
          <Typography>
            A highly urbanized city in the capital region of the Philippines, it lies in a valley surrounded by the mountains of Sierra Madre in the east and the hills of Quezon City in the west. Situated near the center of the Pasig-Marikina river basin, most of the city sits at an elevation of <span class="highlight">15 meters above sea level</span>.
          </Typography>
          <br></br>
          <img class="figure" src="../../data/assets/precip.png" alt="Distribution of buildings in Marikina"></img>
          <br></br>
          <Typography variant="h6">CLIMATE &amp; ANNUAL PRECIPITATION</Typography>
          <Typography>
            Like the rest of the country, Marikina experiences a <span class="highlight">tropical monsoon climate</span> with average temperatures from 20 &deg;C to 34 &deg;C. Although these can feel warmer because of high humidity. The dry season starts January through May, bringing around 1.5 inches of rain. For the rest of the year, Marikina experiences its wet season which pours around 5 to 17 inches of rain, with heavy downpours from August to October. Overall in a year, Marikina experiences <span class="highlight">82 inches</span> of rain on average (<i>Source: <a href="https://en.wikipedia.org/wiki/Marikina" target="_blank">Wikipedia</a></i>).
          </Typography>
          <br></br>
          <img class="figure" src="../../data/assets/precip.png" alt="Average precipitation per month in Marikina"></img>
        </section>
        <section id="land">
          <Typography variant="h3">A River Runs through It</Typography>
          <Typography>
            The <span class="highlight">Marikina River</span> runs at the heart of the city, draining off rain water through its tributaries to Laguna de Bay. In its 38 kilometer stretch, its depth ranges from 3 to 21 meters, and its segments can span from 70 to 120 meters. Because it runs through to the lower stretch of the basin, the riverbanks only have elevations as high as 8 down to 2 meters above sea level.
          </Typography>
          <br></br>
          <Typography variant="h6">CALL TO ACTION</Typography>
          <Typography>
            Acting as its lifeblood, many of Marikina's residential subdivisions, commercial buildings and critical health and education facilities have been built near the river. With continuous developments around it coupled with the constant threat of flooding, Marikina remains a focus of the national government’s efforts for flood control and disaster management (<i>Source: <a href="https://en.wikipedia.org/wiki/Marikina_River" target="_blank">Wikipedia</a></i>).
          </Typography>
          <br></br>
          <img class="figure" src="../../data/assets/precip.png" alt="Distribution of buildings in Marikina"></img>
        </section>
        <section id="typhoon">
          <Typography variant="h3">T.S. Ondoy</Typography>
          <Typography>
            Like a shield to its southeast asian neighbors, the Philippines welcomes around twenty tropical cyclones in its area of responsibility. Around ten of them become actual typhoons and make landfall, with five of those potentially bringing destructive winds and heavy rains. This makes the Philippines the most exposed to tropical storms &mdash; an unfortunate record to bear (<i>Source: <a href="https://en.wikipedia.org/wiki/Typhoons_in_the_Philippines" target="_blank">Wikipedia</a>, <a href="http://world.time.com/2013/11/11/the-philippines-is-the-most-storm-exposed-country-on-earth/" target="_blank">Time</a></i>).
          </Typography>
          <br></br>
          <Typography variant="h6">EXTENT &amp; IMPACT</Typography>
          <Typography>
            On September 26, 2009, tropical storm “Ondoy” (typhoon “Ketsana”) made landfall and for 12 hours, flooded Metro Manila and Central Luzon. Catching everyone by surprise, it continuously dumped around 341 mm (14 in) of rain in just 6 hours and within 24 hours, a record-high 455 mm (17.9 in) of rainfall was reported. In its aftermath, around 464 people drowned and 11 billion pesos worth of infrastructure and agriculture were damaged (<i>Source: <a href="https://en.wikipedia.org/wiki/Typhoon_Ketsana" target="_blank">Wikipedia</a>, <a href="https://newsinfo.inquirer.net/818907/special-report-on-storm-ondoy-marikina-remembers-end-of-the-world" target="_blank">Inquirer</a></i>).
          </Typography>
          <br></br>
          <Typography variant="h6">MARIKINA, HARDEST HIT</Typography>
          <Typography>
            With almost a month’s worth of rainfall that befell in less than a day, Marikina river rose to 23 meters above sea level. Considered as the worst flooding with heights that reached around 20 feet, its extent reached 14 of Marikina’s 16 <i>barangays</i> (towns). Many of its health centers were flooded, damaging their stocks of medicine and equipment. Marikina suffered 70 deaths and 27 million pesos in damages, making it one of the hardest hit cities in Metro Manila.  (<i>Source: <a href="https://newsinfo.inquirer.net/818907/special-report-on-storm-ondoy-marikina-remembers-end-of-the-world" target="_blank">Inquirer</a>, <a href="https://reliefweb.int/report/philippines/philippines-typhoon-ondoy-health-cluster-situation-report-1" target="_blank">Reliefweb</a></i>).
          </Typography>
        </section>
        <section id="evacuation">
          <Typography variant="h3">Evacuation</Typography>
          <Typography>
            Completely unaware, many families in low lying areas were stranded in their upper floors while others climbed to their roofs. In Marikina, around 14 to 23 available schools and evacuation centers took people in, as well as some churches. While many scrambled to these locations as it rained, there were anecdotal reports that some of these experienced flooding as well. As we prepare for more typhoons and monsoon rains like those brought by Ondoy, <span class="highlight">how suitable are the current evacuation centers and their locations in sheltering Marikina’s citizens from peril?</span>
          </Typography>
          <br></br>
          <Typography>
            First, let’s look at what the current evacuation centers are like. Like most cities in the Philippines, Marikina converts its elementary schools, high schools and covered basketball courts into temporary shelters during typhoons.
          </Typography>
          <br></br>
          <img class="figure" src="../../data/assets/precip.png" alt="Distribution of buildings in Marikina"></img>
          <br></br>
          <Typography>
            While these buildings might seem practical for a few days of stay, there are always concerns whether there is <span class="highlight">enough space and provisions for privacy, proper sanitation and healthcare</span>. This is especially true for evacuees who cannot easily return to their homes and would require further recovery assistance.
          </Typography>
        </section>
        <section id="population">
          <Typography variant="h3">Population</Typography>
          <Typography>
            Marikina City has 450,741 citizens. <span class="highlight">How much of the population is exposed to hazard?</span>
          </Typography>
          <br></br>
          <img class="figure" src="../../data/assets/precip.png" alt="Distribution of buildings in Marikina"></img>
          <br></br>
          <Typography>
            If we look at the flood hazard for a 5-year return period, around <span class="highlight">47% of the population are exposed to high and medium hazards</span>, which is already a sizeable number of people. This percentage jumps to <span class="highlight">65%</span> and <span class="highlight">69%</span> of the population for the 25- and 100-year return periods, respectively.
          </Typography>
        </section>
        <section id="coverage">
          <Typography variant="h3">Ideal Coverage</Typography>
          <Typography>
            If we draw 400 m circles around each evacuation center, the map shows how many people can reach them within an acceptable walking distance. What do these mean? We can consider them as the ideal number of people that each evacuation center should be able to shelter in times of disaster. Overall, 86% of the population are in close proximity to at least one evacuation center.
          </Typography>
          <br></br>
          <img class="figure" src="../../data/assets/precip.png" alt="Distribution of buildings in Marikina"></img>
          <br></br>
          <Typography>
            There are also many evacuation centers that overlap ideal coverage, which can be a good thing for citizens. There are around 35% of the population with at least two evacuation centers nearby, and 3% of them are near to four shelters. And if we look at the map, these cluster of evacuation centers are nicely located in relatively population dense areas.
          </Typography>
        </section>
        <section id="capacity">
          <Typography variant="h4">Capacity of Evacuation Centers</Typography>
          <Typography>Quisque accumsan augue leo, id ultricies arcu pharetra sed. Nulla facilisi. Aenean tincidunt, mauris non congue maximus, magna turpis lacinia tellus, ac porttitor sapien ante eget risus. Vestibulum sed tincidunt lacus. Morbi ut auctor erat, id dapibus massa. Nunc dignissim tincidunt fringilla. Nunc quis dui sapien. Phasellus eget finibus tellus, sed condimentum lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc lacus lorem, cursus vitae sapien in, iaculis sodales nibh. Donec venenatis tellus libero, quis imperdiet risus porta ut. Etiam fermentum nulla quam, ut suscipit leo placerat a. Vivamus imperdiet tortor sem, nec congue tortor fringilla et. Vestibulum quis enim sed velit euismod fringilla.</Typography>
        </section>
        <section id="accessibility">
          <Typography variant="h3">Accessibility</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel tellus facilisis, cursus metus ut, porttitor ipsum. Nulla et nunc porta, viverra nunc eu, sodales dui. Donec ornare ipsum sed leo faucibus faucibus. Etiam posuere nec nulla sed auctor. Suspendisse consectetur efficitur magna sed tempor. Aliquam laoreet fringilla imperdiet. In tincidunt tortor nec nibh volutpat, ac tempor velit dapibus. Nunc eu nunc vel magna dictum tristique non eu quam. Aliquam viverra risus nisl, sed aliquet est consequat ac. Sed eget tortor sagittis arcu sodales lobortis vel non enim.
          </Typography>
        </section>
        <section id="suitability">
          <Typography variant="h3">Suitability</Typography>
          <Typography>
            By considering the various factors such as <span class="highlight">flood hazard level, land elevation, land cover, accessibility to road networks and the maximum population coverage of an evacuation center</span>, we derived a suitability score for each area. The suitability score gives us an idea of how ideal a certain area is for an evacuation center to be built to be able to minimize the risks.
          </Typography>
          <br></br>
          <Typography>
          The basis of the suitability score varied depending on the flood hazard level to be able to factor in cases of high-rising flood and low-rising flood. If we look at the suitability map for a 5-year return period, <span class="highlight">over 52% of the city has low to very low suitability</span>. The percentage increases to approximately <span class="highlight">64%</span> and <span class="highlight">69%</span> for the 25- and 100-year return periods respectively.
          </Typography>
        </section>
        <section id="good-place">
          <Typography variant="h3">The Good Places</Typography>
          <Typography>
            Despite a large area of Marikina considered to have low suitability for flood evacuation centers, there are some large <span class="highlight">very high suitable areas</span> that we can notice. The largest area is found in the neighborhood of <span class="highlight">Marikina Heights</span> at the eastern side of the city. This area is composed of mountains and numerous narrow alleys which act as <span class="highlight">catch basins</span> during the floods. In the recent flooding due to Typhoon Karding, this area reported no flooding possibly due to its <span class="highlight">topographical characteristics</span> and <span class="highlight">developed facilities</span> like drainage and pumping stations to accommodate the <span class="highlight">high population</span>.
          </Typography>
          <br></br>
          <Typography>
            The second largest very high suitable area is found at the western side of the Marikina River with <span class="highlight">Ateneo De Manila University</span> as a neighbor on the west. The university area is <span class="highlight">almost entirely covered in grass with some scattered trees</span>. Compared to other areas <span class="highlight">right beside the river</span>, this area has a <span class="highlight">higher elevation</span> and experiences <span class="highlight">very little flooding</span>.
          </Typography>
          <br></br>
          <Typography>
            On the other side of the Marikina River, another very high suitable area can be observed and it is <span class="highlight">relatively closer to the river</span> compared to the previous area mentioned. Aside from its relatively <span class="highlight">large concentration of people</span>, the high suitability score could be attributed to <span class="highlight">numerous passable roads</span> and spots of <span class="highlight">greenery</span> contributed by golf lots, sports complexes and other leisure accommodations within the vicinity.
          </Typography>
        </section>
        <section id="conclusion">
          <Typography variant="h3">Moving Forward</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel tellus facilisis, cursus metus ut, porttitor ipsum. Nulla et nunc porta, viverra nunc eu, sodales dui. Donec ornare ipsum sed leo faucibus faucibus. Etiam posuere nec nulla sed auctor. Suspendisse consectetur efficitur magna sed tempor. Aliquam laoreet fringilla imperdiet. In tincidunt tortor nec nibh volutpat, ac tempor velit dapibus. Nunc eu nunc vel magna dictum tristique non eu quam. Aliquam viverra risus nisl, sed aliquet est consequat ac. Sed eget tortor sagittis arcu sodales lobortis vel non enim.
          </Typography>
        </section>
      </div>
    );
  }
}

Panel.propTypes = {
  chapterName: PropTypes.string.isRequired,
  updateChapter: PropTypes.func.isRequired,
};
