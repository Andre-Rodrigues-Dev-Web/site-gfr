import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Image from 'next/image'
import styleGrids from '@/styles/Grids.module.css'
import styleMenu from '@/styles/Menu.module.css'
import styles from '@/styles/Home.module.css'
import Seo from '@/Components/Seo';

export default function Lacamento() {
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
      <Seo
        titlepage="Agência de Viagens GFR: Explore o mundo com estilo e conforto"
        descriptionpage="Descubra o mundo com a Agência de Viagens GFR. Oferecemos pacotes de viagem personalizados com acomodações de luxo e experiências únicas. Reserve agora sua próxima aventura."
        keywordspage="Agência de Viagens, viagens, viagens personalizadas, pacotes de viagem, acomodações de luxo, experiências únicas, viagens ao redor do mundo, reservas de viagem"
        urlpage="https://gfrviagens.com.br/home"
      />
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
