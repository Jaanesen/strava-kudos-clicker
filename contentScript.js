function clickAllKudos() {
  var kudosButtons = document.querySelectorAll(
    'button[title="Give kudos"][data-testid="kudos_button"],button[title="Be the first to give kudos!"][data-testid="kudos_button"]'
    + ',button[title="Envoyer des kudos"][data-testid="kudos_button"],button[title="Soyez le premier à envoyer des kudos !"][data-testid="kudos_button"]'
    + ',button[title="Berikan Kudos"][data-testid="kudos_button"],button[title="Jadilah yang pertama memberikan kudos!"][data-testid="kudos_button"]'
    + ',button[title="Kudos geben"][data-testid="kudos_button"],button[title="Sei der erste, der Kudos gibt!"][data-testid="kudos_button"]'
    + ',button[title="Otorgar kudos"][data-testid="kudos_button"],button[title="¡Sé el primero en otorgar kudos!"][data-testid="kudos_button"]'
    + ',button[title="Complimentati con dei kudos"][data-testid="kudos_button"],button[title="Assegna per primo i kudos!"][data-testid="kudos_button"]'
    + ',button[title="Kudos geven"][data-testid="kudos_button"],button[title="Geef als eerste kudos!"][data-testid="kudos_button"]'
    + ',button[title="Dar kudos"][data-testid="kudos_button"],button[title="Seja o primeiro a dar kudos!"][data-testid="kudos_button"]'
    + ',button[title="Поставить зачет"][data-testid="kudos_button"],button[title="Поставьте зачет первым!"][data-testid="kudos_button"]'
    + ',button[title="Kudosする"][data-testid="kudos_button"],button[title="誰よりも早くKudosしよう！"][data-testid="kudos_button"]'
    + ',button[title="按讚"][data-testid="kudos_button"],button[title="成為第一個按讚的人！"][data-testid="kudos_button"]'
  )

  kudosButtons.forEach((button) => {
    console.log('Clicking kudos button, ', button)
    button.click()
  })

  setTimeout(clickAllKudos, 3000)
}

clickAllKudos()
