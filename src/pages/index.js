import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Head from 'next/head'
import Image from 'next/image'
import styleGrids from '@/styles/Grids.module.css'
import styleMenu from '@/styles/Menu.module.css'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const launchDate = moment("2023-02-29 9:00:00");
    const intervalId = setInterval(() => {
      const now = moment();
      const duration = moment.duration(launchDate.diff(now));
      setTimeLeft({
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds()
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Head>
        <title>Agência de Viagens GFR: Explore o mundo com estilo e conforto</title>
        <meta name="description" content="Descubra o mundo com a Agência de Viagens GFR. Oferecemos pacotes de viagem personalizados com acomodações de luxo e experiências únicas. Reserve agora sua próxima aventura." />
        <meta name="keywords" content="Agência de Viagens, viagens, viagens personalizadas, pacotes de viagem, acomodações de luxo, experiências únicas, viagens ao redor do mundo, reservas de viagem"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="https://via.placeholder.com/32x32.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Velance" />
        <meta name="language" content="pt-br" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Agência de Viagens GFR" />
        <meta name="application-name" content="Agência de Viagens GFR" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/imgs/logo.jpg" />
        <meta name="msapplication-config" content="/imgs/logo.jpg" />
        <meta name="msapplication-square70x70logo" content="/imgs/logo.jpg" />
        <meta name="msapplication-square150x150logo" content="/imgs/logo.jpg" />
        <meta name="msapplication-wide310x150logo" content="/imgs/logo.jpg" />
        <meta name="msapplication-square310x310logo" content="/imgs/logo.jpg" />

        <meta property="og:title" content="Agência de Viagens GFR: Explore o mundo com estilo e conforto" />
        <meta property="og:description" content="Descubra o mundo com a Agência de Viagens GFR. Oferecemos pacotes de viagem personalizados com acomodações de luxo e experiências únicas. Reserve agora sua próxima aventura." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gfrviagens.com.br/" />
        <meta property="og:image" content="/imgs/logo.jpg" />
        <meta property="og:site_name" content="Agência de Viagens GFR" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:locale:alternate" content="fr_FR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gfrviagens" />
        <meta name="twitter:creator" content="@gfrviagens" />
        <meta name="twitter:title" content="Agência de Viagens GFR: Explore o mundo com estilo e conforto" />
        <meta name="twitter:description" content="Descubra o mundo com a Agência de Viagens GFR. Oferecemos pacotes de viagem personalizados com acomodações de luxo e experiências únicas. Reserve agora sua próxima aventura." />
        <meta name="twitter:image" content="/imgs/logo.jpg" />

        <link rel="apple-touch-icon" sizes="57x57" href="/imgs/logo.jpg" />
        <link rel="apple-touch-icon" sizes="60x60" href="/imgs/logo.jpg" />
        <link rel="apple-touch-icon" sizes="72x72" href="/imgs/logo.jpg" />
        <link rel="apple-touch-icon" sizes="76x76" href="/imgs/logo.jpg" />
        <link rel="apple-touch-icon" sizes="114x114" href="/imgs/logo.jpg" />
        <link rel="apple-touch-icon" sizes="120x120" href="/imgs/logo.jpg" />
        <link rel="apple-touch-icon" sizes="144x144" href="/imgs/logo.jpg" />
        <link rel="apple-touch-icon" sizes="152x152" href="/imgs/logo.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/imgs/logo.jpg" />

        <link rel="icon" type="image/png" sizes="192x192" href="/imgs/logo.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/imgs/logo.jpg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/imgs/logo.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/imgs/logo.jpg" />
      </Head>
      <section className={styles.wrap}>
        <div className={styles.overlay}>
          <nav className={styleMenu.navbar}>
            <div className={styleMenu.containerMenu}>
              <div className={styleMenu.logo}>
                <Image 
                  src="/imgs/logo-clean.png" 
                  alt="Logo GFR Viagens"
                  width={180}
                  height={180}
                />
              </div>
            </div>  
          </nav>  
          <article className={styleGrids.container}>
            <div className={styleGrids.row}>
              <div className={styleGrids.col_12}>
                <div className={styles.content_text1}>
                  <h1>Prepara-se! Breve um novo padrão em viagens personalizadas.</h1>
                  <p>
                  Prepare-se para viver uma jornada inesquecível com a GFR Viagens. A nova agência de viagens que transforma sonhos em realidade. Com um serviço personalizado e atenção aos detalhes, nós garantimos uma viagem perfeita. Fique ligado em nosso lançamento em breve!
                  </p>
                </div>
                <div className={styles.content_time}>
                  <p>{timeLeft.days} dias</p>
                  <p>{timeLeft.hours} horas</p>
                  <p>{timeLeft.minutes} minutos</p>
                  <p>{timeLeft.seconds} segundos</p>
                </div>
              </div>
            </div>
          </article>
          <footer className={styles.rodape}>
            <p>
              Todos os direitos reservados - GFR Viagens | Desenvolvido por <a href="https://velance.com.br/">Velance</a>
            </p>
          </footer>
        </div>
      </section>
    </>
  )
}
