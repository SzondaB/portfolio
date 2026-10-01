import useLanguage
  from '../../hooks/useLanguage'

function NotFound() {
  const { t } = useLanguage()

  return (
    <main>
      <h1>404</h1>

      <p>
        {t.notFound.message}
      </p>
    </main>
  )
}

export default NotFound