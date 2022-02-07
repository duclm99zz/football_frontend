export const state = () => ({
  currentPath: ''
})

export const mutations = {
  setPath (state, newPath) {
    console.log('Store state path changed === ', newPath)
    state.currentPath = newPath
  }
}