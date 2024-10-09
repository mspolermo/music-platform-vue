import upperFirst from 'lodash/upperFirst.js'
import camelCase from 'lodash/camelCase.js'

// for auto-regestring global components
export default {
  install(app) {
    const baseComponents = import.meta.glob('../components/base/*.vue', {
      eager: true
    })

    Object.entries(baseComponents).forEach(([path, module]) => {
      const componentName = upperFirst(
        camelCase(
          path
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
      )
      //console.log(path, componentName)

      // export default
      app.component(`Base${componentName}`, module.default)
    })
  }
}
