import React from 'react'
import Head from 'next/head'

export default function Seo(propsSeo) {
  return (
    <>
        <Head>
        <title>{propsSeo.titlepage}</title>
        <meta name="description" content={propsSeo.descriptionpage} />
        <meta name="keywords" content={propsSeo.keywordspage}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/imgs/logo.jpg" />
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
        <meta name="apple-mobile-web-app-title" content={propsSeo.titlepage} />
        <meta name="application-name" content="Agência de Viagens GFR" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/imgs/logo.jpg" />
        <meta name="msapplication-config" content="/imgs/logo.jpg" />
        <meta name="msapplication-square70x70logo" content="/imgs/logo.jpg" />
        <meta name="msapplication-square150x150logo" content="/imgs/logo.jpg" />
        <meta name="msapplication-wide310x150logo" content="/imgs/logo.jpg" />
        <meta name="msapplication-square310x310logo" content="/imgs/logo.jpg" />

        <meta property="og:title" content={propsSeo.titlepage} />
        <meta property="og:description" content={propsSeo.descriptionpage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={propsSeo.urlpage} />
        <meta property="og:image" content="/imgs/logo.jpg" />
        <meta property="og:site_name" content={propsSeo.titlepage} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:locale:alternate" content="fr_FR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gfrviagens" />
        <meta name="twitter:creator" content="@gfrviagens" />
        <meta name="twitter:title" content={propsSeo.titlepage} />
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
        
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: `{
                    "@context": "http://schema.org/",
                    "@type": "WebSite",
                    "url": "https://gfrviagens.com.br",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://www.google.com/search?q=site:gfrviagens.com.br&oq=site:gfrviagens.com.br&aqs=chrome.0.35i39l2j0l4j46j69i60.6814j1j7&sourceid=chrome&ie=UTF-8{search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }`,
            }}
        />
      </Head>
    </>
  )
}
