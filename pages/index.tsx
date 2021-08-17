import Head from 'next/head'

export const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
        <meta name="description" content="Pagina inicial da aplicação" />
      </Head>

      <main>
        <h1>Pagina inicial da aplicação</h1>
      </main>
    </>
  )
}
