import React from 'react';
import Link from 'next/link';
import{
    FooterContainer,
    FooterSection,
    FooterLinks,
    ContainerCopy
} from './style';


const Footer = () => (
  <>
    <FooterContainer>
        <FooterSection>
            <h3>Sobre a GFR</h3>
            <p>Somos uma agência de viagens com mais de 10 anos de experiência, oferecendo as melhores opções de destinos nacionais e internacionais para nossos clientes.</p>
        </FooterSection>
        <FooterSection>
            <h3>Links Úteis</h3>
            <FooterLinks>
                <Link href="/">Início</Link>
                <Link href="/">Destinos</Link>
                <Link href="/">Pacotes</Link>
                <Link href="/">Sobre Nós</Link>
                <Link href="/">Política de Privacidade</Link>
                <Link href="/">Termos de Uso</Link>
            </FooterLinks>
        </FooterSection>
        <FooterSection>
            <h3>Contato</h3>
            <p>Entre em contato conosco para mais informações ou dúvidas:</p>
            <p>E-mail: contato@gfrviagens.com.br</p>
            <p>Telefone: +55 11 99999-9999</p>
        </FooterSection>
        <FooterSection>
            <h3>Redes Sociais</h3>
        <FooterLinks>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Twitter</Link>
        </FooterLinks>
        </FooterSection>
    </FooterContainer>
    <ContainerCopy>
        <p>© 2023 GFR Viagens. Todos os direitos reservados. | Desenvolvimento: <Link href="https://velance.com.br">Velance</Link></p>
    </ContainerCopy>
  </>
);

export default Footer;
