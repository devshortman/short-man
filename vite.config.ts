import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/short-man/',   // 꼭 본인 repo 이름으로 바꾸세요
})