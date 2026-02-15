import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cv: resolve(__dirname, 'cv.html'),
        internships: resolve(__dirname, 'internships.html'),
        projects: resolve(__dirname, 'projects.html'),
        achievements: resolve(__dirname, 'achievements.html'),
        hobbies: resolve(__dirname, 'hobbies.html')
      }
    }
  }
})
