import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const port = Number(env.PORT || 5173);
  const allowedHosts = (env.VITE_ALLOWED_HOSTS || "localhost,0.0.0.0")
    .split(",")
    .map((host) => host.trim())
    .filter(Boolean);

  return {
    base: '/',
    plugins: [inspectAttr(), react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true,
      port,
      strictPort: true,
      allowedHosts,
    },
    preview: {
      host: true,
      port,
      strictPort: true,
      allowedHosts,
    },
  };
});
