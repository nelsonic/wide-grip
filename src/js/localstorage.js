const { localStorage } = window
const emailKey = 'wide-grip-email'
const passwordKey = 'wide-grip-password'

export function setUser (email, password) {
  localStorage.setItem(emailKey, email)
  localStorage.setItem(passwordKey, password)
}

export function getUser () {
  return {
    email: localStorage.getItem(emailKey),
    password: localStorage.getItem(passwordKey)
  }
}

export function getExercises () {
  return JSON.parse(localStorage.getItem('exercises'))
}

export function setExercises (exercises) {
  return localStorage.setItem('exercises', JSON.stringify(exercises))
}

export function setCurrentWorkout (currentWorkout) {
  return localStorage.setItem('currentWorkout', JSON.stringify(currentWorkout))
}

export function getCurrentWorkout () {
  return JSON.parse(localStorage.getItem('currentWorkout'))
}

export function removeCurrentWorkout () {
  return localStorage.removeItem('currentWorkout')
}
