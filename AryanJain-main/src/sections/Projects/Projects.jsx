import styles from './ProjectsStyles.module.css';
import landingPage from '../../assets/LandingPage.png'
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import heroImg from '../../assets/hero-img.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={landingPage}
          link="https://productdesignerlandingpage.netlify.app/"
          h3="Product Designer"
          p="Landing Page"
        />
        <ProjectCard
          src={heroImg}
          link="https://musical-fox-9df80a.netlify.app/"
          h3="PortFolio"
          p="With Modern UI/UX"
        />
        {/* <ProjectCard
          src={hipsster}
          link="/"
          h3="Hipsster"
          p="Glasses Shop"
        /> */}
        {/* <ProjectCard
          src={fitLift}
          link="/"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
