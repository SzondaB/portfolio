import styles from './Privacy.module.css'

import useLanguage
  from '../../hooks/useLanguage'

function Privacy() {
  const { language } = useLanguage()

  const isHungarian =
    language === 'hu'

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            {isHungarian
              ? 'ADATVÉDELEM'
              : 'PRIVACY'}
          </p>

          <h1 className={styles.title}>
            {isHungarian
              ? 'Adatkezelési tájékoztató'
              : 'Privacy Policy'}
          </h1>

          <p className={styles.intro}>
            {isHungarian
              ? 'Ez a tájékoztató bemutatja, hogy a szondabenjamin.hu weboldal használata és a kapcsolatfelvétel során milyen személyes adatok kezelése történhet.'
              : 'This Privacy Policy explains how personal data may be processed when using the szondabenjamin.hu website and its contact form.'}
          </p>

          <p className={styles.updated}>
            {isHungarian
              ? 'Hatályos: 2026. október 3.'
              : 'Effective: 3 October 2026'}
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>
              {isHungarian
                ? '1. Adatkezelő'
                : '1. Data Controller'}
            </h2>

            <p>
              {isHungarian
                ? 'A weboldal üzemeltetője és az adatkezelő:'
                : 'The website operator and data controller is:'}
            </p>

            <div className={styles.infoBox}>
              <strong>
                Szonda Benjamin Márk
              </strong>

              <span>
                szondabenjamin.hu
              </span>

              <span>
                {isHungarian
                  ? 'Kapcsolat: a weboldalon található kapcsolatfelvételi űrlapon keresztül.'
                  : 'Contact: through the contact form available on this website.'}
              </span>
            </div>

            <p>
              {isHungarian
                ? 'Az adatkezeléssel és az érintetti jogok gyakorlásával kapcsolatos megkeresések szintén elküldhetők a kapcsolatfelvételi űrlapon keresztül.'
                : 'Requests concerning the processing of personal data or the exercise of data protection rights may also be submitted through the contact form.'}
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              {isHungarian
                ? '2. A kezelt személyes adatok'
                : '2. Personal Data Processed'}
            </h2>

            <p>
              {isHungarian
                ? 'A kapcsolatfelvételi űrlap használatakor az alábbi adatok kezelése történhet:'
                : 'When using the contact form, the following data may be processed:'}
            </p>

            <ul>
              <li>
                {isHungarian
                  ? 'a megadott e-mail-cím;'
                  : 'the email address provided;'}
              </li>

              <li>
                {isHungarian
                  ? 'az üzenet tárgya;'
                  : 'the subject of the message;'}
              </li>

              <li>
                {isHungarian
                  ? 'az üzenet tartalma és az abban önkéntesen megadott egyéb személyes adatok;'
                  : 'the content of the message and any other personal data voluntarily included in it;'}
              </li>

              <li>
                {isHungarian
                  ? 'a weboldal működéséhez és biztonságához kapcsolódó technikai adatok, például IP-cím, böngésző- és kérésadatok.'
                  : 'technical information related to the operation and security of the website, such as IP address, browser information and request data.'}
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>
              {isHungarian
                ? '3. Az adatkezelés célja'
                : '3. Purpose of Processing'}
            </h2>

            <p>
              {isHungarian
                ? 'A kapcsolatfelvétel során megadott személyes adatok kezelésének célja a megkeresések fogadása, megválaszolása és az ehhez szükséges kapcsolattartás.'
                : 'Personal data submitted through the contact form is processed for the purpose of receiving and responding to enquiries and maintaining the communication necessary for this purpose.'}
            </p>

            <p>
              {isHungarian
                ? 'A kapcsolatfelvétel során megadott adatokat nem használom közvetlen üzletszerzési vagy marketingcélokra, és nem értékesítem harmadik fél részére.'
                : 'Data submitted through the contact form is not used for direct marketing purposes and is not sold to third parties.'}
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              {isHungarian
                ? '4. Az adatkezelés jogalapja'
                : '4. Legal Basis'}
            </h2>

            <p>
              {isHungarian
                ? 'A kapcsolatfelvételhez kapcsolódó adatkezelés jogalapja a megkeresés jellegétől függhet. Általános kapcsolatfelvétel esetén az adatkezelés alapja lehet az adatkezelő jogos érdeke a megkeresések fogadásához és megválaszolásához. Amennyiben a kapcsolatfelvétel szerződés megkötését megelőző lépésekhez kapcsolódik, az adatkezelés az érintett kérésére történő szerződéskötést megelőző intézkedések megtételéhez is szükséges lehet.'
                : 'The legal basis for processing may depend on the nature of the enquiry. For general enquiries, processing may be based on the legitimate interest of the controller in receiving and responding to communications. Where an enquiry relates to steps taken at the request of the data subject prior to entering into a contract, processing may also be necessary for taking such pre-contractual steps.'}
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              {isHungarian
                ? '5. Az adatok megőrzése'
                : '5. Data Retention'}
            </h2>

            <p>
              {isHungarian
                ? 'A kapcsolatfelvétel során megadott személyes adatokat a megkeresés kezeléséhez és az esetleges további kapcsolattartáshoz szükséges ideig őrzöm meg. Ha további megőrzésre nincs szükség, az üzenetet és a hozzá kapcsolódó személyes adatokat törlöm, kivéve, ha jogszabály vagy jogos igény érvényesítése hosszabb megőrzést indokol.'
                : 'Personal data submitted through the contact form is retained for as long as necessary to handle the enquiry and any related communication. When further retention is no longer necessary, the message and associated personal data are deleted unless a longer retention period is required by law or is necessary for the establishment, exercise or defence of legal claims.'}
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              {isHungarian
                ? '6. Igénybe vett szolgáltatók'
                : '6. Service Providers'}
            </h2>

            <p>
              {isHungarian
                ? 'A weboldal működtetése és a kapcsolatfelvételi funkció biztosítása során külső szolgáltatók infrastruktúráját veszem igénybe.'
                : 'External service providers are used to operate the website and provide the contact functionality.'}
            </p>

            <div className={styles.provider}>
              <h3>Vercel</h3>

              <p>
                {isHungarian
                  ? 'A weboldal és a szerveroldali kapcsolatfelvételi API üzemeltetéséhez használt tárhely- és infrastruktúra-szolgáltató. A szolgáltatás működése során technikai és biztonsági naplóadatok kezelése történhet.'
                  : 'Hosting and infrastructure provider used to operate the website and its server-side contact API. Technical and security log data may be processed as part of the operation of the service.'}
              </p>

              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                Vercel Privacy Policy
              </a>
            </div>

            <div className={styles.provider}>
              <h3>Resend</h3>

              <p>
                {isHungarian
                  ? 'A kapcsolatfelvételi űrlapon elküldött üzenetek e-mailként történő továbbításához használt szolgáltató.'
                  : 'Email delivery provider used to forward messages submitted through the contact form.'}
              </p>

              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                Resend Privacy Policy
              </a>
            </div>

            <div className={styles.provider}>
              <h3>Google</h3>

              <p>
                {isHungarian
                  ? 'A kapcsolatfelvételi üzenetek fogadására és kezelésére a Google Gmail szolgáltatását használom.'
                  : 'Google Gmail is used to receive and manage messages submitted through the contact form.'}
              </p>

              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Google Privacy Policy
              </a>
            </div>
          </section>

          <section className={styles.section}>
            <h2>
              {isHungarian
                ? '7. Nemzetközi adattovábbítás'
                : '7. International Data Transfers'}
            </h2>

            <p>
              {isHungarian
                ? 'Az igénybe vett szolgáltatók egy része az Európai Gazdasági Térségen kívül is végezhet adatkezelési műveleteket. Ilyen esetben az érintett szolgáltató által alkalmazott, a vonatkozó adatvédelmi jogszabályok szerinti adattovábbítási mechanizmusok és garanciák alkalmazandók.'
                : 'Some service providers may process data outside the European Economic Area. In such cases, the transfer mechanisms and safeguards implemented by the relevant service provider in accordance with applicable data protection law apply.'}
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              {isHungarian
                ? '8. Az érintett jogai'
                : '8. Your Rights'}
            </h2>

            <p>
              {isHungarian
                ? 'A vonatkozó adatvédelmi jogszabályokban meghatározott feltételek szerint az érintett többek között jogosult lehet:'
                : 'Subject to the conditions provided by applicable data protection law, you may have the right to:'}
            </p>

            <ul>
              <li>
                {isHungarian
                  ? 'tájékoztatást és hozzáférést kérni a kezelt személyes adatokról;'
                  : 'request information about and access to your personal data;'}
              </li>

              <li>
                {isHungarian
                  ? 'kérni a pontatlan személyes adatok helyesbítését;'
                  : 'request correction of inaccurate personal data;'}
              </li>

              <li>
                {isHungarian
                  ? 'kérni személyes adatai törlését;'
                  : 'request deletion of your personal data;'}
              </li>

              <li>
                {isHungarian
                  ? 'kérni az adatkezelés korlátozását;'
                  : 'request restriction of processing;'}
              </li>

              <li>
                {isHungarian
                  ? 'az alkalmazandó feltételek fennállása esetén tiltakozni az adatkezelés ellen.'
                  : 'object to processing where the applicable legal requirements are met.'}
              </li>
            </ul>

            <p>
              {isHungarian
                ? 'Az érintetti jogokkal kapcsolatos kérelmek a weboldal kapcsolatfelvételi űrlapján keresztül nyújthatók be.'
                : 'Requests concerning data protection rights may be submitted through the contact form available on this website.'}
            </p>

            <p>
              {isHungarian
                ? 'Amennyiben úgy véled, hogy személyes adataid kezelése sérti a vonatkozó adatvédelmi szabályokat, jogosult vagy panaszt benyújtani az illetékes adatvédelmi felügyeleti hatósághoz. Magyarországon a felügyeleti hatóság a Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH).'
                : 'If you believe that the processing of your personal data infringes applicable data protection law, you have the right to lodge a complaint with a competent data protection supervisory authority. In Hungary, the supervisory authority is the Hungarian National Authority for Data Protection and Freedom of Information (NAIH).'}
            </p>

            <a
              href="https://www.naih.hu/"
              target="_blank"
              rel="noreferrer"
            >
              www.naih.hu
            </a>
          </section>

          <section className={styles.section}>
            <h2>
              {isHungarian
                ? '9. Adatbiztonság'
                : '9. Data Security'}
            </h2>

            <p>
              {isHungarian
                ? 'A weboldal HTTPS kapcsolatot használ. A kapcsolatfelvételi funkcióhoz használt szolgáltatási kulcsok nem kerülnek a kliensoldali alkalmazásba. A kapcsolatfelvételi API bemenetellenőrzést és a visszaélések mérséklését szolgáló technikai korlátozásokat alkalmaz.'
                : 'The website uses HTTPS. Service credentials used by the contact functionality are not included in the client-side application. The contact API uses input validation and technical measures intended to mitigate abuse.'}
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              {isHungarian
                ? '10. A tájékoztató módosítása'
                : '10. Changes to this Policy'}
            </h2>

            <p>
              {isHungarian
                ? 'A jelen adatkezelési tájékoztató szükség esetén módosítható, különösen a weboldal működésének, az igénybe vett szolgáltatásoknak vagy a vonatkozó jogszabályi követelményeknek a változása esetén. A mindenkor aktuális változat ezen az oldalon érhető el.'
                : 'This Privacy Policy may be updated when necessary, particularly if the operation of the website, the services used or applicable legal requirements change. The current version will always be available on this page.'}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Privacy