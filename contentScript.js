function clickAllKudos() {
  var kudosButtons = document.querySelectorAll(
    'button[title="Give kudos"][data-testid="kudos_button"],button[title="Be the first to give kudos!"][data-testid="kudos_button"]'
  )

  kudosButtons.forEach((button) => {
    console.log('Clicking kudos button, ', button)
    button.click()
  })

  setTimeout(clickAllKudos, 3000)
}

clickAllKudos()
