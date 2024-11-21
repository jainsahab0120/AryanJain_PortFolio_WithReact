import styles from './CertificateStyle.module.css';
import certificate from '../../assets/ARYAN JAIN_certificate.jpg';
import certificate2 from '../../assets/SPHINX'24.png'; 

function Certificate() {
    return (
        <section id='certificate' className={styles.container}>
            <h1 className="sectionTitle">Certificate</h1>
            <div className={styles.CertificateContainer}>
                <img src={certificate} alt="ARYAN JAIN Certificate" />
                <img src={certificate2} alt="ARYAN JAIN Certificate" />
            </div>
        </section>
    );
}

export default Certificate;
